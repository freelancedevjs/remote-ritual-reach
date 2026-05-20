"use client"
import { useEffect, useRef, useCallback } from "react"

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

const FRAG = `
precision highp float;
uniform vec2  u_res;
uniform vec2  u_mouse;    // normalised 0..1
uniform float u_time;
uniform vec3  u_ripple1;  // xy=ndc, z=birth time
uniform vec3  u_ripple2;
uniform vec3  u_ripple3;

// ── helpers ────────────────────────────────────────────────────────────
float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 19.31);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f*f*(3.0 - 2.0*f);
  return mix(
    mix(hash(i), hash(i+vec2(1,0)), f.x),
    mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x),
    f.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i=0; i<5; i++) {
    v += a * noise(p);
    p  = p * 2.1 + vec2(1.3, 0.7);
    a *= 0.5;
  }
  return v;
}

// ripple contribution
float ripple(vec3 r, vec2 uv, float speed) {
  if (r.z < 0.0) return 0.0;
  float age   = u_time - r.z;
  float radius = age * speed;
  float dist  = length(uv - r.xy);
  float ring  = exp(-pow(dist - radius, 2.0) * 180.0);
  float fade  = exp(-age * 1.2);
  return ring * fade * 0.55;
}

// ── main ───────────────────────────────────────────────────────────────
void main() {
  vec2 uv  = gl_FragCoord.xy / u_res;            // 0..1
  vec2 uvC = (gl_FragCoord.xy - u_res*0.5) / u_res.y; // centred aspect-correct

  // slow drift offset driven by time
  vec2 drift = vec2(u_time*0.04, u_time*0.03);

  // flowing base layer — warped fbm
  vec2 q = vec2(fbm(uvC*2.8 + drift),
                fbm(uvC*2.8 + drift + vec2(5.2, 1.3)));
  vec2 r = vec2(fbm(uvC*2.4 + 4.0*q + vec2(1.7, 9.2) + u_time*0.02),
                fbm(uvC*2.4 + 4.0*q + vec2(8.3, 2.8) + u_time*0.02));
  float f = fbm(uvC*1.8 + 4.0*r);

  // mouse attractor — pulls pattern toward cursor
  vec2  mouseC = u_mouse - vec2(0.5);  // centred
  mouseC.x    *= u_res.x / u_res.y;
  float md     = length(uvC - mouseC);
  float attract = exp(-md * md * 8.0) * 0.55;
  f = mix(f, f + attract * fbm((uvC - mouseC*0.3)*3.0 + drift), 0.6);

  // mouse glow halo
  float glow = exp(-md * md * 20.0) * 0.7;

  // ripple waves from clicks
  float rip = 0.0;
  rip += ripple(u_ripple1, uv, 0.38);
  rip += ripple(u_ripple2, uv, 0.38);
  rip += ripple(u_ripple3, uv, 0.38);

  // fine interference lines over the base
  float lines = sin((uvC.x*14.0 + uvC.y*9.0 + u_time*0.3)*3.14159) * 0.5 + 0.5;
  lines = pow(lines, 6.0) * 0.18;

  // combine
  float bright = f * 0.55 + glow * 0.45 + rip + lines;
  bright = clamp(bright, 0.0, 1.0);

  // colour map: very dark warm base → subtle amber veins
  vec3 dark  = vec3(0.055, 0.048, 0.038);   // stone-950
  vec3 mid   = vec3(0.22,  0.18,  0.12);    // dim amber-brown
  vec3 light = vec3(0.92,  0.74,  0.38);    // warm amber highlight

  vec3 col = mix(dark, mid,   smoothstep(0.0, 0.55, bright));
      col  = mix(col,  light, smoothstep(0.55, 1.0, bright));

  // vignette
  float vig = 1.0 - dot(uvC, uvC) * 1.2;
  col *= clamp(vig, 0.0, 1.0);

  gl_FragColor = vec4(col, 1.0);
}
`

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!
  gl.shaderSource(s, src)
  gl.compileShader(s)
  return s
}

type Ripple = { x: number; y: number; t: number }

export default function HeroShader({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glRef     = useRef<WebGLRenderingContext | null>(null)
  const progRef   = useRef<WebGLProgram | null>(null)
  const frameRef  = useRef(0)
  const mouseRef  = useRef({ x: 0.5, y: 0.5 })
  const ripplesRef = useRef<Ripple[]>([])
  const startRef  = useRef(performance.now())

  // push a ripple on click
  const onClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = 1.0 - (e.clientY - r.top) / r.height
    const t = (performance.now() - startRef.current) / 1000
    const arr = ripplesRef.current
    arr.push({ x, y, t })
    if (arr.length > 3) arr.shift()
  }, [])

  const onMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mouseRef.current = {
      x: (e.clientX - r.left) / r.width,
      y: 1.0 - (e.clientY - r.top) / r.height,
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false })
    if (!gl) return
    glRef.current = gl

    // compile
    const vert = compileShader(gl, gl.VERTEX_SHADER,   VERT)
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG)
    const prog = gl.createProgram()!
    gl.attachShader(prog, vert)
    gl.attachShader(prog, frag)
    gl.linkProgram(prog)
    gl.useProgram(prog)
    progRef.current = prog

    // full-screen quad
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, "a_pos")
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    // resize handler
    function resize() {
      if (!canvas) return
      canvas.width  = canvas.offsetWidth  * devicePixelRatio
      canvas.height = canvas.offsetHeight * devicePixelRatio
      gl!.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // render loop
    function loop() {
      if (!gl || !prog || !canvas) return
      const t = (performance.now() - startRef.current) / 1000

      gl.useProgram(prog)
      const u = (n: string) => gl!.getUniformLocation(prog!, n)

      gl.uniform2f(u("u_res"),   canvas.width, canvas.height)
      gl.uniform2f(u("u_mouse"), mouseRef.current.x, mouseRef.current.y)
      gl.uniform1f(u("u_time"),  t)

      const rips = ripplesRef.current
      const NONE = [-1, -1, -99] as const
      const r = (i: number) => rips[i] ? [rips[i].x, rips[i].y, rips[i].t] as const : NONE
      const [r0, r1, r2] = [r(0), r(1), r(2)]
      gl.uniform3f(u("u_ripple1"), r0[0], r0[1], r0[2])
      gl.uniform3f(u("u_ripple2"), r1[0], r1[1], r1[2])
      gl.uniform3f(u("u_ripple3"), r2[0], r2[1], r2[2])

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      frameRef.current = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(frameRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: "block" }}
      onClick={onClick}
      onMouseMove={onMove}
    />
  )
}
