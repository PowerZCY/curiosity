import { MetadataRoute } from 'next'
import { appConfig } from "@/lib/appConfig";

// 强制静态生成
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = appConfig.baseUrl

  const routes : MetadataRoute.Sitemap = [
    // 主页面（各语言版本）
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ]

  return routes
}
