import React from 'react'
import Link from 'next/link'
import { getAllPosts } from './api/getAllPosts'

type Props = {
  posts: any
}

const Travels: React.VFC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <article key={post.id}>
          <Link href={`/travels/${post.id}`}>
            <a>
              <h2>{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </a>
          </Link>
        </article>
      ))}
    </>
  )
}
export default Travels

export const getStaticProps = async () => {
  const { postsContents: posts } = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}
