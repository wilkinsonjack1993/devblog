import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Tabs,
  Tab,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Page } from '../AppTemplate'
import { useRouter } from 'next/dist/client/router'

const useStyles = makeStyles((theme: any) => ({
  root: {
    boxShadow: 'none',
    background: '#1a1a1a',
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
  logo: {
    height: 'auto',
    width: 100,
    borderRadius: 8,
    padding: 3,
  },
  textColorInherit: {
    opacity: 1,
  },
  indicator: {
    backgroundColor: theme.palette.primary.contrastText,
  },
}))

const Topbar = (props: Props) => {
  const { className, onSidebarOpen, pages } = props

  const classes = useStyles()
  const router = useRouter()

  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar>
        <Link href="/">
          <img
            className={classes.logo}
            alt="Logo"
            src="/images/logo-initials.png"
          />
        </Link>
        <div style={{ flexGrow: 1 }} />
        <Hidden smDown>
          <Tabs
            classes={{ indicator: classes.indicator }}
            value={
              pages.findIndex((page) =>
                page.href === '/'
                  ? router.pathname === page.href
                  : router.pathname.includes(page.href)
              ) || 0
            }
          >
            {pages.map((page) => {
              return (
                <Link href={page.href} key={page.title}>
                  <Tab
                    label={page.title}
                    classes={{ textColorInherit: classes.textColorInherit }}
                  />
                </Link>
              )
            })}
          </Tabs>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

interface Props {
  className?: string
  onSidebarOpen: () => void
  pages: Page[]
}

export default Topbar
