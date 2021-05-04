export const getAllPosts = async () => {
  const url = process.env.CMS_API_URL
  const fetchOption = {
    headers: {
      'X-API-KEY': process.env.CMS_X_API_KEY,
    },
  }
  const res = await fetch(url, fetchOption)
  const posts = await res.json()
  const postsContents = posts.contents

  return {
    postsContents,
  }
}
