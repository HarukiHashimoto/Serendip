import axios, { AxiosRequestConfig } from 'axios'

export const fetchFeeds = async (businessID: string, accessToken: string, limit: number) => {
  const url = `https://graph.facebook.com/v12.0/${businessID}?fields=name,media.limit(${limit}){caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=${accessToken}`


  const requestConfig: AxiosRequestConfig = {
    url,
    method: 'GET'
  }

  return await axios(requestConfig)
    .then(({ data }) => {
      // console.log('data', data.media.data)
      return data.media.data
    })
    .catch((e) => {
      console.log('error:', e)
    })
    .finally(() => {
      console.log('end')
    })
}
