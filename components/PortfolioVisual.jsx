import * as React from "react";
import Image from "next/image";

export default function PortfolioVisual({ caption, imageSrcList }) {
  return (
    <div className="flex flex-col space-y-3 bg-zinc-200 p-3 rounded-md">
      <div className="flex space-x-4 rounded-sm overflow-x-scroll p-4 bg-zinc-500/50">
        {imageSrcList.map((imageSrc, index) => (
          <Image
            key={index}
            src={imageSrc}
            className="rounded-sm shadow-md"
            width={250}
            height={444}
          />
        ))}
      </div>
      <div className="flex items-center">
        <figcaption className="text-sm font-medium">{caption}</figcaption>
      </div>
    </div>
  );
}
