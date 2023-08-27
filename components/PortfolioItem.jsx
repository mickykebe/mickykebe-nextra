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
  width,
  height,
}) {
  return (
    <div className="grid gap-x-6 gap-y-4 mb-6">
      <Link as="h3" href={href} className="font-bold text-xl no-underline">
        {title}
      </Link>
      <PortfolioVisual
        caption={screenshotCaption}
        imageSrcList={screenshotImageSrcList}
        width={width}
        height={height}
      />
      <p
        className={`text-sm leading-relaxed relative h-32 overflow-hidden after:block after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:content-[''] after:bg-gradient-to-b after:from-transparent after:to-white mb-1`}>
        {description}
      </p>
      <Link href={href} className="post-item-more text-sm">
        Read More →
      </Link>
    </div>
  );
}
