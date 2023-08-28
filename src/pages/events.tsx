import Image from "next/image"
import { Card, Container, Grid, Text, Title } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import { AssetFile, EntryFieldTypes, createClient } from 'contentful'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type EventsSkeleton = {
  contentTypeId: "event"
  fields: {
    title: EntryFieldTypes.Text,
    cover: EntryFieldTypes.AssetLink,
    description: EntryFieldTypes.RichText,
    date: EntryFieldTypes.Date,
  }
}

export default function EventsPage({ events }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <Container className="py-12" size="lg">
      <Grid>
        {
          events.map(event => (
            <Grid.Col key={event.slug} md={6} lg={4} className='flex justify-center'>
              <Event {...event} />
            </Grid.Col>
          ))
        }
      </Grid>
    </Container>
  )
}

type EventProps = {
  slug: string;
  title: string;
  date: string;
  cover?: AssetFile;
}

const Event = ({ slug, date, title, cover }: EventProps) => {

  const { width, height, ref } = useElementSize()
  const router = useRouter()

  const [_, month, ddate, year] = new Date(date).toDateString().split(' ')
  const fdate = `${ddate} ${month}, ${year}`

  return (
    <Card ref={ref} style={{ maxWidth: '320px' }}
      onClick={() => router.push(`/blogs/${slug}`)}
      className="flex flex-col gap-2 p-4 transition-all duration-150 ease-in card hover:scale-105 hover:shadow-xl rounded-lg cursor-pointer bg-violet-950"
    >
      {
        cover?.contentType?.includes('video') ? (
          <div>
            <video src={cover.url} controls className='w-full rounded-lg' />
          </div>
        ) : (
          <Image alt={""} src={"https:" + (cover?.url ?? "")} width={width} height={200} />
        )
      }
      <Text color='violet.2' fw={700}>{fdate}</Text>
      <Title order={4}>{title}</Title>
    </Card>
  )
}


export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? ""
  });

  const entries = await client.withoutUnresolvableLinks.getEntries<EventsSkeleton>({ 'content_type': 'event' });
  const events = entries.items.map(item => ({
    slug: item.sys.id,
    cover: item.fields.cover?.fields.file,
    title: item.fields.title,
    date: item.fields.date as string,
  }))
  .sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return {
    props: {
      events
    },
    revalidate: 1
  }
}