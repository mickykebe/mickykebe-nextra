import * as React from "react";
import Image from "next/image";

export default function PortfolioVisual({
  caption,
  imageSrcList,
  width,
  height,
}) {
  return (
    <div className="flex flex-col space-y-1 rounded-md bg-zinc-300 p-3 dark:bg-slate-800">
      <div className="flex space-x-4 overflow-x-scroll rounded-sm bg-zinc-200 p-4 dark:bg-slate-700">
        {imageSrcList.map((imageSrc, index) => (
          <Image
            key={index}
            src={imageSrc}
            className="m-0 rounded-sm shadow-md"
            width={width}
            height={height}
          />
        ))}
      </div>
      <div className="flex items-center">
        <figcaption className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {caption}
        </figcaption>
      </div>
    </div>
  );
}
