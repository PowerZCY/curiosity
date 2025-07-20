import { blogSource } from '@/lib/source-blog';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactNode;
}) {
  const { locale } = await params;
  
  if (!blogSource.pageTree[locale]) {
    throw new Error('pageTree 没有对应的 locale: ' + locale);
  }
  
  return (
    <DocsLayout sidebar={{enabled: false}} tree={blogSource.pageTree[locale]}>
      {children}
    </DocsLayout>
  );
}