import { SiteIcon } from '@/components/global-icon';
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export async function baseOptions(): Promise<BaseLayoutProps> {
  return {
    // 导航Header配置
    nav: {
      url: `/`,
      title: (
        <>
          <SiteIcon />
          <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          Re8ger
          </span>
        </>
      ),
      // 导航Header, 透明模式选项: none | top | always
      // https://fumadocs.dev/docs/ui/layouts/docs#transparent-mode
      transparentMode: 'none',
    }
  };
}