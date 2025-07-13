import React from 'react'
import { Container, Typography, TextField, Button, Box } from '@mui/material'

export default function Contact() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}>
        <TextField label="Name" required fullWidth />
        <TextField label="Email" type="email" required fullWidth />
        <TextField label="Message" multiline rows={4} required fullWidth />
        <Button type="submit" variant="contained">Send</Button>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Book an Appointment</Typography>
        <iframe
          src="https://calendly.com/your-calendly-username"
          width="100%"
          height="600"
          frameBorder="0"
          title="Calendly Booking"
        ></iframe>
      </Box>
    </Container>
  )
}