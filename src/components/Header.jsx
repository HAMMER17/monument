import React from 'react'
import '../style/header.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='header'>
      <h1>Мастерская Камня</h1>
      <Link href={'/'}>Главная</Link>
    </div>
  )
}

export default Header
