// File: src/pages/Testimonials.jsx
import React from 'react'
import { Container, Typography, Paper, Grid } from '@mui/material'

const testimonials = [
  { name: 'Jane D.', quote: 'Fast, friendly, and fair-priced. Highly recommend!' },
  { name: 'Mike B.', quote: 'They fixed my brakes same-day. Super professional.' },
]

export default function Testimonials() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Customer Testimonials</Typography>
      <Grid container spacing={2}>
        {testimonials.map((t, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Paper elevation={2} sx={{ padding: 2 }}>
              <Typography variant="body1">"{t.quote}"</Typography>
              <Typography variant="caption">– {t.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}