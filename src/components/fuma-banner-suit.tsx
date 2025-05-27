'use client'

import { Banner } from 'fumadocs-ui/components/banner';

export function FumaBannerSuit({ showText }: { showText: boolean }) {
  return (
    showText ?
      (<Banner variant="rainbow" changeLayout={true}>
        <p className="text-xl">Re8ger</p>
      </Banner>)
      : (<Banner variant="normal" changeLayout={true} className="bg-white dark:bg-[rgb(10,10,10)]"/>)
  );
}

