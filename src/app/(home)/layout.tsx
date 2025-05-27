import { blogSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

export default async function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DocsLayout sidebar={{enabled: false}} tree={blogSource.pageTree}>
      {children}
    </DocsLayout>
  );
}