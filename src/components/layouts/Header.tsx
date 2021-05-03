import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Inner } from '../../styles/styles'

const urlList = [
  { url: '/', name: 'Home' },
  { url: '/about', name: 'About' },
]

const Header: React.VFC = () => {
  return (
    <>
      <_Header className="header">
        <_HeaderInner className="header_inner">
          {/* <div className="headerLogo">
            <Link href="/">
              <a className="headerLogo_link">Home</a>
            </Link>
          </div> */}
          <_HeaderNav className="headerNav">
            <_HeaderNavList className="headerNav_list">
              {urlList.map((item) => (
                <_HeaderNavItem key={item.url} className="headerNav_item">
                  <Link href={item.url}>
                    <a>{item.name}</a>
                  </Link>
                </_HeaderNavItem>
              ))}
            </_HeaderNavList>
          </_HeaderNav>
        </_HeaderInner>
      </_Header>
    </>
  )
}
export default Header

const _Header = styled.header`
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  position: sticky;
`

const _HeaderInner = styled(Inner)`
  display: flex;
  justify-content: space-between;
`

const _HeaderNav = styled.nav`
  flex: 1;
`

const _HeaderNavList = styled.ul`
  display: flex;
  /* justify-content: flex-end; */
`

const _HeaderNavItem = styled.li`
  & + li {
    margin-left: 20px;
  }
`
