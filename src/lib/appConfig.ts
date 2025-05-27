
export const appConfig = {
  // 基础配置
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://ddaas.de8ger.com',

  // 国际化配置
  // - 英语 (en)
  // - 简体中文 (zh)
  // - 日语 (ja)
  // - 韩语 (ko)
  // - 法语 (fr)
  // - 德语 (de)
  // - 西班牙语 (es)
  // - 意大利语 (it)
  // - 土耳其语 (tr)
  // - 波兰语 (pl)
  i18n: {
    // locales: ["en", "zh", "ja", "ko", "fr", "de", "es", "it", "pt", "tr", "pl"] as const,
    locales: ["en"] as const,
    defaultLocale: "en" as const,
    localeLabels: {
      en: "English",
      // zh: "简体中文",
      // ja: "日本語",
      // ko: "한국어",
      // fr: "Français",
      // de: "Deutsch",
      // es: "Español",
      // it: "Italiano",
      // pt: "Português",
      // tr: "Türkçe",
      // pl: "Polski",
    },
    messageRoot: 'messages',
  },
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

// 辅助函数：检查是否为支持的语言
function isSupportedLocale(locale: string): locale is typeof appConfig.i18n.locales[number] {
  return (appConfig.i18n.locales as readonly string[]).includes(locale);
}

// 辅助函数：获取有效的语言设置
// 如果当前语言不支持，则返回默认语言
export function getValidLocale(locale: string): typeof appConfig.i18n.locales[number] {
  return isSupportedLocale(locale) ? locale : appConfig.i18n.defaultLocale;
}

export const generatedLocales = appConfig.i18n.locales.map((loc) => ({
  name: appConfig.i18n.localeLabels[loc as keyof typeof appConfig.i18n.localeLabels],
  locale: loc,
}));