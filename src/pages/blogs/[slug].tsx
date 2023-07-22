import Image from 'next/image';
import { createClient, EntryFields, EntryFieldTypes, Asset } from 'contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { documentToHtmlString, Options } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS, Document } from '@contentful/rich-text-types';
import { Container, Title, Text } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { IconPaperclip } from '@tabler/icons-react';

type BlogPostSkeleton = {
    contentTypeId: "ngoBlog"
    fields: {
        title: EntryFieldTypes.Text,
        featuredImage: EntryFieldTypes.AssetLink,
        content: EntryFieldTypes.RichText,
        tags: EntryFieldTypes.Text[]
    }
}

export default function BlogPage({ fields, publishedDate }: InferGetStaticPropsType<typeof getStaticProps>) {

    const { width, ref } = useElementSize()

    const options: Options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                return `<img src="${node.data.target.fields.file.url}" width="${width}px"/>`
            },
        }
    }

    console.log(fields?.content)

    const htmlStr = documentToHtmlString(fields?.content as Document, options)

    const featImg = fields.featuredImage?.fields
    const imgheight = featImg?.file?.details?.image?.height ?? 0
    const imgwidth = featImg?.file?.details?.image?.width ?? 0

    return (
        <Container ref={ref} className="my-12 flex flex-col gap-8">
            <Title order={1}>{fields?.title}</Title>
            <Image
                alt={featImg?.title ?? ""}
                src={"https:" + featImg?.file?.url ?? ""}
                width={width}
                height={width * imgheight/imgwidth}
            />
            <Text italic>Published on {new Date(publishedDate).toLocaleString()}</Text>
            <div dangerouslySetInnerHTML={{ "__html": htmlStr }} className="text-justify"/>
            <div className="flex flex-row gap-2 items-center flex-wrap">
                <span>Tags: {'  '}</span>
                {(fields?.tags as string[]).map((tag, index) => (
                    <div key={index} className='flex flex-row gap-2 items-center p-2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-sm'>
                        <IconPaperclip />
                        {tag}
                    </div>
                ))}
            </div>
        </Container>
    )
}

export async function getStaticPaths() {
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "",
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? ""
    });

    const entries = await client.getEntries<BlogPostSkeleton>({ 'content_type': 'ngoBlog' });
    const paths = entries.items.map((item) => `/blogs/${item.sys.id}`);

    return { paths, fallback: false };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context;
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "",
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? ""
    });

    const entry = await client.withoutUnresolvableLinks.getEntry<BlogPostSkeleton>(params?.slug as string);

    return {
        props: {
            publishedDate: entry.sys.createdAt,
            fields: entry.fields
        }
    }
}

