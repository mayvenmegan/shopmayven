import './globals.css'
import { Cabin} from 'next/font/google'
 
const cabin = Cabin({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: {
    default:'Shopmayven',
    template: "%s | Shopmayven"
  },
  description: 'Shopmayven: A Place that helps you shop brands with purpose',
  twitter:{
    card:"summary_large_image",
    title: "Shopmayven",
    
  },
  metadataBase: new URL ("https://www.shopmayven.co/"),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>{children}</body>
    </html>
  )
}
