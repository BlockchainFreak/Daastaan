import Image from 'next/image'
import Hero from '@/components/Hero'
import Carousel from "@/components/Carousel"
import FeatureSection from '@/components/FeatureSection'


// Colors:
// Primary: deep blue, radiant orange, bright pink
// Secondary: rich yellow, 
// emerald green -> teal 
// deep purple -> grape 



export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-center`}
    >
      <Hero />
      <FeatureSection />
      {/* <Carousel /> */}
    </main>
  )
}
