import { baseOptions } from '@/app/[locale]/layout.config';
import NProgressBar from '@/app/[locale]/nProgressBar';
import { Footer } from '@/components/footer';
import { FumaBannerSuit } from '@/components/fuma-banner-suit';
import GoToTop from '@/components/go-to-top';
import { appConfig, generatedLocales, showBanner } from "@/lib/appConfig";
import { cn } from '@/lib/fuma-search-util';
import { HomeLayout, type HomeLayoutProps } from 'fumadocs-ui/layouts/home';
import { RootProvider } from "fumadocs-ui/provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import './globals.css';


export const dynamic = 'force-dynamic'

// 网站元数据
export async function generateMetadata({
  params: paramsPromise
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await paramsPromise;
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('webTitle'),
    description: t('webDescription'),
    keywords: t('keywords'),
    metadataBase: new URL(appConfig.baseUrl),
    alternates: {
      canonical: `${appConfig.baseUrl}/${locale}`,
      languages: {
        "en": `${appConfig.baseUrl}/en`,
      }
    },
    icons: [
      { rel: "icon", type: 'image/png', sizes: "16x16", url: "/favicon-16x16.png" },
      { rel: "icon", type: 'image/png', sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: 'image/ico', url: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon-180x180.png" },
      { rel: "android-chrome", sizes: "512x512", url: "/favicon-512x512.png" },
    ]
  }
}

async function homeOptions(locale: string): Promise<HomeLayoutProps> {
  return {
    ...(await baseOptions(locale)),
    links: [
      
    ]
  };
}

export default async function RootLayout({
  children,
  params: paramsPromise  // 重命名参数
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await paramsPromise;  // 使用新名称
  setRequestLocale(locale);
  const messages = await getMessages();
  const customeOptions = await homeOptions(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <NextIntlClientProvider messages={messages}>
        <body>
          <NProgressBar />
          <RootProvider
            i18n={{
              locale: locale,
              // available languages
              locales: generatedLocales,
              // translations for UI
              translations: { cn }[locale],
            }}
          >
            <HomeLayout
              {...customeOptions}
              searchToggle={{
                enabled: false,
              }}
              themeSwitch={{
                enabled: true,
                mode: 'light-dark-system',
              }}
              className={`dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)] pt-25 ${showBanner ? 'has-banner' : 'no-banner'}`}
              >
              <FumaBannerSuit showText={showBanner}/>
              {children}
              <Footer />
              <GoToTop />
            </HomeLayout>

          </RootProvider>
        </body>
        {/* <GoogleAnalyticsScript /> */}
      </NextIntlClientProvider>
    </html>
  )
}
