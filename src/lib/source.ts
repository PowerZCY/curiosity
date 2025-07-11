import { blog, legal } from '.source';
import { i18n } from '@/i18n';
import { getIconElement } from '@windrun-huaiin/base-ui/components/server';
import { InferMetaType, InferPageType, loader } from 'fumadocs-core/source';

export const legalSource = loader({
  i18n,
  baseUrl: '/legal',
  source: legal.toFumadocsSource(),
  icon: getIconElement,
});

export const blogSource = loader({
  i18n,
  baseUrl: '/blog',
  source: blog.toFumadocsSource(),
  icon: getIconElement,
});

export type Page = InferPageType<typeof legalSource>;
export type Meta = InferMetaType<typeof legalSource>;

export const mdxSourceMap = {
  blog: blogSource,
  legal: legalSource
}