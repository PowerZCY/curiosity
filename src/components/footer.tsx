'use client'

import { globalLucideIcons as icons } from '@/components/global-icon';
import Link from "next/link";

export function Footer() {

  return (
    <div className="mb-10 w-full mx-auto border-t-purple-700/80 border-t-1">
      <footer>
        <div className="w-full flex flex-col items-center justify-center px-4 py-8 space-y-3">
          {/* 第一行：居中icon跳转链接 */}
          <div className="flex items-center justify-center space-x-6 text-xs">
            <Link href={`/legal/terms`} className="flex items-center space-x-1 hover:underline">
              <icons.ReceiptText className="h-3.5 w-3.5"/>
              <span>Terms of Service</span>
            </Link>
            <Link href={`/legal/privacy`} className="flex items-center space-x-1 hover:underline">
              <icons.ShieldUser className="h-3.5 w-3.5"/>
              <span>Privacy Policy</span>
            </Link>
          </div>
          {/* 第二行：版权声明 */}
          <div className="text-xs text-center">
            <span>
            Copyright © {new Date().getFullYear()} Re8ger. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

