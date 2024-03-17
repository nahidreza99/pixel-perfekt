import React from 'react'
interface Props {
  code: string
}
const Code: React.FC<Props> = ({ code }) => {
  return (
    <code className="code inline-block dark:border-babyPowder border-midNightBlue rounded-[5px] border-[1px] px-[5px] pb-[2px] text-[14px]">
      {code}
    </code>
  )
}

export default Code
