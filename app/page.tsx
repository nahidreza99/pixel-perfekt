import React from 'react'
import type { Metadata } from 'next'

import dataFetchingImage from './_assets/data-fetching.png'
import BlogCard from './_components/BlogCard'
import CallToAction from './_components/CallToAction'
import Container from './_components/Container'
import Reveal from './_components/Reveal'

export default function Page() {
  return (
    <main>
      <Container>
        <Reveal className="max-w-[640px] mx-auto py-[100px]">
          <h1 className="text-center md:text-[3.75rem] text-[2.5rem] leading-[100%] inline-block">
            <span className="">Lorem ipsum dolor sit amet </span>
            <span className="text-[#f7955c]">Lorem ipsum dolor sit amet con.</span>
          </h1>
        </Reveal>
        <div className="md:w-fit w-full max-w-[640px] mx-auto flex flex-col gap-[10px] items-center">
          <CallToAction />
          <p className="md:self-start font-thin">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </Container>
      <Container
        id="blogs"
        className="py-[100px] grid gap-[10px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
      >
        {blogs.map((blog, idx) => {
          return (
            <Reveal key={idx}>
              <BlogCard
                thumbnail={blog.thumbnail}
                title={blog.title}
                tags={blog.tags}
                slug={blog.slug}
              />
            </Reveal>
          )
        })}
      </Container>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Pixel Perfekt',
  description:
    "Stay ahead in web development! Explore the latest trends, cutting-edge technologies, and practical solutions on our blog. From AI integration to serverless architecture, we've got you covered. Dive into the world of web development with us!",
}

const blogs = [
  {
    thumbnail: dataFetchingImage,
    title: "Next.js Data Fetching and Page Render: SSG, SSR and ISR Beginner's Guide",
    tags: ['Next.js', 'Data-Fetching', 'Caching', 'SSR', 'ISR', 'SSG'],
    slug: 'nextjs-data-fetching-and-page-render-ssg-ssr-and-isr-beginners-guide',
  },
]
