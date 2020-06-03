import { Paper as MuiPaper, PaperProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme: any) => ({
  paper: {
    maxWidth: 1000,
    padding: 30,
    margin: 'auto',
    marginTop: 20,
    borderRadius: 12,
  },
}))

const Paper = (props: PaperProps & { noWrapper?: boolean }) => {
  const { className, noWrapper = false, ...otherProps } = props
  const classes = useStyles()

  const paper = (
    <MuiPaper className={clsx(classes.paper, className)} {...otherProps} />
  )

  return noWrapper ? paper : <div style={{ margin: '15px' }}>{paper}</div>
}

export default Paper
