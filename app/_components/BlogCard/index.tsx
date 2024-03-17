import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  thumbnail: {
    src: string
    width: number
    height: number
  }
  title: string
  tags: string[]
  slug: string
}

const BlogCard: React.FC<Props> = ({ thumbnail, title, tags, slug }) => {
  return (
    <div className="bg-[#ecd9c3] dark:bg-[#101724] px-[15px] py-[10px] rounded-[10px] flex flex-col">
      <Link href={'/blog/' + slug} className="mt-[60px] mb-[40px] self-center">
        <Image
          src={thumbnail.src}
          alt="Placeholder Image"
          width={thumbnail.width}
          height={thumbnail.height}
          className="w-[95%] mx-auto rounded-[5px]"
        />
      </Link>
      <Link href={'/blog/' + slug} className="">
        <h3 className="text-[16px]">{title}</h3>
      </Link>
      <div className="flex flex-row-reverse w-full overflow-auto">
        <div className="mt-[20px] flex flex-row-reverse gap-[10px] justify-end w-min">
          {tags.map((t, idx) => {
            return (
              <div
                key={idx}
                className="rounded-[5px] px-[10px] py-[7px] leading-none text-[14px] bg-[#f0d0a0] dark:bg-[#121e35] w-max"
              >
                <span>{t}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BlogCard
