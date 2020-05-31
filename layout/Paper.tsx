import { Paper as MuiPaper, PaperProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme: any) => ({
  paper: {
    maxWidth: 800,
    padding: 30,
    margin: 'auto',
    marginTop: 20,
    borderRadius: 12,
  },
}))

const Paper = (props: PaperProps) => {
  const { className, ...otherProps } = props
  const classes = useStyles()

  return <MuiPaper className={clsx(classes.paper, className)} {...otherProps} />
}

export default Paper
