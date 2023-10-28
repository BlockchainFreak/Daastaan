import Image from 'next/image';
import { createClient, EntryFields, EntryFieldTypes, Asset } from 'contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { documentToHtmlString, Options } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS, Document } from '@contentful/rich-text-types';
import { Container, Title, Text } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { IconPaperclip } from '@tabler/icons-react';

type EventPostSkeleton = {
    contentTypeId: "event"
    fields: {
        title: EntryFieldTypes.Text,
        cover: EntryFieldTypes.AssetLink,
        description: EntryFieldTypes.RichText,
        date: EntryFieldTypes.Date,
        order: EntryFieldTypes.Number
    }
}

export default function EventPage({ fields, publishedDate }: InferGetStaticPropsType<typeof getStaticProps>) {

    const { width, ref } = useElementSize()

    const options: Options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                return node.data.target.fields.file.contentType.includes('video') ?
                    `<div>
                    <video src=${node.data.target.fields.file.url} controls className='w-full rounded-lg' />
                  </div>`
                    : `<img src="${node.data.target.fields.file.url}" width="${width}px"/>`
            },
        }
    }

    console.log(fields?.description)

    const htmlStr = documentToHtmlString(fields?.description as Document, options)

    const featImg = fields.cover?.fields
    const imgheight = featImg?.file?.details?.image?.height ?? 0
    const imgwidth = featImg?.file?.details?.image?.width ?? 0

    return (
        <Container ref={ref} className="my-12 flex flex-col gap-8">
            <Title order={1}>{fields?.title}</Title>
            {
                fields.cover?.fields.file?.contentType?.includes('video') ? (
                    <div>
                        <video src={fields.cover.fields.file?.url} controls className='w-full rounded-lg' />
                    </div>
                ) : (
                    <Image
                        alt={featImg?.title ?? ""}
                        src={"https:" + featImg?.file?.url ?? ""}
                        width={width}
                        height={width * imgheight / imgwidth}
                    />
                )
            }

            <Text italic>Published on {new Date(publishedDate).toLocaleString()}</Text>
            <div dangerouslySetInnerHTML={{ "__html": htmlStr }} className="text-justify" />
        </Container>
    )
}

export async function getStaticPaths() {
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "",
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? ""
    });

    const entries = await client.getEntries<EventPostSkeleton>({ 'content_type': 'event' });
    const paths = entries.items.map((item) => `/events/${item.sys.id}`);

    return { paths, fallback: false };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context;
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "",
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? ""
    });

    const entry = await client.withoutUnresolvableLinks.getEntry<EventPostSkeleton>(params?.slug as string)

    return {
        props: {
            publishedDate: entry.sys.createdAt,
            fields: entry.fields
        },
        revalidate: 1
    }
}

