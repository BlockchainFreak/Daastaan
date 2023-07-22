import { Container, Title, Text, Center, Button } from '@mantine/core'
import { useRouter } from 'next/navigation'

const fontFamily = "font-mono"

export default function VolunteerPage() {

  const router = useRouter()

  return (
    <div className="p-8">
        <Container className="flex flex-col gap-4 bg-zinc-800 p-12 rounded-3xl shadow-xl">
        <Title className={fontFamily} order={1}>Become a Volunteer Program</Title>
        <Text className={fontFamily}>{`At Daastan, we believe in the power of community and the impact that individuals can make when they come together for a common cause. Our "Become a Volunteer Program" offers a unique opportunity for passionate individuals to contribute their time, skills, and energy towards empowering local nomadic artisans and fostering creativity in children. Join us in our mission to preserve tradition and empower communities in Multan and Lahore!`}</Text>
        
        <Center>
          <Button onClick={() => router.push("/help/form")} variant='gradient'>
            Click Here to fill Volunteer Form
          </Button>
        </Center>
        <Title className={fontFamily} order={2}>1. Application Process:</Title>
        <Text className={fontFamily}>{`To become a volunteer, interested individuals can start by filling out an online application form available on our website. The form will require basic personal information, contact details, and a brief statement explaining their motivation to volunteer with Daastan.`}</Text>

        <Title className={fontFamily} order={2}>2. Orientation and Training:</Title>
        <Text className={fontFamily}>{`Once the applications are received, our team will review them and select candidates who align with our mission and values. Selected volunteers will then be invited to attend an orientation session, where they will learn more about Daastan's work, the specific projects in Multan and Lahore, and their role as a volunteer. They will also receive training on cultural sensitivity, working with children, and any specific skills required for their assigned tasks.`}</Text>

        <Title className={fontFamily} order={2}>3. Project Placement:</Title>
        <Text className={fontFamily}>{`Volunteers will be assigned to projects based on their skills, interests, and availability. In Multan and Lahore, we currently have two main projects where volunteers can contribute:`}</Text>

        <Title className={fontFamily} order={3}>Artisan Support Project: </Title>
        <Text className={fontFamily}>Volunteers will have the opportunity to directly work with local {`nomadic artisans, assisting them in various aspects of their craft production and marketing. This may include helping with product design, quality control, packaging, and online promotion. Volunteers will also have the chance to interact with artisans, learn about their techniques, and gain insights into their rich cultural heritage.`}</Text>
        <Title className={fontFamily} order={3}>Craft Classes for Children: </Title>
        <Text className={fontFamily}> {`Volunteers can actively participate in organizing and conducting craft classes for school-going children, including those with learning disabilities and special needs. They will assist in preparing craft materials, guiding children through creative activities, and providing support and encouragement. Volunteers will play a crucial role in nurturing the potential of these children, fostering their creativity, and promoting social interaction.`}</Text>

        <Title className={fontFamily} order={2}>4. Time Commitment:</Title>
        <Text className={fontFamily}>{`Volunteers can choose their preferred time commitment based on their availability and the project requirements. We understand that everyone has different schedules and commitments, so we offer flexible volunteering options. Whether you can spare a few hours a week or dedicate more time, your contribution will make a significant difference.`}</Text>

        <Title className={fontFamily} order={2}>5. Ongoing Support and Evaluation:</Title>
        <Text className={fontFamily}>{`Throughout the volunteering period, our team will provide continuous support, guidance, and feedback to ensure a fulfilling experience for both the volunteers and the beneficiaries. We will organize regular check-ins, workshops, and volunteer appreciation events to foster a sense of community and recognize the valuable contributions of our volunteers.`}</Text>

        <Title className={fontFamily} order={2}>6. Impact and Recognition:</Title>
        <Text className={fontFamily}>{`By becoming a volunteer with Daastan, you will be part of a global movement that empowers local artisans, preserves traditional crafts, and nurtures the creativity of children. Your dedication and efforts will be recognized through certificates of appreciation, testimonials, and the opportunity to share your volunteering experience on our website and social media platforms.`}</Text>

        <Text className={fontFamily}>{`Join us today and become a Daastan volunteer, making a lasting impact on the lives of artisans and children in Multan and Lahore. Together, we can preserve tradition, empower communities, and unlock the transformative power of creativity!`}</Text>
    </Container>
    </div>
  )
}












