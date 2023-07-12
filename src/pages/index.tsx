import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Carousel from "@/components/Carousel"

const inter = Inter({ subsets: ['latin'] })

// Colors:
// Primary: deep blue, radiant orange, bright pink
// Secondary: rich yellow, 
// emerald green -> teal 
// deep purple -> grape 



export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-center bg-gradient-to-tr from-indigo-900 via-purple-500 to-pink-300`}
    >
      <Hero />
      <Carousel />
    </main>
  )
}
