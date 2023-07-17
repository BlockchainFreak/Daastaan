import Image from 'next/image';
import { useState, useRef } from 'react';
import { Carousel, useAnimationOffsetEffect, Embla } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useElementSize } from '@mantine/hooks';
import { Box, Center, Container, Grid, Title } from '@mantine/core';


export default function CarouselsComp() {

    const { ref, width, height } = useElementSize()
    const autoplay1 = useRef(Autoplay({ delay: 2000 }));
    const autoplay2 = useRef(Autoplay({ delay: 2000 }));

    const indices = Array(12).fill(1)

    const prods = ['2horses.jpg', 'canbox.jpg', 'canbox2.jpg', 'drawer.jpg', 'elephant.jpg', 'envelope.jpg', 'envelope2.jpg', 'handfan.jpg', 'handfan2.jpg', 'hookah.jpg', 'horse.jpg', 'horse2.jpg', 'tissue-box.jpg', 'tissuebox2.jpg', 'trojan-onbox.jpg', 'trojan.jpg', 'trojan2.jpg', 'wristlet-box.jpg', 'wristlets.jpg']

    const oddProds = prods.filter((_, index) => index % 2 === 0)
    const evenProds = prods.filter((_, index) => index % 2 !== 0)

    return (
        <Box>
            <Box className='m-16 p-8 rounded-xl bg-gradient-to-br  from-indigo-900 to-purple-500' >
                <div className='relative'>
                    <Title className='relative bottom-4' order={2}>Products</Title>
                </div>
                <Grid>
                    <Grid.Col sm={12} md={6} lg={6} className='flex justify-center'><Carousel
                        ref={ref}
                        withIndicators
                        height={300}
                        slideGap="md"
                        loop
                        align="start"
                        plugins={[autoplay1.current] as any}
                        onMouseEnter={autoplay1.current.stop}
                        onMouseLeave={autoplay1.current.reset}
                    >
                        {
                            oddProds.map((prod) => (
                                <Carousel.Slide key={prod}>
                                    <Image
                                        alt="ss"
                                        src={`/products/${prod}`}
                                        width={width / 2.7}
                                        height={300}
                                    />
                                </Carousel.Slide>
                            ))
                        }
                    </Carousel>
                    </Grid.Col>
                    <Grid.Col sm={12} md={6} lg={6} className='flex justify-center'>
                        <Carousel
                            ref={ref}
                            withIndicators
                            height={300}
                            slideGap="md"
                            loop
                            align="start"
                            plugins={[autoplay2.current] as any}
                            onMouseEnter={autoplay2.current.stop}
                            onMouseLeave={autoplay2.current.reset}
                        >
                            {
                                evenProds.map((prod) => (
                                    <Carousel.Slide key={prod}>
                                        <Image
                                            alt="ss"
                                            src={`/products/${prod}`}
                                            width={width / 2.7}
                                            height={300}
                                        />
                                    </Carousel.Slide>
                                ))
                            }
                        </Carousel>
                    </Grid.Col>
                </Grid>
            </Box>
            <Box className='m-16 p-8 rounded-xl bg-gradient-to-br from-indigo-900 to-purple-500' >
                <Title className='text-3xl'>Chughi</Title>
                <Carousel
                    ref={ref}
                    withIndicators
                    height={300}
                    slideSize="33.333333%"
                    slideGap="md"
                    loop
                    align="start"
                    slidesToScroll={3}
                // plugins={[autoplay2.current] as any}
                // onMouseEnter={autoplay2.current.stop}
                // onMouseLeave={autoplay2.current.reset}
                >
                    {
                        indices.map((_, index) => (
                            <Carousel.Slide key={index}>
                                <Image
                                    alt="ss"
                                    src={`/chughis/${index + 1}.jpg`}
                                    width={width / 3}
                                    height={width / 4}
                                />
                            </Carousel.Slide>
                        ))
                    }
                </Carousel>
            </Box>
        </Box>
    );
}