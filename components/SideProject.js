import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SideProject({
  thumbnailUrl,
  href,
  title,
  description
}) {
  return (
    <div className="mb-4 flex items-center space-x-4 last:mb-0">
      <Image
        src={thumbnailUrl}
        alt={title}
        width={60}
        height={60}
        priority
        className="next-image"
      />
      <div className="flex flex-1 flex-col space-y-1">
        <a
          href={href}
          target="_blank"
          className="!font-extrabold !no-underline"
        >
          {title}
        </a>
        <span className="text-gray-400">{description}</span>
      </div>
    </div>
  )
}
