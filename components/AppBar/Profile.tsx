import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Avatar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: theme.spacing(1),
  },
}))

const Profile = (props: Props) => {
  const { className, ...rest } = props

  const classes = useStyles()

  const user = {
    name: 'Jack Wilkinson',
    avatar: '/images/burpees/juliet.jpg',
    bio: 'Frontend Developer',
  }

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Jack"
        className={classes.avatar}
        component={Link}
        src={user.avatar}
        href="/"
      />
      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  )
}

interface Props {
  className?: string
}

export default Profile
