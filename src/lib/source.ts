import { blog, legal } from '.source';
import { globalLucideIcons as icons } from '@/components/global-icon';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';

// 新提取的函数
function getIconElement(icon: string | undefined, defaultIconKey: keyof typeof icons = 'BTC') {
  if (icon) {
    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
    // 如果 frontmatter 中指定的图标无效，则使用 defaultIconKey 对应的图标
    return createElement(icons[defaultIconKey]);
  }
  return undefined;
}

export const blogSource = loader({
  baseUrl: '/',
  source: blog.toFumadocsSource(),
  icon: getIconElement,
});

export const legalSource = loader({
  baseUrl: '/legal',
  source: legal.toFumadocsSource(),
  icon: getIconElement,
});
