export const getPost = async (id: string | string[]) => {
  const url = `${process.env.CMS_API_URL}/${id}`
  const fetchOption = {
    headers: {
      'X-API-KEY': process.env.CMS_X_API_KEY,
    },
  }
  const res = await fetch(url, fetchOption)
  const post = await res.json()

  return {
    post,
  }
}
