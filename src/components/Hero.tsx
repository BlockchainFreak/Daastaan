import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundImage:
            'url(chughis/22.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: "flex",
        justifyContent: "flex-start",
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

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },
}));

export default function HeroContentLeft() {
    const { classes } = useStyles();

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <Title className={classes.title}>Preserving Tradition, Empowering Communities</Title>
                <Text className={classes.description} size="xl" mt="xl">
                    Welcome to Daastan, where we celebrate the artistry of local nomadic artisans and support their livelihoods through sustainable practices. At Daastan, we also believe in the transformative power of creativity and its ability to shape lives!
                </Text>

                <Button variant="gradient" gradient={{ from: "grape", to: "violet" }} size="xl" radius="xl" className={classes.control}>
                    Support Now
                </Button>
            </Container>
        </div>
    );
}