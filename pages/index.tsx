import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import Paper from '../layout/Paper'
import {
  Card,
  Avatar,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Subscribe from '../components/Subscribe/Subscribe'

interface Post {
  date: string
  title: string
  id: string
  image: string
  description: string | undefined
}

const useStyles = makeStyles((theme: any) => ({
  avatar: {
    margin: 10,
    marginBottom: 20,
    width: theme.spacing(9),
    height: theme.spacing(9),
    alignSelf: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    margin: 20,
    borderRadius: 12,
    cursor: 'pointer',
    '&:hover': {
      transform: 'translate(2px, -4px)',
    },
  },
  cardContent: {
    width: '100%',
    padding: '5px 20px 5px 20px',
    alignSelf: 'center',
  },
  cardList: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  date: {
    marginTop: 5,
    float: 'right',
  },
  description: {
    paddingTop: 5,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    fontHeight: 8,
    marginTop: 10,
  },
  title: {
    fontWeight: 400,
  },
}))

export default function Home({ allPostsData }: { allPostsData: Post[] }) {
  const classes = useStyles()

  const theme = useTheme()
  const mobile = !useMediaQuery((theme as any).breakpoints.up('md'), {
    defaultMatches: true,
  })

  return (
    <>
      <Head>
        <title>Full Frontend</title>
      </Head>
      <Subscribe />
      <Paper>
        <Typography variant="h5">Recent Posts</Typography>
        <br />
        <ul className={classes.cardList}>
          {allPostsData.map(({ id, date, title, image, description }) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <Card className={classes.card} elevation={3}>
                  <Avatar
                    src={image}
                    className={classes.avatar}
                    sizes="large"
                  />
                  <div className={classes.cardContent}>
                    <Typography
                      variant={mobile ? 'h5' : 'h4'}
                      className={classes.title}
                    >
                      {title}
                    </Typography>

                    {description && !mobile && (
                      <>
                        <Divider />
                        <Typography
                          variant="body2"
                          className={classes.description}
                        >
                          {description}
                        </Typography>
                      </>
                    )}
                    <Typography
                      align="right"
                      variant="caption"
                      color="textSecondary"
                      className={classes.date}
                    >
                      <Date dateString={date} />
                    </Typography>
                  </div>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </Paper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
