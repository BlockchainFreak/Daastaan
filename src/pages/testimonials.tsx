import { Container, Grid } from '@mantine/core'
import React from 'react'

const test_data = [
  {
    title: "Ms. Shaishta",
    institution: "Taleem Sub Kay Liye",
    src: "/videos/TaleemSubKayLiye.mp4"
  },
  {
    title: "Ms. Sakina",
    institution: "Special Children School",
    src: "/videos/DreamChildrenSchool.mp4"
  },
]

type CardProps = {
  title: string,
  institution: string,
  src: string
}

const Card = ({ title, institution, src }: CardProps) => {
  return (
    <div className='p-4 m-4 rounded-md bg-zinc-800 hover:scale-105 transition ease-in-out'>
      <h3 className='text-lg'>{title}</h3>
      <h4 className='text-sm'>{institution}</h4>
      <div>
        <video src={src} controls className='w-full rounded-lg'/>
      </div>
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <Container size="lg" className="p-6 bg-zinc-900 rounded-3xl">
      <h1>
        Testimonials
      </h1>
      <Grid>
        {
          test_data.map((data, index) => (
            <Grid.Col key={index} span={12} md={6}>
              <Card {...data} />
            </Grid.Col>
          ))
        }
      </Grid>
    </Container>
  )
}
