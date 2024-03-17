import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import nextjsAppRouterBlogThumbnail from '../../_assets/data-fetching.png'
import Code from '../../_components/Code'
import CodeSnippet from '../../_components/CodeSnippet'
import Container from '../../_components/Container'

const Page: React.FC = () => {
  return (
    <main>
      <Container className="py-[100px] flex flex-col gap-[40px]">
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className=" max-w-[880px] text-center font-semibold md:text-[32px] sm:text-[28px] text-[24px]">
            Next.js Data Fetching and Page Render: SSG, SSR and ISR Beginner's Guide
          </h1>
          <Image
            className="md:w-[720px] sm:w-[85%]"
            src={nextjsAppRouterBlogThumbnail.src}
            width={nextjsAppRouterBlogThumbnail.width}
            height={nextjsAppRouterBlogThumbnail.height}
            alt="Nextjs App Router Data Fetching Block Image"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2
            id="introduction"
            className="md:text-[24px] text-[20px] border-b-[1px] dark:border-b-babyPowder border-b-midNightBlue"
          >
            <Link
              href={'#introduction'}
              className="transition-opacity duration-150 opacity-10 hover:opacity-100 font-bold"
            >
              #
            </Link>{' '}
            Introduction
          </h2>
          <p>
            Next.js, a versatile React framework, empowers developers with robust tools for creating
            high-performance web applications. At the heart of Next.js lies its powerful data
            fetching scheme in both the <span className="font-bold">App Router</span> and the{' '}
            <span className="font-bold">Page Router</span>, which helps fetch page data from remote
            sources. Sometimes, the page data of a next.js application is fetched from{' '}
            <span className="font-bold">headless cms</span>. In that case, data are often fetched
            through api call to the headless cms.
          </p>
          <p>
            Next.js uses server side rendering which generates the pages on the server and serves
            them to the client. So, the page data is fetched on the server beforehand the request.
            In this article, you'll see how to fetch data in Next.js pages efficiently and implement
            SSG, SSR and ISR in your Next.js application.
          </p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2
            id="ssg-ssr-and-isr"
            className="md:text-[24px] text-[20px] border-b-[1px] dark:border-b-babyPowder border-b-midNightBlue"
          >
            <Link
              href={'#ssg-ssr-and-isr'}
              className="transition-opacity duration-150 opacity-10 hover:opacity-100 font-bold"
            >
              #
            </Link>{' '}
            SSG, SSR and ISR
          </h2>
          <p>
            To learn about SSG, SSR and ISR, let's know what is CSR (Client Side Rendering) first.
            CSR is a popular page rendering method used in modern web development that requires
            real-time data update and dynamic content delivery. But it comes with it's own drawback.
            It fetches the data on client's browser resulting in an increased SEO. For web
            applications that only fetches data once or doesn't have a complex and dynamic data
            model, i.g., Blogs, Ecommerce, Landing Page, etc. That's where Next.js brings it's
            powerful server side rendering that fetches the data on the server to reduce client side
            javascript and blocking time to improve SEO.
          </p>
          <p>
            <span className="font-bold">SSG</span>(Static Site Generation) is the default rendering
            method in Next.js. In this approach the remote data will be fetched and cached on the
            server and pages will be generated as plain HTML resulting in a blazing fast page load
            time. But it will not allow dynamic data update as the pages are static HTML files.
          </p>
          <p>
            In <span className="font-bold">SSR</span>(Server Side Render), the page will be
            generated on each request on the server and delivered to the client browser. It is
            useful for application that uses dynamic data streamline and has customized pages for
            each users.
          </p>
          <p>
            <span className="font-bold">ISR</span>(Incremental Static Regeneration) is an extenstion
            of SSG. It's a powerful feature in Next.js that allows to regenerate Static Site when
            new data is available. The pages are initially built as SSG and revalidated on demand.
            To control the update behavior, a revalidation time is defined or a server action is
            defined that receives a request and revalidates a component using{' '}
            <Code code="revalidateTag" /> or revalidating path on demand.
          </p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2
            id="static-site-generation"
            className="md:text-[24px] text-[20px] border-b-[1px] dark:border-b-babyPowder border-b-midNightBlue"
          >
            <Link
              href={'#static-site-generation'}
              className="transition-opacity duration-150 opacity-10 hover:opacity-100 font-bold"
            >
              #
            </Link>{' '}
            Static Site Generation
          </h2>
          <p>
            In the <span className="font-bold">App Router</span>, Next.js will automatically
            generate a route as SSG if all of it's features and API calls are cached. Hence, if a
            page is not server rendered, it is generated as static page with HTML+JSON. You can also
            ensure a page will be statically generated by using the route segment option{' '}
            <Code code="const dynamic = 'force-dynamic'" /> or by strictly force caching a{' '}
            <Code code="fetch" /> request with <Code code="cache: 'force-cache'" />. By default,
            Nextjs will cache a <Code code="fetch" /> request so you don't have to enforce caching.
          </p>
          <CodeSnippet fileName="app/blog-1/page.jsx" code={ssgAppRouterCode} />
          <p>
            The <Code code="fetch" /> request will be cached and the route will be statically
            rendered. The page will be generated on the server during build time and served to the
            client's browser.
          </p>
          <p>
            In the <span className="font-bold">Page Router</span>, you decide which route to render
            as SSR and which route to render as SSG. To statically render a page, you have to use
            the <Code code="getStaticProps" /> to pass the static data to the page.
          </p>
          <CodeSnippet fileName="page/blog-1.jsx" code={ssgPageRouterCode} />
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2
            id="server-side-render"
            className="md:text-[24px] text-[20px] border-b-[1px] dark:border-b-babyPowder border-b-midNightBlue"
          >
            <Link
              href={'#server-side-render'}
              className="transition-opacity duration-150 opacity-10 hover:opacity-100 font-bold"
            >
              #
            </Link>{' '}
            Server Side Render
          </h2>
          <p>
            In the <span className="font-bold">App Router</span>, Next.js will automatically choose
            the best rendering strategy for each route based on the features and APIs used.
            Generally, a page is server rendered if it has one of the following criteria satisfied:
          </p>
          <ul className="list-disc list-inside">
            <li>
              The <Code code="cache: 'no-store'" /> is added to fetch requests.
            </li>
            <li>
              The <Code code="revalidate: 0" /> option is added to individual fetch requests.
            </li>
            <li>
              The <Code code="fetch" /> request is inside a Router Handler that uses the POST
              method.
            </li>
            <li>
              The <Code code="fetch" /> request comes after the usage of headers or cookies.
            </li>
            <li>
              The <Code code="const dynamic = 'force-dynamic'" /> route segment option is used.
            </li>
            <li>
              The <Code code="fetchCache" /> route segment option is configured to skip cache by
              default.
            </li>
            <li>
              The <Code code="fetch" /> request uses <Code code="Authorization" /> or{' '}
              <Code code="Cookie" /> headers and there's an uncached request above it in the
              component tree.
            </li>
          </ul>
          <p>Below is a Next.js route that makes an API call with cache disabled.</p>
          <CodeSnippet fileName="app/user/page.jsx" code={ssrAppRouterCode} />
          <p>
            This route will be server side rendered as it uses <Code code="cache: 'no-store'" /> and
            the page will be generated in the server and served to the browser for each individual
            user request.
          </p>
          <p>
            In the <span className="font-bold">Page Router</span>to server side render a page, you
            have to use the <Code code="getServerSideProps" /> to pass the dynamic data to the page.
          </p>
          <CodeSnippet fileName="page/user/page.jsx" code={ssrPageRouterCode} />
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2
            id="incremental-static-regeneration"
            className="md:text-[24px] text-[20px] border-b-[1px] dark:border-b-babyPowder border-b-midNightBlue"
          >
            <Link
              href={'#incremental-static-regeneration'}
              className="transition-opacity duration-150 opacity-10 hover:opacity-100 font-bold"
            >
              #
            </Link>{' '}
            Incremental Static Regeneration
          </h2>
          <p>
            In the <span className="font-bold">App Router</span>, you define a revalidation time
            inside a <Code code="fetch" /> function with <Code code="next: { revalidate: 3600 }" />.
            This prop will automatically update the fetch data on 3600 seconds and Next.js will try
            to regenerate the page when a request comes in at most once every 10 seconds throughout
            the application life-cycle. Alternatively, you can use the{' '}
            <Code code="export const revalidate = 3600" /> route segment option to revalidate the
            entire page on 3600 second interval.
          </p>
          <p>Below is a Next.js route that revalidates an API call after 10 seconds.</p>
          <CodeSnippet fileName="app/feed/page.jsx" code={isrAppRouterCode} />
          <p>
            This route will be statically generated and the page data will be updated repeatedly
            after 10 seconds. Update will be visible on the next request.
          </p>
          <p>
            In the <span className="font-bold">Page Router</span>, you will use the{' '}
            <Code code="revalidate" /> option inside <Code code="getStaticProps" />.{' '}
          </p>
          <CodeSnippet fileName="page/feed.jsx" code={isrPageRouterCode} />
          <p>
            If your data is not frequently changed, you can revalidate your pages{' '}
            <span className="font-bold">on demand</span> by defining a server action and can
            revalidate the APIs or paths using <Code code="revalidateTag" /> or path revalidation.
          </p>
        </div>
      </Container>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Next.js Data Fetching and Page Render: SSG, SSR and ISR Beginner's Guide",
  description:
    'Learn efficient data fetching to build super fast next.js application with dynamic data. Clearly understand concept of SSG, SSR and ISR to improve the page performance of your web application and obtain higher lighthouse score and better SEO.',
}

const ssgAppRouterCode = `import React from 'react'

async function fetchData() {
  // fetch data from external API
  const data = await fetch('https://.../data').then((res) => res.json())

  return data
}

export default function Page () {
  const data = await fetchData()

  // Render data...
}
`

const ssgPageRouterCode = `import React from 'react'

export default function Blog({ posts }) {
  // Render posts...
}
 
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()
 
  // By returning { props: { posts } }, the Blog component
  // will receive 'posts' as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
`

const ssrPageRouterCode = `import React from 'react'

export default function Page({ data }) {
  // Render data...
}
 
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://.../data')
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}
`

const ssrAppRouterCode = `import React from 'react'

async function fetchData() {
  // fetch data from external API
  const data = await fetch('https://.../data', {
    cache: 'no-store',
  }).then((res) => res.json())

  return data
}

export default function Page () {
  const data = await fetchData()

  return (
    // Render data...
  )
}
`

const isrAppRouterCode = `import React from 'react'

async function fetchData() {
  // fetch data from external API
  const data = await fetch('https://.../data', {
    next: { revalidate: 10 },
  }).then((res) => res.json())

  return data
}

export default function Page () {
  const data = await fetchData()

  return (
    // Render data...
  )
}
`
const isrPageRouterCode = `import React from 'react'

export default function Blog({ posts }) {
  // Render posts...
}
 
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()
 
  // By returning { props: { posts } }, the Blog component
  // will receive 'posts' as a prop at build time
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
`
export default Page
