"use client"
import { useEffect, useRef } from "react"

type Coord = [number, number] // [longitude, latitude]

// Simplified land polygons — orthographic projection friendly
// Each array: sequence of [lon, lat] points forming a closed polygon
const LAND: Coord[][] = [
  // North America
  [[-168,71],[-163,71],[-140,70],[-130,68],[-120,66],[-110,74],[-90,79],[-75,83],[-60,83],
   [-45,80],[-50,76],[-55,70],[-60,65],[-64,60],[-66,58],[-64,52],[-66,50],[-70,47],
   [-66,44],[-70,43],[-72,41],[-74,40],[-76,35],[-80,32],[-82,30],[-90,29],[-94,29],
   [-97,26],[-99,22],[-104,20],[-105,19],[-90,16],[-83,9],[-78,8],[-75,10],[-74,11],
   [-80,10],[-83,9],[-88,16],[-90,18],[-97,22],[-104,20],[-105,21],[-110,24],[-117,32],
   [-120,34],[-122,37],[-124,41],[-124,46],[-124,49],[-123,50],[-130,55],[-134,58],
   [-140,60],[-145,62],[-152,58],[-158,56],[-162,60],[-166,62],[-168,66],[-168,71]],
  // Greenland
  [[-52,82],[-35,83],[-20,83],[-15,78],[-18,74],[-22,70],[-28,66],[-34,62],[-44,60],
   [-52,62],[-58,66],[-60,70],[-58,76],[-52,82]],
  // South America
  [[-80,8],[-78,8],[-74,11],[-65,12],[-62,12],[-60,7],[-56,4],[-52,2],[-50,0],
   [-48,-2],[-44,-2],[-36,-4],[-34,-8],[-36,-10],[-38,-14],[-40,-20],[-42,-22],
   [-44,-24],[-48,-28],[-50,-30],[-52,-34],[-54,-35],[-56,-38],[-62,-38],
   [-64,-42],[-66,-46],[-68,-52],[-68,-55],[-70,-55],[-72,-50],[-74,-45],[-74,-40],
   [-72,-36],[-70,-30],[-70,-24],[-72,-18],[-76,-12],[-78,-6],[-80,0],[-80,8]],
  // Europe
  [[-9,37],[-6,36],[-2,36],[2,38],[5,40],[10,44],[13,44],[16,44],[18,44],[20,42],
   [22,40],[24,38],[28,40],[28,42],[30,46],[32,48],[36,50],[38,52],[36,56],[28,56],
   [24,58],[22,60],[24,64],[26,66],[28,68],[30,70],[26,72],[20,70],[16,68],[14,64],
   [10,60],[8,58],[6,57],[4,53],[2,52],[0,51],[2,50],[5,49],[8,48],[12,48],
   [14,50],[16,50],[20,48],[22,48],[24,46],[28,46],[30,46],[28,44],[24,44],[22,42],
   [20,42],[18,42],[16,40],[14,38],[12,37],[8,37],[5,36],[2,36],[0,36],[-2,37],
   [-4,38],[-8,40],[-9,37]],
  // Scandinavia
  [[4,58],[8,58],[12,56],[14,56],[16,58],[18,60],[20,62],[22,64],[24,66],[26,68],
   [28,70],[30,70],[28,72],[22,72],[20,70],[18,68],[16,66],[14,64],[12,62],[10,60],
   [8,58],[5,58],[4,58]],
  // British Isles
  [[-6,50],[-4,52],[-2,54],[-2,56],[-3,57],[-4,58],[-3,56],[-2,54],[0,52],
   [0,51],[0,50],[-2,50],[-4,51],[-5,50],[-6,50]],
  // Africa
  [[-6,35],[-2,35],[2,37],[6,37],[10,37],[14,34],[16,30],[18,22],[20,16],[22,12],
   [24,8],[28,6],[32,2],[36,0],[38,-4],[40,-8],[38,-12],[36,-16],[34,-20],[34,-24],
   [32,-28],[30,-32],[28,-34],[24,-34],[20,-34],[18,-30],[16,-28],[14,-22],[12,-18],
   [10,-14],[8,-8],[6,-4],[4,0],[2,4],[-2,6],[-6,4],[-8,4],[-10,6],[-12,8],
   [-14,10],[-16,14],[-16,18],[-14,20],[-12,24],[-10,30],[-8,32],[-6,35]],
  // Madagascar
  [[44,-12],[46,-14],[48,-18],[50,-20],[48,-24],[46,-24],[44,-22],[44,-16],[44,-12]],
  // Asia main body
  [[26,42],[28,44],[30,46],[36,48],[40,46],[44,42],[46,40],[48,38],[52,34],[56,26],
   [60,22],[64,22],[68,22],[72,22],[72,26],[70,30],[72,34],[74,36],[76,34],[78,30],
   [80,28],[84,28],[86,26],[88,26],[90,22],[92,22],[94,20],[96,18],[98,16],[100,12],
   [102,8],[104,4],[106,2],[108,2],[110,0],[112,-2],[114,0],[116,2],[118,4],[120,4],
   [122,6],[124,10],[126,14],[128,20],[130,26],[130,32],[132,36],[134,40],[136,44],
   [138,48],[140,52],[140,56],[138,56],[136,54],[132,52],[130,48],[128,44],[124,40],
   [120,36],[116,32],[112,28],[108,24],[104,20],[100,18],[96,18],[94,22],[90,26],
   [88,28],[84,30],[80,30],[76,34],[72,36],[68,38],[64,40],[60,42],[56,44],[52,44],
   [48,42],[44,40],[40,42],[36,44],[32,44],[30,46],[28,44],[26,42]],
  // Indian Subcontinent
  [[68,22],[72,22],[76,18],[80,14],[80,10],[82,8],[80,8],[78,8],[76,8],
   [74,10],[72,14],[68,18],[66,22],[68,22]],
  // Indochina
  [[98,16],[100,14],[102,10],[104,6],[104,2],[106,2],[104,0],[102,-2],
   [100,-2],[100,2],[98,4],[96,6],[94,8],[92,8],[94,12],[96,16],[98,16]],
  // Indonesia (simplified)
  [[96,6],[100,2],[104,0],[106,-2],[108,-6],[110,-8],[108,-8],[106,-8],
   [104,-6],[102,-4],[100,-2],[98,0],[96,4],[96,6]],
  // Philippines
  [[118,8],[120,10],[122,12],[124,14],[124,18],[122,18],[120,16],[118,14],[116,10],[118,8]],
  // Japan
  [[130,32],[132,34],[134,36],[136,38],[138,40],[140,42],[142,44],[144,44],
   [142,42],[140,40],[138,38],[136,36],[134,34],[132,32],[130,32]],
  // Korea
  [[126,34],[128,36],[130,38],[130,40],[128,40],[126,38],[126,34]],
  // Taiwan
  [[120,22],[122,24],[122,26],[120,26],[120,22]],
  // Sri Lanka
  [[80,10],[82,8],[82,6],[80,6],[78,6],[80,8],[80,10]],
  // Australia
  [[114,-22],[116,-20],[120,-18],[124,-16],[128,-14],[132,-12],[136,-12],[138,-14],
   [140,-16],[142,-18],[144,-20],[146,-22],[148,-24],[150,-26],[152,-28],[152,-32],
   [150,-36],[148,-38],[144,-38],[140,-36],[138,-34],[136,-34],[132,-32],[128,-32],
   [124,-28],[122,-24],[118,-22],[116,-20],[114,-22]],
  // New Zealand
  [[172,-34],[174,-36],[176,-38],[178,-40],[178,-44],[176,-46],[174,-46],
   [172,-44],[172,-42],[170,-44],[170,-42],[172,-38],[174,-36],[172,-34]],
  // Iceland
  [[-24,64],[-20,64],[-14,64],[-14,66],[-18,68],[-22,66],[-24,64]],
  // Cuba
  [[-74,20],[-78,22],[-82,22],[-84,22],[-82,22],[-80,20],[-76,20],[-74,20]],
]

