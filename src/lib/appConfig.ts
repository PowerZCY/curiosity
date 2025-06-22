
export const appConfig = {
  githubBaseUrl: process.env.NEXT_PUBLIC_GITHUB_BASE_URL,
  // 基础配置
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://ddaas.de8ger.com',
  style: {
    icon: {
      // 所有图标默认颜色, 注意在SVG中fill参数填充色映射为#AC62FD
      uniformColor: process.env.NEXT_PUBLIC_STYLE_ICON_COLOR || "text-purple-500"
    },
    showBanner: process.env.NEXT_PUBLIC_STYLE_SHOW_BANNER === 'true',
    watermark: {
      // 只有NEXT_PUBLIC_的变量才能被client组件访问!
      enabled: process.env.NEXT_PUBLIC_STYLE_WATERMARK_ENABLED === 'true',
      text: process.env.NEXT_PUBLIC_STYLE_WATERMARK_TEXT || "巽川·怀因"
    },
    cdnBaseUrl: "https://raw.githubusercontent.com/caofanCPU/wind-run-1/main/public",
    placeHolder: {
      image: "/default.webp"
    }
  },
  mdxSourceDir: {
    blog: "src/mdx/blog",
    legal: "src/mdx/legal"
  }
};

export const iconColor = appConfig.style.icon.uniformColor
export const watermark = appConfig.style.watermark
export const showBanner = appConfig.style.showBanner
export const placeHolderImage = appConfig.style.placeHolder.image