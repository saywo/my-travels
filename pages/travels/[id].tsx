import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import GlobalHead from '../../src/components/layouts/GlobalHead'
import Image from 'next/image'
import styled from 'styled-components'
import { mediaQuery } from '../../src/styles/const'
import { Inner } from '../../src/styles/styles'
import { getAllPosts } from '../api/getAllPosts'
import { getPost } from '../api/getPost'

type Props = {
  post: any
}

const TravelsPost: React.VFC<Props> = ({ post }) => {
  const headText = {
    title: post.title,
    description: post.title,
  }

  return (
    <>
      <GlobalHead title={headText.title} description={headText.description} />

      <_Post>
        <_PostInner>
          <_PostTitle>{post.title}</_PostTitle>
          {/* {post.thumbnail && <Image src={post.thumbnail.url} width={1200} height={500} objectFit="cover" alt="" />} */}
          <_PostArea>
            {post.block.map((item, index) => (
              <_PostBlock key={index}>
                <_PostBlockInner>
                  <_PostBlockImage>
                    <Image src={item.image.url} width={1000} height={600} alt="" objectFit="cover" />
                  </_PostBlockImage>
                  <_PostBlockContent>
                    <h2 className="heading">{item.heading}</h2>
                    <p className="location">
                      {item.location}（{item.season}）
                    </p>
                    <p className="text">{item.text}</p>
                  </_PostBlockContent>
                </_PostBlockInner>
              </_PostBlock>
            ))}
          </_PostArea>
        </_PostInner>
      </_Post>
    </>
  )
}
export default TravelsPost

export const getStaticPaths: GetStaticPaths = async () => {
  const { postsContents } = await getAllPosts()

  const paths = postsContents.map((post) => ({
    params: {
      id: post.id,
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await getPost(params.id)

  return {
    props: {
      post,
    },
  }
}

const _Post = styled.article``

const _PostInner = styled(Inner)``

const _PostTitle = styled.h1`
  font-weight: bold;
  font-size: 32px;
  padding: 20px 0;
`

const _PostArea = styled.div`
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

const _PostBlock = styled.div``

const _PostBlockInner = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
`

const _PostBlockImage = styled.div``
const _PostBlockContent = styled.div`
  .heading {
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
  }
  .location {
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.25;
  }
  .text {
    margin-top: 24px;
  }
`
