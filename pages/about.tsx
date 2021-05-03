import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Inner } from '../src/styles/styles'

// type Props = {
//   children: React.ReactNode
// }

const About: React.VFC = () => {
  return (
    <>
      <_About>
        <_AboutInner>
          <_AboutContent>
            <section className="block">
              <h2 className="heading">本サイトついて</h2>
              <div className="spacer"></div>
              <p className="lead text">
                本サイトの目的は以下の2点です。
                <br />
                ・Next.js, microCMSを試す場所にすること
                <br />
                ・旅の写真を掲載すること（自己満足）
              </p>
              <div className="spacer"></div>
              <h2 className="heading">スエヒロについて</h2>
              <p className="lead text">Webフロントエンドエンジニア、バックパッカー</p>
              <div className="spacer"></div>
              <section className="subBlock">
                <h3 className="subHeading">Webフロントエンドエンジニア</h3>
                <p className="text">
                  新卒入社から約2年間、Web制作会社でコーダー・フロントエンドエンジニアとしてWebサイト構築をしていました。
                  <br />
                  2021年3月に退職し、現在はWeb開発の勉強や転職活動をしています。
                </p>
                <dl className="dl">
                  <dt className="dt">【言語】</dt>
                  <dt className="dd">
                    JavaScript(ES2015~),TypeScript, React, Next.js, Vue.js, jQuery, WordPress, HTML, CSS, pug, SCSS
                  </dt>
                  <dd className="dl">【その他】</dd>
                  <dt className="dd">
                    npm(yarn), webpack, Babel, ESLint, Prettier, GitHub, GitHub Actions, Firebase(Authentication, Cloud
                    Firestore, Hosting), CSS設計(BEM,FLOCSS), Adobe XD, Photoshop
                  </dt>
                </dl>
              </section>
              <div className="spacer"></div>
              <section className="subBlock">
                <h3 className="subHeading">バックパッカー</h3>
                <p className="text">
                  2017年2月、大学2年の春休みにエジプト一人旅（初海外）をして以来旅にハマる。
                  <br />
                  今まで行った国・地域は、アジア・中東を中心に20カ国(2021年5月現在)。
                  <br />
                  好きな海外の食べ物は、ソムタム（タイ）・アジャルリハチャプリ（ジョージア）。
                </p>
              </section>
            </section>
          </_AboutContent>
        </_AboutInner>
      </_About>
    </>
  )
}
export default About

const _About = styled.div``

const _AboutInner = styled(Inner)``

const _AboutContent = styled.div`
  padding: 20px 0;
  .spacer {
    height: 20px;
    width: 100%;
    display: block;
  }
  .block {
    & + .block {
      margin-top: 20px;
    }
  }
  .heading {
    font-size: 24px;
    font-weight: bold;
    & + .text {
      margin-top: 10px;
    }
  }
  .lead {
  }
  .subBlock {
  }
  .subHeading {
    font-size: 20px;
    font-weight: bold;
    &::before {
      content: '-';
      margin-right: 0.5em;
    }
    & + * {
      margin-top: 10px;
    }
  }
  .text {
    line-height: 1.75;
  }
  .dl {
    line-height: 1.75;
    margin-top: 10px;
    .dt {
    }
    .dd {
    }
  }
`
