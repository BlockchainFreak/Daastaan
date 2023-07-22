import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
    rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { usePathname, useRouter } from "next/navigation";

const HEADER_HEIGHT = rem(80);

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundImage: theme.fn.linearGradient(145, theme.colors.indigo[9], theme.colors.blue[9]),
        backgroundColor: "#03045E"
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'flex',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.md,
        fontWeight: 500,
        margin: `0 ${rem(5)}`,
        alignItems: "center",

        '&:hover': {
            backgroundColor: theme.colors.violet[7],
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },
}));

interface HeaderActionProps {
    links: { link: string; label: string; sublinks?: { label: string, link: string }[] }[];
}

export default function HeaderAction({ links }: HeaderActionProps) {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const router = useRouter();
    const pathname = usePathname();

    const menuItems = links.map((link) => (
        <Menu.Item className='w-48' key={link.link} onClick={() => router.push(link.link)}>{link.label}</Menu.Item>
    ))

    const items = links.map((link) => {
        const menuItems = link.sublinks?.map((item) => (
            <Menu.Item key={item.link} onClick={() => router.push(item.link)}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <div
                            className={classes.link}
                            onClick={() => router.push(link.link)}
                        >
                            <Center>
                                <span className={classes.linkLabel}><strong>{link.label}</strong></span>
                                <IconChevronDown size={rem(12)} stroke={1.5} />
                            </Center>
                        </div>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <div
                key={link.label}
                className={classes.link}
                onClick={() => router.push(link.link)}
            >
                <strong>{link.label}</strong>
            </div>
        );
    });

    return (
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
            <Container className={classes.inner} fluid>
                <Menu opened={opened} onClose={toggle}>
                    <Menu.Target>
                        <Group>
                            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                        </Group>
                    </Menu.Target>
                    <Menu.Dropdown>
                        {menuItems}
                    </Menu.Dropdown>
                </Menu>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Button radius="xl" h={40} px={30} onClick={() => router.push("/donate")}
                    gradient={{ from: "grape", to: "violet" }} variant="gradient"
                >
                    Donate Now
                </Button>
            </Container>
        </Header>
    );
}