import React from 'react'
import Image from 'next/image'

const Card = ({ logo, props, text }) => {
  return (
    <div className=''>
      <h3 className='logo'>{logo}</h3>
      <Image className='img'
        src={props}
        // width={'100%'}
        // height={'100%'}
        alt="Picture of the author"
      />
      <p> {text}</p>
    </div>
  )
}

export default Card
