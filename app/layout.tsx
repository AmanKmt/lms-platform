import './globals.css'
import type { Metadata } from 'next'
import { Karla } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'

const font = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hi Study',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ConfettiProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
};