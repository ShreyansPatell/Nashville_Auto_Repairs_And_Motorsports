// File: src/pages/Services.jsx
import React from 'react'
import { Container, Grid, Card, CardContent, Typography } from '@mui/material'

const services = [
  { title: 'Oil Change', desc: 'Quick oil & filter change' },
  { title: 'Brake Repair', desc: 'Pads, rotors, fluid checks' },
  { title: 'AC Repair', desc: 'Coolant recharge & diagnostics' },
  { title: 'Engine Diagnostics', desc: 'Check engine light scan' },
]

export default function Services() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Our Services</Typography>
      <Grid container spacing={2}>
        {services.map((s, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h6">{s.title}</Typography>
                <Typography variant="body2">{s.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}