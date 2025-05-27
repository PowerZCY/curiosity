'use client';

import { LastUpdatedDate, LLMCopyButton } from '@/components/toc-base';

interface TocFooterProps {
  /**
   * The last modified date of the page.
   */
  lastModified: Date | undefined;
  /**
   * The path to the file for the \"Edit on GitHub\" link.
   * This should be the relative path from the repository root, e.g., 'src/mdx/docs/your-page.mdx'.
   */
  editPath?: string;
}

export function TocFooter({ lastModified }: TocFooterProps) {

  return (
    <div className="flex flex-col gap-y-2 items-start m-4">
      <LastUpdatedDate gitTimestamp={lastModified} />
      <LLMCopyButton />
    </div>
  );
} 