import React from 'react'

interface Props {
  children: React.ReactNode
  id?: string | null
  className?: string | null
}

const Container: React.FC<Props> = ({ children, id, className }) => {
  return (
    <div
      id={id}
      className={(className ? className + ' ' : '') + 'w-full max-w-[1440px] mx-auto px-[20px]'}
    >
      {children}
    </div>
  )
}

export default Container
