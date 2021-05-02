export const getPost = async (id) => {
  const url = `https://my-travels.microcms.io/api/v1/posts/${id}`
  const fetchOption = {
    headers: {
      'X-API-KEY': '07cb783a-58b2-446b-96de-a974a820b869',
    },
  }
  const res = await fetch(url, fetchOption)
  const post = await res.json()
  console.log(post)

  return {
    post,
  }
}
