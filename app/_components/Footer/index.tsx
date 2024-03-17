import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative h-[80px] w-full max-w-[1440px] mx-auto px-[20px] flex items-center justify-between">
      <div className="mx-auto">
        © 2024{' '}
        <Link className="font-bold" href={'https://github.com/nahidreza99'}>
          Nahid Reza
        </Link>
        . All rights reserved.
      </div>
      <div className="absolute top-0 bottom-auto left-0 right-0 h-[1px] flex flex-col items-stretch bg-headerDividerLineDark"></div>
    </footer>
  )
}
