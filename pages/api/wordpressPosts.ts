import axios from 'axios'

const getAllPosts = () => {
  return axios
    .get('https://techcrunch.com/wp-json/wp/v2/posts')
    .then((posts) => {
      return posts.data
    })
    .catch((err: Error) =>
      console.error(`An error has occured fetching posts: ${err.message}`)
    )
}
