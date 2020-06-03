import React, { useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { TextField, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Paper from '../../layout/Paper'

const useStyles = makeStyles((theme: any) => ({
  email: {
    margin: 10,
  },
  subButton: {
    margin: 10,
  },
  paper: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  emailInput: {
    paddingTop: 6,
  },
}))

const Subscribe = () => {
  const url =
    'https://gmail.us18.list-manage.com/subscribe/post?u=8c7a3a32261c858d18506c986&amp;id=bdd62c52b8'

  const [email, setEmail] = useState(undefined as string | undefined)
  const isValid = () => !!email && email.length > 0 && email.indexOf('@') > -1
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }: any) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              verticalAlign: 'middle',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="body1"
              style={{ alignSelf: 'center', marginRight: 15, fontWeight: 500 }}
            >
              Subscribe to our newsletter!
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              className={classes.email}
              inputProps={{
                className: classes.emailInput,
              }}
            />
            <Button
              disabled={!isValid()}
              onClick={() => subscribe({ EMAIL: email })}
              color="primary"
              variant="contained"
              className={classes.subButton}
              size="small"
            >
              Subscribe!
            </Button>
            {status === 'sending' && (
              <div style={{ color: 'blue' }}>sending...</div>
            )}
            {status === 'error' && (
              <div
                style={{ color: 'red' }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === 'success' && (
              <div style={{ color: 'green' }}>TEST TEXT !</div>
            )}
          </div>
        )}
      />
    </Paper>
  )
}

export default Subscribe
