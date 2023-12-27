'use client'
import Card from '@/components/Card'
import Header from '@/components/Header'
import React from 'react'
import { useSelector } from 'react-redux'


export default async function PageProfile() {
  const data = await useSelector((state) => state.data.value)
  console.log(data)
  return (
    <div >
      <Header />
      <div className='profile'>
        <div className='card'>
          <Card text={data.text} props={data.img} logo={data.title} />
          <p className='p'>У нас вы сможете купить памятник по низким ценам. Сможете выбрать готовый памятник или заказать его по вашим эскизам. На нашем сайте представлены модели не только эксклюзивных, но и недорогих памятников. Наши скульпторы выполнят его именно так, как вы этого хотите — достаточно лишь несколько фотографий, варианты оформления могут быть различными. Обязательным для нашей компании является согласованный Вами макет по которым будет сделан будущий постамент.</p>
        </div>
      </div>
    </div>
  )
}


