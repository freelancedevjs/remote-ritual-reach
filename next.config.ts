import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

export default withNextIntl({
  output: "export",        // static HTML export — required for GitHub Pages
  trailingSlash: true,     // /en/ → out/en/index.html — works better on static hosts
  images: {
    unoptimized: true,     // next/image optimisation needs a Node server; disable for static
  },
  // If deploying to a github.io sub-path (not a custom domain) uncomment:
  // basePath: '/remote-ritual-reach',
})
