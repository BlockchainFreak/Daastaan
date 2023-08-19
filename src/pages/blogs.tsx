import { Card, Container, Flex, Grid, Text, Title } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import { IconPaperclip } from '@tabler/icons-react'
import { createClient, EntryFieldTypes } from 'contentful'
import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React from 'react'

type BlogPostSkeleton = {
    contentTypeId: "ngoBlog"
    fields: {
        title: EntryFieldTypes.Text,
        featuredImage: EntryFieldTypes.AssetLink,
        content: EntryFieldTypes.RichText,
        tags: EntryFieldTypes.Text[]
    }
}

export default function BlogsPage({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Container className="my-12">
            <Grid>
                {blogs.map(blog => (
                    <Grid.Col key={blog.slug} md={6} lg={4} className='flex justify-center'>
                        <Blogs {...blog} />
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    )
}

type BlogProps = {
    slug: string;
    url: string;
    date: string;
    title: string;
    tags: string[];
}

const Blogs = ({ slug, url, date, title, tags }: BlogProps) => {

    const { width, height, ref } = useElementSize()
    const router = useRouter()

    const [_, month, ddate, year] = new Date(date).toDateString().split(' ')
    const fdate = `${ddate} ${month}, ${year}`

    return (
        <Card ref={ref} style={{ maxWidth: '320px' }}
            onClick={() => router.push(`/blogs/${slug}`)}
            className="flex flex-col gap-2 p-4 transition-all duration-150 ease-in card hover:scale-105 hover:shadow-xl rounded-lg cursor-pointer"
        >
            <Image alt={""} src={url} width={width} height={200} />
            <Text color='gray.6' fw={700}>{fdate}</Text>
            <Title order={4}>{title}</Title>
            <div className="flex items-center flex-wrap">
                {tags.map((tag, index) => (
                    <div key={index} className='flex flex-row gap-2 items-center px-2 m-0.5 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-sm font-extralight'>
                        <Text size={12}>{tag}</Text>
                    </div>
                ))}
            </div>
        </Card>
    )
}


export async function getStaticProps() {
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "",
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? ""
    });

    const entries = await client.withoutUnresolvableLinks.getEntries<BlogPostSkeleton>({ 'content_type': 'ngoBlog' });
    const blogs = entries.items.map(item => ({
        slug: item.sys.id,
        url: "https:" + item.fields.featuredImage?.fields.file?.url ?? "",
        date: item.sys.createdAt,
        title: item.fields.title,
        tags: item.fields.tags
    }))

    return {
        props: {
            blogs
        },
        revalidate: 1
    }
}