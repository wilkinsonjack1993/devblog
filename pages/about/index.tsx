import React from 'react'
import Subscribe from '../../components/Subscribe/Subscribe'
import Paper from '../../layout/Paper'
import {
  Typography,
  makeStyles,
  GridList,
  Grid,
  Avatar,
} from '@material-ui/core'
import Link from 'next/link'

const Technologies = [
  'React',
  'Next JS',
  'Server Side Rendering (SSR)',
  'CSS in JS',
  'Webpack',
  'Testing',
  'Cypress',
  'Node',
  'Deno',
  'Typescript',
  'NX',
  'Monoreopos',
  'Build Tooling',
  'Deno',
  'Prettier',
  'Coding Best Practices',
]

const useStyles = makeStyles((theme: any) => ({
  listItem: {
    height: 20,
    flexDirection: 'row',
    display: 'flex',
  },
  avatar: {
    margin: 10,
    marginBottom: 20,
    marginRight: 30,
    width: theme.spacing(9),
    height: theme.spacing(9),
    alignSelf: 'center',
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <>
      <Paper>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Avatar
            src={'/images/jack-profile.jpeg'}
            className={classes.avatar}
            sizes="large"
          />
          <Typography gutterBottom variant="h5">
            Welcome to Full Frontend Dev
          </Typography>
        </div>
        <section>
          <Typography gutterBottom variant="body1">
            I set up this website as a way to record and share some of the Web
            Development ideas, articles, technologies and trends that I find
            interesting.
          </Typography>
        </section>
        <Typography gutterBottom variant="body1">
          I have been a Software Engineer for a number of years but have found a
          real passion in the Web Development sector. Here's a random list of
          some (but not all) of the things that are intriguing me at the moment:
        </Typography>
        <GridList
          cellHeight="auto"
          style={{
            listStyle: 'disc',
            listStylePosition: 'inside',
            margin: '20px',
          }}
          spacing={8}
        >
          {Technologies.map((tech) => (
            <Grid
              xl={4}
              lg={4}
              md={4}
              sm={6}
              xs={12}
              className={classes.listItem}
            >
              <li>{tech}</li>
            </Grid>
          ))}
        </GridList>
        <Typography gutterBottom variant="body1">
          Please feel free to get in contact if you would like to discuss any of
          the articles on this site. There is a contact form{' '}
          <Link href="/contact">here</Link> or find me on{' '}
          <Link href="https://www.linkedin.com/in/jack-wilkinson-ab484ba8/">
            Linked In.
          </Link>
        </Typography>
      </Paper>

      <Subscribe />
    </>
  )
}

export default About
