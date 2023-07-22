import Link from 'next/link'
import { Container, Grid, Flex, Center, Button } from '@mantine/core'
import Image from 'next/image'

const prods = ['2horses.jpg', 'canbox.jpg', 'drawer.jpg', 'elephant.jpg', 'envelope.jpg', 'handfan.jpg', 'handfan2.jpg', 'hookah.jpg', 'horse.jpg', 'tissue-box.jpg', 'trojan-onbox.jpg', 'trojan.jpg', 'wristlet-box.jpg', 'wristlets.jpg']

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

export default function ProductsPage() {


    return (
        <Container className="my-8">

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
                {products.map((prod, index) => (
                    <Grid.Col key={index} md={6} lg={4} className='flex justify-center'>
                        <div className='p-4 flex flex-col gap-4 transition-all duration-150 ease-in card hover:scale-105 hover:shadow-xl rounded-lg cursor-pointer' style={{ backgroundColor: "#25262b" }}>
                            <img alt={prod.name} src={`/products/${prod.img}`} width={250} />
                            <h3>{prod.name}</h3>
                        </div>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    )
}
