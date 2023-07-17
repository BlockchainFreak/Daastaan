import { Container, ThemeIcon } from "@mantine/core"
import { IconSun, IconPhone, IconMapPin, IconAt, TablerIconsProps } from '@tabler/icons-react';

export default function AboutPage() {


    return (
        <div className="p-8">
            <Container className="p-4 flex flex-col rounded-lg bg-gradient-to-tr from-purple-700 to-indigo-700">
                <ContactField
                    Icon={IconAt}
                    title="Email"
                    content="daastaan@mail.com"
                />
                <ContactField
                    Icon={IconSun}
                    title="Working Hours"
                    content="Mon - Sat, 9:00 AM - 5:00 PM"
                />
                <ContactField
                    Icon={IconPhone}
                    title="Phone"
                    content="+92 1234567890"
                />
                <ContactField
                    Icon={IconMapPin}
                    title="Address"
                    content="Street 123, City, Country"
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