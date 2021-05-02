export const getAllPosts = async () => {
  const url = 'https://my-travels.microcms.io/api/v1/posts'
  const fetchOption = {
    headers: {
      'X-API-KEY': '07cb783a-58b2-446b-96de-a974a820b869',
    },
  }
  const res = await fetch(url, fetchOption)
  const posts = await res.json()
  const postsContents = posts.contents

  return {
    postsContents,
  }
}
