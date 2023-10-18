import './globals.css'
import { Cabin} from 'next/font/google'
 

const cabin = Cabin({ subsets: ['latin'] })

export const metadata = {
  title: 'Mayven',
  description: 'Mayven: A Place that helps you shop brands with purpose',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>{children}</body>
    </html>
  )
}
