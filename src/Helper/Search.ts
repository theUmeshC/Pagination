import { createClient } from 'pexels'

const client = createClient('563492ad6f91700001000001eb8993fefd4e4a8a963f33e15398bc9e')

const searchData: (query: string) => Promise<any> = async (query) => {
  const data = await client.photos.search({ query, per_page: 12 }).then(photos => { return (photos) }).catch(err => { console.log(err) })
  const value = await data;
  return value
}

export default searchData
