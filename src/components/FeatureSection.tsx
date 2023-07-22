import {
    IconHeartHandshake, IconPalette, IconHeart, IconBuildingBridge,
    IconShieldCheckFilled, IconRecycle, IconWorld
} from "@tabler/icons-react"
import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    ThemeIcon,
    Divider,
} from '@mantine/core';
import { useCallback } from "react";

const featuresData = [
    {
        "Icon": IconHeartHandshake,
        "Title": "Global Connection",
        "Description": "We provide an online platform that connects talented artisans with customers worldwide, supporting their livelihoods and preserving traditional techniques."
    },
    {
        "Icon": IconPalette,
        "Title": "Unlocking Creativity",
        "Description": "We organize craft classes for children, fostering their creative skills, motor skills, and social interaction abilities."
    },
    {
        "Icon": IconHeart,
        "Title": "Nurturing Potential",
        "Description": "Our craft classes are designed to unlock each child's creative skills, especially those with learning disabilities and special needs."
    },
    {
        "Icon": IconBuildingBridge,
        "Title": "Bridging Tradition",
        "Description": "We introduce children to traditional crafts, providing them with a connection to their cultural heritage while encouraging innovation and self-expression."
    },
    {
        "Icon": IconShieldCheckFilled,
        "Title": "Safe Space",
        "Description": "Our craft classes offer a nurturing environment where children can explore their creativity freely, with an atmosphere of acceptance and support."
    },
    {
        "Icon": IconRecycle,
        "Title": "Sustainable Practices",
        "Description": "Our products are created using recycled fabrics and papers, promoting sustainability and reducing environmental impact."
    },
    {
        "Icon": IconWorld,
        "Title": "Preserving Tradition",
        "Description": "Your purchase helps preserve centuries-old techniques and traditions for future generations to appreciate."
    }
]


const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
        transition: 'transform 150ms ease, box-shadow 100ms ease',
        '&:hover': {
            boxShadow: theme.shadows.md,
            transform: 'scale(1.03)',
        },
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },
}));

export default function FeatureSection() {
    const { classes, theme } = useStyles();
    const features = featuresData.map((feature) => (
        <Card key={feature.Title} shadow="md" radius="md" className={classes.card} padding="xl">
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: 'violet', to: 'lightblue' }}
            >
                <feature.Icon size={rem(30)} stroke={2} color={theme.fn.primaryColor()} />
            </ThemeIcon>
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.Title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.Description}
            </Text>
        </Card>
    ));

    const ExploreBadge = useCallback(() => (<Badge variant="gradient" gradient={{ from: 'violet', to: 'lightblue' }} size="lg">
        Explore
    </Badge>), [])

    return (
        <>
            <Divider my="xs" label={<ExploreBadge/>} labelPosition="center" />
            <Container size="lg" py="xl">
                <Title order={2} className={classes.title} ta="center" mt="sm">
                    Our Features
                </Title>

                <Text c="dimmed" className={classes.description} ta="center" mt="md">
                    Discover how we empower communities and preserve traditions.
                </Text>

                <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 2 }, { maxWidth: 'sm', cols: 1 }]}>
                    {features}
                </SimpleGrid>
            </Container>
        </>
    );
}