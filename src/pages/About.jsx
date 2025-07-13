// File: src/pages/About.jsx
import React from 'react'
import { Container, Typography, Box } from '@mui/material'

export default function About() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography variant="body1">We are a family-run business with over 10 years of experience. Our technicians are ASE-certified and dedicated to providing honest, affordable service.</Typography>
    </Container>
  )
}