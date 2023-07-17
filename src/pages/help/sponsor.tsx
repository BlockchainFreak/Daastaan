import { Container, Text, Title } from '@mantine/core'

const fontFamily = "font-mono"

export default function SponsorPage() {
    return (
        <div className="p-8">
            <Container className="flex flex-col gap-4 bg-zinc-800 p-12 rounded-3xl shadow-xl">
                <Title className={fontFamily} order={1}>{`Sponsor a Family: Empowering Communities, One Family at a Time`}</Title>
                <Text className={fontFamily}>{`At Daastan, we believe in the power of community and the positive impact that supporting families can have on their lives. Through our "Sponsor a Family" program, we aim to provide sustainable support to families in need in Multan and Lahore, empowering them to create a better future for themselves and their communities.`}</Text>

                <Title className={fontFamily} order={2}>{`How Does it Work?`}</Title>
                <Title order={4} className={fontFamily}>{`1. Identifying Families:`}</Title>
                <Text className={fontFamily}>{` Our dedicated team works closely with local communities to identify families who are facing economic hardships and are in need of support. We prioritize families who are living in poverty, have limited access to education and healthcare, and are struggling to meet their basic needs.`}</Text>

                <Title order={4} className={fontFamily}>{`2. Needs Assessment:`}</Title>
                <Text className={fontFamily}>{` Once a family is identified, we conduct a thorough needs assessment to understand their specific challenges and requirements. This assessment includes evaluating their financial situation, educational needs, healthcare requirements, and any other areas where support may be needed.`}</Text>

                <Title order={4} className={fontFamily}>{`3. Customized Support Plan:`}</Title>
                <Text className={fontFamily}>{` Based on the needs assessment, we create a customized support plan for each sponsored family. This plan is designed to address their specific challenges and empower them to overcome their current circumstances. It may include financial assistance, access to education and healthcare, vocational training, and other forms of support.`}</Text>

                <Title order={4} className={fontFamily}>{`4. Sponsorship Options:`}</Title>
                <Text className={fontFamily}>{` We offer different sponsorship options to cater to the diverse needs and preferences of our supporters. You can choose to sponsor a family on a monthly, quarterly, or annual basis, depending on your capacity and commitment. We also provide the option to sponsor multiple families if you wish to make a larger impact.`}</Text>

                <Title order={4} className={fontFamily}>{`5. Regular Updates:`}</Title>
                <Text className={fontFamily}>{` As a sponsor, you will receive regular updates on the progress and impact of your support. We believe in transparency and accountability, and we want you to see the positive changes your contribution is making in the lives of the sponsored families.`}</Text>

                <Title order={4} className={fontFamily}>{`6. Impact Measurement:`}</Title>
                <Text className={fontFamily}>{` We measure the impact of our "Sponsor a Family" program through various indicators, including improvements in the family's income, access to education and healthcare, and overall well-being. We share these impact reports with our sponsors to showcase the tangible difference they are making in the lives of the families they support.`}</Text>

                <Title order={4} className={fontFamily}>{`7. Community Engagement:`}</Title>
                <Text className={fontFamily}>{` In addition to direct support to families, we also focus on community engagement and empowerment. We organize workshops, training sessions, and awareness campaigns to educate families about sustainable practices, financial management, and other essential skills. This holistic approach ensures that the impact of our program extends beyond individual families and contributes to the overall development of the community.`}</Text>

                <Title className={fontFamily} order={2}>{`Join Us in Empowering Families`}</Title>
                <Text className={fontFamily}>{`By sponsoring a family through Daastan's "Sponsor a Family" program, you become a catalyst for change and a source of hope for families in Multan and Lahore. Your support not only helps meet their immediate needs but also empowers them to break the cycle of poverty and create a brighter future for themselves and their children.`}</Text>

                <Text className={fontFamily}>{`Together, let's make a difference, one family at a time. Sponsor a family today and be a part of their journey towards empowerment and self-sufficiency.`}</Text>
            </Container>
        </div>
    )
}
