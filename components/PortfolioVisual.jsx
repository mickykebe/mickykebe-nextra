import * as React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function PortfolioVisual({ caption, imageSrcList, className }) {
  return (
    <div className="flex flex-col space-y-1 rounded-md bg-zinc-300 p-3 dark:bg-slate-800">
      <div className="flex space-x-4 overflow-x-scroll rounded-sm bg-zinc-200 p-4 dark:bg-slate-700">
        {imageSrcList.map((imageSrc, index) => (
          <figure
            className={twMerge(clsx("relative m-0 flex-shrink-0", className))}>
            <Image
              key={index}
              src={imageSrc}
              fill
              className="m-0 rounded-sm shadow-md"
            />
          </figure>
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
