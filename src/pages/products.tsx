import Link from 'next/link'
import { Container, Grid, Flex, Center, Button } from '@mantine/core'
import Image from 'next/image'
import { EntryFieldTypes, createClient } from 'contentful'
import { InferGetStaticPropsType } from 'next'

const products = [
    { name: 'Miniature Decorative Horses', img: '2horses.jpg' },
    { name: 'Pencil Box', img: 'canbox.jpg' },
    { name: 'Hand Held Fan', img: 'handfan3.jpg' },
    { name: 'Elephant', img: 'elephant.jpg' },
    { name: 'Envelope', img: 'envelope.jpg' },
    { name: 'Hand Fan', img: 'handfan.jpg' },
    { name: 'Dry Fruit Tray', img: 'handfan2.jpg' },
    { name: 'Hookah', img: 'hookah.jpg' },
    { name: 'Horse', img: 'horse.jpg' },
    { name: 'Tissue Box', img: 'tissue-box.jpg' },
    { name: 'Miniature Decorative Horse', img: 'trojan-onbox.jpg' },
    { name: 'Gugu Ghora', img: 'trojan.jpg' },
    { name: 'Bangle Box (Churiyan)', img: 'wristlet-box.jpg' },
    { name: 'Bangle Box (Churiyan)', img: 'wristlets.jpg' },
]

type ProductSkeleton = {
    contentTypeId: "product",
    fields: {
        name: EntryFieldTypes.Text,
        image: EntryFieldTypes.AssetLink,
        price?: EntryFieldTypes.Number,
    }
}

export default function ProductsPage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <Container className="py-8">

            <Center className="justify-center flex flex-col mb-12">
                <h3>
                    To view more products, here is a link to Our Facebook Marketplace
                </h3>
                <Link href="https://www.facebook.com/marketplace/profile/100093440680697" target="_blank" rel="noopener noreferrer">
                    <Button gradient={{ from: "grape", to: "violet" }} variant="gradient" className='w-48'>
                        Marketplace
                    </Button>
                </Link>
            </Center>

            <Grid gutter="lg">
                {prods.map((prod, index) => (
                    <Grid.Col key={index} md={6} lg={4} className='flex justify-center'>
                        <div className='p-4 flex flex-col gap-4 transition-all duration-150 ease-in card hover:scale-105 hover:shadow-xl rounded-lg cursor-pointer' style={{ backgroundColor: "#25262b" }}>
                            <img alt={prod.name} src={`/products/${prod.image}`} width={250} />
                            <h3>{prod.name}</h3>
                        </div>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    )
}


export async function getStaticProps() {
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "",
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? ""
    });

    const entries = await client.withoutUnresolvableLinks.getEntries<ProductSkeleton>({ 'content_type': 'product' });
    const products = entries.items.map(item => item.fields);

    return {
        props: {
            products
        },
        revalidate: 1
    }
}

const prods = [
    {
        "name": "Horses",
        "image": "2horses.jpg"
    },
    {
        "name": "Pencil Holder",
        "image": "canbox.jpg"
    },
    {
        "name": "Pencil Holder",
        "image": "canbox2.jpg"
    },
    {
        "name": "Elephant",
        "image": "elephant.jpg"
    },
    {
        "name": "Envelope",
        "image": "envelope.jpg"
    },
    {
        "name": "Envelope",
        "image": "envelope2.jpg"
    },
    {
        "name": "Hand Fan",
        "image": "handfan.jpg"
    },
    {
        "name": "Dry Fruit Tray",
        "image": "dry-fruit-tray.jpg"
    },
    {
        "name": "Hand Fan",
        "image": "handfan3.jpg"
    },
    {
        "name": "Hookah",
        "image": "hookah.jpg"
    },
    {
        "name": "Minaiture Decorative Horse",
        "image": "horse.jpg"
    },
    {
        "name": "Minaiture Decorative Horse",
        "image": "horse2.jpg"
    },
    {
        "name": "Tissue Box",
        "image": "tissue-box.jpg"
    },
    {
        "name": "Tissue Box",
        "image": "tissue-box2.jpg"
    },
    {
        "name": "Gugu Ghora On Box",
        "image": "trojan-onbox.jpg"
    },
    {
        "name": "Gugu Ghora",
        "image": "trojan.jpg"
    },
    {
        "name": "Gugu Ghora",
        "image": "trojan2.jpg"
    },
    {
        "name": "Bangle Box (Churiyan)",
        "image": "wristlet-box.jpg"
    },
    {
        "name": "Bangle Box (Churiyan)",
        "image": "wristlets.jpg"
    }
]