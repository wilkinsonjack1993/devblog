import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Paper from '../../layout/Paper'

export default function Post({ postData }: any) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Paper>
        <article>
          <h1>{postData.title}</h1>
          <div>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Paper>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
