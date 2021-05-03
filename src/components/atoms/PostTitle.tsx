import React from 'react'

type Props = {
  headingType: 'h1' | 'h2' | 'h3'
  children: React.ReactNode
}

const style: React.CSSProperties = {
  fontSize: '32px',
  fontWeight: 'bold',
}

export const PostTitle: React.VFC<Props> = ({ headingType, children }) => {
  if (headingType == 'h1') {
    return <h1 style={style}>{children}</h1>
  } else if (headingType === 'h2') {
    return <h2 style={style}>{children}</h2>
  } else if (headingType === 'h3') {
    return <h3 style={style}>{children}</h3>
  }
}
