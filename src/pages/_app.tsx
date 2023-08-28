import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import HeaderAction from '@/components/Header'
import { MantineProvider, type MantineThemeOverride } from '@mantine/core'

// Vision
// Blogs
// Success Stories
// Testimonials
// Events
// Products
// About Us
// How to Help
//   Sponsor a Family
//   Become a Volunteer
// Donate Us

const links = [
  { link: '/', label: 'Home' },
  { link: '/products', label: 'Products' },
  { link: '/events', label: 'Events' },
  { link: '/testimonials', label: 'Testimonials' },
  { link: '/team', label: 'Our Team' },
  { link: '/blogs', label: 'Blogs' },
  {
    link: '/help', label: 'How to Help', sublinks: [
      { label: "Sponsor a Family", link: "/help/sponsor" },
      { label: "Become a Volunteer", link: "/help/volunteer" },
    ]
  },
  { link: '/about', label: 'Contact Us' },
]

const customTheme: MantineThemeOverride = {
  colorScheme: "dark",
  primaryColor: "deepBlue",
  colors: {
    // Primary Shades
    deepBlue: ["#05014a", "#020079", "#0006b1", "#0013de", "#0021f3"],
    radiantOrange: ["#ff9c00", "#fe8800", "#ff5503", "#ce0a18", "#e12426"],
    brightPink: ["#FFC1E1", "#FF69B4", "#FF1493", "#C71585", "#8B008B"],


  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={customTheme} withGlobalStyles withNormalizeCSS>
      <RecoilRoot>
        <HeaderAction links={links} />
        <main className="h-full py-8">
          <Component {...pageProps} />
        </main>
      </RecoilRoot>
    </MantineProvider>
  )
}
