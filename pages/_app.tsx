import React from 'react'
import { AppProps } from 'next/app'
import '../src/styles/globals.css'
import BaseLayout from '../src/components/templates/BaseLayout'

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default App
