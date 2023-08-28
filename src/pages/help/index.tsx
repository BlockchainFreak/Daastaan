import { Container, Grid } from '@mantine/core'
import { useRouter } from 'next/navigation'
import HelpCard from '@/components/HelpCard'
import React from 'react'

const volunteer = `The "Become a Volunteer Program" at Daastan offers individuals the opportunity to contribute their time and skills towards empowering local nomadic artisans and fostering creativity in children in Multan and Lahore. Interested individuals can apply through an online form and selected volunteers will attend an orientation session to learn about Daastan's work and their role. Volunteers can choose to work on the Artisan Support Project, assisting artisans with various aspects of their craft, or participate in craft classes for children, including those with special needs. The program offers flexibility in time commitment and ongoing support, and volunteers will be recognized for their contributions. Join Daastan and make a difference in preserving tradition and empowering communities through creativity.`
const sponsor = `Daastan's "Sponsor a Family" program aims to empower families in Multan and Lahore by providing sustainable support. The program involves identifying families in need, conducting a needs assessment, and creating a customized support plan. Sponsors can choose to support families on a monthly, quarterly, or annual basis and receive regular updates on the impact of their contribution. The program also focuses on community engagement and empowerment. By sponsoring a family, individuals can make a tangible difference in the lives of families and contribute to their long-term well-being.`

export default function HelpPage() {

    const router = useRouter()

    return (
        <Container className='py-8'>
            <Grid gutter="lg">
                <Grid.Col md={12} lg={6} className='flex justify-center' onClick={() => router.push('/help/volunteer')}>
                    <HelpCard
                        title='Become a Volunteer'
                        description={volunteer}
                    />
                </Grid.Col>
                <Grid.Col md={12} lg={6} className='flex justify-center' onClick={() => router.push('/help/sponsor')}>
                    <HelpCard
                        title='Sponsor a Family'
                        description={sponsor}
                    />
                </Grid.Col>
            </Grid>
        </Container>
    )
}