const toRad = (d: number) => (d * Math.PI) / 180

export default function GlobeLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const elapsed = useRef(0)
  const lastT = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const W = 200, H = 200
    const cx = W / 2, cy = H / 2
    const R = 66 // globe radius — leaves room for whirl rings

    // Whirl ring config: radius, dash pattern, rotation-speed multiplier, opacity, line width
    const RINGS = [
      { r: R + 9,  dash: [4, 12], spd: 1.0,  op: 0.22, w: 1.1 },
      { r: R + 16, dash: [2, 9],  spd: -1.4, op: 0.17, w: 1.0 },
      { r: R + 23, dash: [5, 16], spd: 0.8,  op: 0.13, w: 0.9 },
      { r: R + 30, dash: [2, 20], spd: -1.0, op: 0.09, w: 0.8 },
      { r: R + 37, dash: [3, 28], spd: 1.3,  op: 0.06, w: 0.7 },
      { r: R + 43, dash: [1, 34], spd: -0.6, op: 0.04, w: 0.6 },
    ]

    function draw(rotation: number) {
      // Off-white background
      ctx!.fillStyle = "#f5f2ee"
      ctx!.fillRect(0, 0, W, H)

      // ── WHIRL RINGS (behind globe) ──────────────────────────────────────
      for (const ring of RINGS) {
        const angle = rotation * ring.spd * toRad(1) * 2
        ctx!.save()
        ctx!.translate(cx, cy)
        ctx!.rotate(angle)
        ctx!.strokeStyle = `rgba(30,26,20,${ring.op})`
        ctx!.lineWidth = ring.w
        ctx!.setLineDash(ring.dash)
        ctx!.beginPath()
        ctx!.arc(0, 0, ring.r, 0, Math.PI * 2)
        ctx!.stroke()
        ctx!.setLineDash([])
        ctx!.restore()
      }

      // Spiral arms — 5 short arcs that sweep around creating vortex feel
      const ARM_COUNT = 5
      for (let i = 0; i < ARM_COUNT; i++) {
        const baseAngle = rotation * toRad(1) * 1.8 + (i * Math.PI * 2) / ARM_COUNT
        const rInner = R + 10
        const rOuter = R + 40
        ctx!.save()
        ctx!.translate(cx, cy)
        ctx!.strokeStyle = `rgba(30,26,20,0.09)`
        ctx!.lineWidth = 0.8
        // Draw arc at progressively larger radius — creates spiral arm illusion
        for (let step = 0; step < 6; step++) {
          const frac = step / 5
          const r2 = rInner + (rOuter - rInner) * frac
          const a = baseAngle + frac * 0.9
          ctx!.beginPath()
          ctx!.arc(0, 0, r2, a, a + 0.35)
          ctx!.stroke()
        }
        ctx!.restore()
      }

      // ── GLOBE ────────────────────────────────────────────────────────────
      ctx!.save()
      ctx!.beginPath()
      ctx!.arc(cx, cy, R, 0, Math.PI * 2)
      ctx!.clip()

      // Globe ocean background
      ctx!.fillStyle = "#ede9e2"
      ctx!.fillRect(cx - R, cy - R, R * 2, R * 2)

      // Faint graticule (lat/lon lines)
      ctx!.strokeStyle = "rgba(30,26,20,0.06)"
      ctx!.lineWidth = 0.4
      ctx!.setLineDash([1, 5])
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx!.beginPath()
        let first = true
        for (let lon = -180; lon <= 180; lon += 3) {
          const lr = toRad(lon - rotation), φr = toRad(lat)
          if (Math.cos(φr) * Math.cos(lr) < 0) { first = true; continue }
          const x = cx + R * Math.cos(φr) * Math.sin(lr)
          const y = cy - R * Math.sin(φr)
          first ? ctx!.moveTo(x, y) : ctx!.lineTo(x, y)
          first = false
        }
        ctx!.stroke()
      }
      for (let lon = 0; lon < 360; lon += 30) {
        ctx!.beginPath()
        let first = true
        for (let lat = -88; lat <= 88; lat += 3) {
          const lr = toRad(lon - rotation), φr = toRad(lat)
          if (Math.cos(φr) * Math.cos(lr) < 0) { first = true; continue }
          const x = cx + R * Math.cos(φr) * Math.sin(lr)
          const y = cy - R * Math.sin(φr)
          first ? ctx!.moveTo(x, y) : ctx!.lineTo(x, y)
          first = false
        }
        ctx!.stroke()
      }
      ctx!.setLineDash([])

      // Land polygons
      ctx!.fillStyle = "#24201a"
      ctx!.strokeStyle = "#24201a"
      ctx!.lineWidth = 0.5

      for (const poly of LAND) {
        ctx!.beginPath()
        let started = false
        let prevVis = false
        for (const [lon, lat] of poly) {
          const lr = toRad(lon - rotation), φr = toRad(lat)
          const vis = Math.cos(φr) * Math.cos(lr) > -0.08
          if (!vis) { prevVis = false; continue }
          const x = cx + R * Math.cos(φr) * Math.sin(lr)
          const y = cy - R * Math.sin(φr)
          if (!started || !prevVis) { ctx!.moveTo(x, y); started = true }
          else ctx!.lineTo(x, y)
          prevVis = true
        }
        ctx!.closePath()
        ctx!.fill()
      }

      ctx!.restore()

      // Globe border
      ctx!.beginPath()
      ctx!.arc(cx, cy, R, 0, Math.PI * 2)
      ctx!.strokeStyle = "#24201a"
      ctx!.lineWidth = 1.5
      ctx!.stroke()

      // Sphere shading — radial gradient for 3-D feel
      const g = ctx!.createRadialGradient(cx - R * 0.28, cy - R * 0.28, R * 0.05, cx, cy, R)
      g.addColorStop(0, "rgba(255,255,255,0.18)")
      g.addColorStop(0.45, "rgba(255,255,255,0.0)")
      g.addColorStop(1, "rgba(0,0,0,0.28)")
      ctx!.beginPath()
      ctx!.arc(cx, cy, R, 0, Math.PI * 2)
      ctx!.fillStyle = g
      ctx!.fill()
    }

    function loop(t: number) {
      const dt = lastT.current ? t - lastT.current : 16
      lastT.current = t
      elapsed.current += dt
      draw(elapsed.current * 0.022) // degrees of rotation
      frameRef.current = requestAnimationFrame(loop)
    }

    frameRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  return (
    <div
      style={{ width: 200, height: 200, background: "#f5f2ee" }}
      className="flex items-center justify-center"
    >
      <canvas ref={canvasRef} width={200} height={200} />
    </div>
  )
}
