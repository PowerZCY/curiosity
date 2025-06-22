import { baseOptions } from '@/app/layout.config';
import NProgressBar from '@/app/nProgressBar';
import { Footer } from '@/components/footer';
import { FumaBannerSuit } from '@/components/fuma-banner-suit';
import GoToTop from '@/components/go-to-top';
import { appConfig, showBanner } from "@/lib/appConfig";
import { HomeLayout, type HomeLayoutProps } from 'fumadocs-ui/layouts/home';
import { RootProvider } from "fumadocs-ui/provider";
import './globals.css';
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const dynamic = 'force-dynamic'

// 网站元数据
export async function generateMetadata() {

  return {
    title: 'Re8ger',
    description: 'Re8ger',
    keywords: 'Re8ger',
    metadataBase: new URL(appConfig.baseUrl),
    alternates: {
      canonical: `${appConfig.baseUrl}`,
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

async function homeOptions(): Promise<HomeLayoutProps> {
  return {
    ...(await baseOptions()),
    links: [
      
    ]
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const customeOptions = await homeOptions();
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <NProgressBar />
        <RootProvider >
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
    </html>
  )
}
