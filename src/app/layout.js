'use client'

import './globals.css'
import StoreProvider from './StoreProvider'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body >{children}</body>
      </StoreProvider>

    </html>
  )
}
