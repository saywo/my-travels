import React from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

type Props = {
  children: React.ReactNode
}

const BaseLayout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}
export default BaseLayout
