import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
}

const GlobalHead: React.VFC<Props> = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="format-detection" content="telephone=no" />
      <title>{title + ' | スエヒロ'}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title + ' | スエヒロ'} />
      <meta property="og:locale" content="ja_JP" />
    </Head>
  )
}
export default GlobalHead
