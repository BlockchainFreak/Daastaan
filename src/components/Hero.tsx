import Image from 'next/image';
import { createStyles, Overlay, Container, Title, Button, Text, rem, SimpleGrid, Grid } from '@mantine/core';
import { Carousel, useAnimationOffsetEffect, Embla } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { useElementSize } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        // backgroundImage:
        //     'url(chughis/22.jpg)',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // display: "flex",
        // justifyContent: "flex-start",
    },

    container: {
        height: rem(700),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: `calc(${theme.spacing.xl} * 6)`,
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            height: rem(500),
            paddingBottom: `calc(${theme.spacing.xl} * 3)`,
        },
    },

    title: {
        color: theme.white,
        fontSize: rem(60),
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(40),
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            lineHeight: 1.3,
        },
    },

    description: {
        color: theme.white,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.sm,
        },
    },

    control: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,
        width: 200,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },
}));

const images = Array.from({ length: 50 }, (_, i) => i + 1)

export default function HeroContentLeft() {
    const { classes } = useStyles();
    const { ref, width } = useElementSize()
    const autoplay = useRef(Autoplay({ delay: 1500 }));

    return (
        <Grid mb="lg">
            <Grid.Col xs={12} md={5}>
                <Container className="justify-center flex flex-col p-12">
                    <Title className={classes.title}>Preserving Tradition, Empowering Communities</Title>
                    <Text className={classes.description} size="xl" mt="xl">
                        Welcome to Daastan, where we celebrate the artistry of local nomadic artisans and support their livelihoods through sustainable practices. At Daastan, we also believe in the transformative power of creativity and its ability to shape lives!
                    </Text>

                    <Button variant="gradient" gradient={{ from: "grape", to: "violet" }} size="xl" radius="xl" className={classes.control}>
                        Support Now
                    </Button>
                </Container>
            </Grid.Col>
            <Grid.Col xs={12} md={7}>
                <Carousel
                    ref={ref}
                    slideGap="md"
                    loop
                    align="start"
                    plugins={[autoplay.current] as any}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={autoplay.current.reset}
                >
                    {
                        images.map((prod) => (
                            <Carousel.Slide key={prod}>
                                <Image
                                    alt="ss"
                                    src={`/craftworkshopattaleemsubkailiyeschool/${prod}.jpg`}
                                    width={width}
                                    height={width / 1.4}
                                />
                            </Carousel.Slide>
                        ))
                    }
                </Carousel>
            </Grid.Col>
        </Grid>
    );
}