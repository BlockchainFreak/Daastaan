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
        backgroundColor: theme.colors.violet[9],
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
    links: { link: string; label: string; }[];
}

export default function HeaderAction({ links }: HeaderActionProps) {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const router = useRouter();
    const pathname = usePathname();

    const items = links.map((link) => {
        // const menuItems = link.links?.map((item) => (
        //     <Menu.Item key={item.link}>{item.label}</Menu.Item>
        // ));

        // if (menuItems) {
        //     return (
        //         <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
        //             <Menu.Target>
        //                 <a
        //                     href={link.link}
        //                     className={classes.link}
        //                     onClick={(event) => event.preventDefault()}
        //                 >
        //                     <Center>
        //                         <span className={classes.linkLabel}>{link.label}</span>
        //                         <IconChevronDown size={rem(12)} stroke={1.5} />
        //                     </Center>
        //                 </a>
        //             </Menu.Target>
        //             <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        //         </Menu>
        //     );
        // }

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
                <Group>
                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                </Group>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Button radius="xl" h={40} px={30} variant="gradient" gradient={{ from: "grape", to: "violet" }}>
                    Donate Now
                </Button>
            </Container>
        </Header>
    );
}