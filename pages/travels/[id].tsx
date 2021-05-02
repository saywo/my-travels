import React from 'react'
import { getAllPosts } from '../api/getAllPosts'
import { getPost } from '../api/getPost'

type Props = {
  post: any
}

const TravelsPost: React.VFC<Props> = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </>
  )
}
export default TravelsPost

export const getStaticPaths = async () => {
  const { postsContents } = await getAllPosts()

  const paths = postsContents.map((post) => ({
    params: {
      id: post.id,
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { post } = await getPost(params.id)

  return {
    props: {
      post,
    },
  }
}
