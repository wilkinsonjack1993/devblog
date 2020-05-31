import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as emailjs from 'emailjs-com'
import { TextField, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Alert from '@material-ui/lab/Alert'
import Paper from '../../layout/Paper'

const useStyles = makeStyles((theme: any) => ({
  form: {
    padding: 15,
    paddingBottom: 60,
    margin: 'auto',
  },
  submitButton: {
    marginTop: 15,
    float: 'right',
  },
  error: {
    color: 'red',
  },
  paper: {
    paddingBottom: 80,
  },
}))

const Contact = () => {
  const classes = useStyles()
  const { handleSubmit, register, errors, reset } = useForm()
  const [messageSubmitted, setMessageSubmitted] = useState(false)

  const onSubmit = (data: any) => {
    const { name, email, subject, message } = data

    let templateParams = {
      from_name: email,
      to_name: 'Jack',
      subject: subject,
      message_html: `Name: ${name}, Subject: ${subject}, Message: ${message}`,
    }
    emailjs.send(
      'default_service',
      'template_gdPpt5Mw',
      templateParams,
      'user_UjB4MfGsvqS1IKbHeXVoz'
    )

    setMessageSubmitted(true)
    // Reset form
    reset()
  }

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h4">Contact Us</Typography>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="name"
          inputRef={register({
            required: 'Required',
          })}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          label="Name"
          required
        />
        {errors.name && errors.name.message}
        <Typography className={classes.error}>
          {errors.name && errors.name.message}
        </Typography>
        <TextField
          name="email"
          inputRef={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address',
            },
          })}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          label="Email"
          required
        />
        <Typography variant="caption" className={classes.error}>
          {errors.email && errors.email.message}
        </Typography>

        <TextField
          name="subject"
          label="Subject"
          inputRef={register({})}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          name="message"
          label="Message"
          rows={10}
          multiline
          rowsMax={30}
          fullWidth
          margin="normal"
          inputRef={register({
            required: 'Required',
          })}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
        />

        {messageSubmitted && (
          <Alert severity="success">
            Your message was successfully sent. Thank you!
          </Alert>
        )}

        <Button
          type="submit"
          onClick={() => handleSubmit(onSubmit)}
          color="primary"
          variant="contained"
          className={classes.submitButton}
        >
          Submit
        </Button>
      </form>
    </Paper>
  )
}

export default Contact
