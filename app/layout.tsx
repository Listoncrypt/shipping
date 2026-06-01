import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SplashScreen } from '@/components/SplashScreen'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Martime Shipping - Sea Logistics Solutions',
  description: 'Maritime shipping and sea logistics services from Nantes, France. A subsidiary of Blue Water Shipping SARL.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'https://blue-shipping.be/wp-content/uploads/2020/09/cropped-favicon-32x32.png',
        sizes: '32x32',
      },
      {
        url: 'https://blue-shipping.be/wp-content/uploads/2020/09/cropped-favicon-192x192.png',
        sizes: '192x192',
      },
      {
        url: 'https://blue-shipping.be/wp-content/uploads/2020/09/cropped-favicon-180x180.png',
        sizes: '180x180',
      },
    ],
    apple: 'https://blue-shipping.be/wp-content/uploads/2020/09/cropped-favicon-180x180.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <SplashScreen />
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
