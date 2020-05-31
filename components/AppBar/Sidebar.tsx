import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Divider, Drawer, Typography } from '@material-ui/core'
import SidebarNav from './SidebarNav'
import { Page } from '../AppTemplate'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme: any) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
  btn: {
    width: '100%',
  },
  name: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  closeBtn: {
    float: 'right',
  },
}))

const Sidebar = (props: Props) => {
  const { open, variant, onClose, className, pages, ...rest } = props

  const classes = useStyles()

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div>
        <IconButton
          onClick={onClose}
          className={classes.closeBtn}
          aria-label="close"
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div {...rest} className={clsx(classes.root, className)}>
        <Typography className={classes.name} variant="h5">
          Full Frontend
        </Typography>
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} onClose={onClose} />
      </div>
    </Drawer>
  )
}

interface Props {
  className?: string
  onClose: () => void
  open: boolean
  variant: 'persistent' | 'temporary' | 'permanent'
  pages: Page[]
}

export default Sidebar
