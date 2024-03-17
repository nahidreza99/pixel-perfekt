'use client'
import React, { useState } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  code: string
  fileName: string
}

const CodeSnippet: React.FC<Props> = ({ code, fileName }) => {
  const [copied, setCopied] = useState<boolean>(false)
  const handleClick = (e: any) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
  }
  return (
    <div>
      <div className="py-[5px] px-[10px] bg-[#232d36] rounded-t-[0.3em] text-white text-[0.875rem] flex justify-between">
        <span>{fileName}</span>
        <div className="flex gap-[5px] items-center w-min">
          {!copied ? (
            <svg
              className="w-[20px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M12 11H9M15 15H9"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              className="w-[20px]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title></title>
                <g id="Complete">
                  <g id="tick">
                    <polyline
                      fill="none"
                      points="3.7 14.3 9.6 19 20.3 5"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polyline>
                  </g>
                </g>
              </g>
            </svg>
          )}
          <button onClick={handleClick}>{!copied ? 'Copy' : 'Copied'}</button>
        </div>
      </div>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        style={dracula}
        customStyle={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, marginTop: 0 }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet
