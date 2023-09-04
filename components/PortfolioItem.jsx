import * as React from "react";
import Image from "next/image";
import PortfolioVisual from "./PortfolioVisual";
import Link from "next/link";

export default function PortfolioItem({
  title,
  screenshotCaption,
  screenshotImageSrcList,
  description,
  href,
  visualClassName,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4">
      <Link href={href} className="text-2xl font-bold no-underline">
        {title}
      </Link>
      <PortfolioVisual
        caption={screenshotCaption}
        imageSrcList={screenshotImageSrcList}
        className={visualClassName}
      />
      <p
        className={`relative mb-1 h-32 overflow-hidden text-sm leading-relaxed after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:block after:bg-gradient-to-b after:from-transparent after:to-white after:content-[''] dark:after:to-slate-900`}>
        {description}
      </p>
      <Link href={href} className="post-item-more text-sm">
        Read More →
      </Link>
    </div>
  );
}
