import React from 'react'
import Link from 'next/link'

const Header: React.VFC = () => {
  return (
    <>
      <header className="header">
        <div className="header_inner">
          <div className="headerLogo">
            <Link href="/">
              <a className="headerLogo_link">ロゴ</a>
            </Link>
          </div>
          <nav className="headerNav">
            <ul className="headerNav_list">
              <li className="headerNav_item">
                <Link href="/travels">
                  <a>Travels</a>
                </Link>
              </li>
              <li className="headerNav_item">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header
