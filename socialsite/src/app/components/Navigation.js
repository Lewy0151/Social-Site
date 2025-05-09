'use client'

import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex gap-10 p-5 bg-gray-800 text-white font-medium text-lg border-2 border-white z-50">
      <Link href="/">Home</Link>
      <Link href="/add">Add</Link>
    </nav>
  )
}

export default Navigation
