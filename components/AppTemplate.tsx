import React, { useState, ReactNode, useEffect } from 'react'
import { makeStyles, useTheme, DefaultTheme } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import Sidebar from './AppBar/Sidebar'
import AppBar from './AppBar/AppBar'
import DashboardIcon from '@material-ui/icons/Dashboard'
import InfoIcon from '@material-ui/icons/Info'
import ContactMail from '@material-ui/icons/ContactMail'

const useStyles = makeStyles((theme: DefaultTheme & { breakpoints: any }) => ({
  root: {
    paddingTop: 56,
    height: '100vh',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    paddingTop: 20,
  },
}))

export enum DeviceType {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
}

const pages = [
  {
    title: 'Home',
    href: '/',
    icon: <DashboardIcon />,
  },
  {
    title: 'About',
    href: '/about',
    icon: <InfoIcon />,
  },
  {
    title: 'Contact Us',
    href: '/contact',
    icon: <ContactMail />,
  },
]

const AppTemplate = (props: Props) => {
  const { children } = props

  const classes = useStyles()
  const theme = useTheme()
  const deviceType = useMediaQuery((theme as any).breakpoints.up('md'), {
    defaultMatches: true,
  })
    ? DeviceType.DESKTOP
    : DeviceType.MOBILE

  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  return (
    <div className={classes.root}>
      <AppBar pages={pages} onSidebarOpen={handleSidebarOpen} />
      {deviceType === DeviceType.MOBILE && (
        <Sidebar
          onClose={handleSidebarClose}
          open={openSidebar}
          variant={'temporary'}
          pages={pages}
        />
      )}
      <main className={classes.content}>{children}</main>
    </div>
  )
}

interface Props {
  children: ReactNode | ReactNode[]
}

export interface Page {
  title: string
  href: string
  icon: ReactNode
}

export default AppTemplate
