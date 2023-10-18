import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Searchbox = () => {
  return (
    <header className="header">
    <h1 className="header-title">
      <Link href="/">
      <Image
              priority
              src="/images/logo.png"
              width={60}
              height={60}
              alt="logo"
            />
      MAYVEN</Link>
    </h1>
    </header>
  )
}

export default Searchbox