import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { List, ListItem, Button, colors } from '@material-ui/core'
import { Page } from '../AppTemplate'

const useStyles = makeStyles((theme: any) => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
}))

const SidebarNav = (props: Props) => {
  const { pages, className, onClose } = props

  const classes = useStyles()

  return (
    <List className={clsx(classes.root, className)}>
      {pages.map((page) => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Link href={page.href}>
            <Button className={classes.button} onClick={() => onClose()}>
              <div className={classes.icon}>{page.icon}</div>
              {page.title}
            </Button>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

interface Props {
  className: string
  pages: Page[]
  onClose: () => void
}

export default SidebarNav
