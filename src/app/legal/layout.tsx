import type { ReactNode } from 'react';
import { legalSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default async function Layout({
  children,
}: {
  children: ReactNode;
}) {
 
  return (
    <DocsLayout sidebar={{enabled: false}} tree={legalSource.pageTree}>
      {children}
    </DocsLayout>
  );
}