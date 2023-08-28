import { Container, ThemeIcon } from "@mantine/core"
import { IconSun, IconPhone, IconMapPin, IconAt, TablerIconsProps, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import Link from "next/link";

export default function AboutPage() {

    return (
        <div className="p-8">
            <Container className="p-4 flex flex-col rounded-lg bg-gradient-to-tr from-purple-900 to-indigo-900">
                <ContactField
                    Icon={IconAt}
                    title="Email"
                    content="daastaan913@gmail.com"
                />
                <Link href="https://www.instagram.com/daastan.00/" className="no-underline text-white" rel="noopener noreferrer" target="_blank">
                    <ContactField
                        Icon={IconBrandInstagram}
                        title="Instagram"
                        content="@daastan.00"
                    />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100093611552573" className="no-underline text-white" rel="noopener noreferrer" target="_blank">
                    <ContactField
                        Icon={IconBrandFacebook}
                        title="Facebook"
                        content="@Daastan"
                    />
                </Link>
                <ContactField
                    Icon={IconSun}
                    title="Working Hours"
                    content="Mon - Sat, 9:00 AM - 5:00 PM"
                />
                <ContactField
                    Icon={IconPhone}
                    title="Ahmed Hassan Faiz Chadhar (General Secretary/Co-Founder)"
                    content="+92 331 3773929"
                />
                <ContactField
                    Icon={IconPhone}
                    title="Haider Nafees Ahmed (President/Co-Founder)"
                    content="+92 324 4923575"
                />
                <ContactField
                    Icon={IconPhone}
                    title="Ibrahim Bajwa (Director/Youth Mobilization)"
                    content="+92 300 9482234"
                />
                <ContactField
                    Icon={IconMapPin}
                    title="Address"
                    content="House no. 152-B, Street 4, Cavalry Ground, Lahore Cantt."
                />
            </Container>
        </div>
    )
}

type ContactFieldProps = {
    Icon: (props: TablerIconsProps) => JSX.Element,
    title: string,
    content: string
}
const ContactField = ({ Icon, title, content }: ContactFieldProps) => (
    <div className="flex gap-4 items-center m-2">
        <ThemeIcon size={20} radius="md">
            <Icon />
        </ThemeIcon>
        <div className="flex flex-col gap-1">
            <span className="text-sm">{title}</span>
            <span className="italic">{content}</span>
        </div>
    </div>
)