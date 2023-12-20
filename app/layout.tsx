import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'

import { Separator } from "@/components/ui/separator"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from 'react-hot-toast'

const font = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Template',
  description: 'Template landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth' >
      <body className={`${font.className} bg-gray-50 text-gray-950 relative`}>


        <Header />
        <Separator />
        {children}
        <Separator />
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </body>
    </html >
  )
}
