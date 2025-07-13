// File: src/pages/HomePage.jsx
import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'

export default function HomePage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>Welcome to Reliable Auto Care</Typography>
      <Typography variant="h6" gutterBottom>Your trusted auto repair shop in Mechanictown</Typography>
      <Button variant="contained" color="primary" href="/contact">Book an Appointment</Button>
    </Container>
  )
}