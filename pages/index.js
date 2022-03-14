import React from 'react';
import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <h1>Does it rewrite?</h1>
      <p>
        Check out 
        <Link href="/api/event">
          <a>/api/event</a>
        </Link>
      </p>
    </main>
  )
}
