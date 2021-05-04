import React from 'react'
import { GetStaticProps } from 'next'
import GlobalHead from '../src/components/layouts/GlobalHead'
import Link from 'next/link'
import Image from 'next/image'
// import Image from 'next/image'
import { getAllPosts } from './api/getAllPosts'
import styled from 'styled-components'
import { mediaQuery } from '../src/styles/const'
import { Inner } from '../src/styles/styles'

type Props = {
  posts: any
}

const headText = {
  title: 'Home',
  description: 'Homeです',
}

const Home: React.VFC<Props> = ({ posts }) => {
  const getPostThumbnail = (post) => {
    const postThumbnail = post.thumbnail ? post.thumbnail.url : '/vercel.svg'
    return postThumbnail
  }

  return (
    <>
      <GlobalHead title={headText.title} description={headText.description} />
      <_Travels>
        <_TravelsInner>
          <_TravelsPosts>
            {posts.map((post) => (
              <_TravelsPost key={post.id}>
                <Link href={`/travels/${post.id}`}>
                  <_TravelsPostInner>
                    <_TravelsPostTitle>{post.title}</_TravelsPostTitle>
                    <p>{post.season}</p>
                    <_TravelsThumbnail>
                      <Image src={getPostThumbnail(post)} width={450} height={300} objectFit="cover" />
                    </_TravelsThumbnail>
                  </_TravelsPostInner>
                </Link>
              </_TravelsPost>
            ))}
          </_TravelsPosts>
        </_TravelsInner>
      </_Travels>
    </>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { postsContents: posts } = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

const _Travels = styled.div``

const _TravelsInner = styled(Inner)``

const _TravelsPosts = styled.section`
  padding: 20px 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  ${mediaQuery.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery.md} {
    grid-template-columns: 1fr;
  }
`

const _TravelsPost = styled.article``

const _TravelsPostInner = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const _TravelsPostTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`

const _TravelsThumbnail = styled.div`
  order: -1;
`
