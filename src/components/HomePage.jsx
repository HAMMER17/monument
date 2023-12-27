'use client'

import { useRouter } from 'next/navigation'


import '../style/homepage.css'
import Link from 'next/link'

import { data } from '../app/constant/constant.js'
import Card from './Card'
import { useAppDispatch } from '@/app/lib/hook'
import { createData } from '@/app/redax/redaxSlise'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const handlerSubmit = (data) => {
    console.log(data)
    dispatch(createData(data))
    router.push(`/pages/${data.id}`)
  }
  return (
    <>
      <h3 className='p'>Изделия из камня</h3>
      <div className='homepage'>

        {data.map((elem, id) => (
          <div className='card' key={id} onClick={() => handlerSubmit(elem)}>
            <Card logo={elem.title} props={elem.img} text={elem.text} />
          </div>

        ))}
      </div>
      <div className='footer'>8 999 999 999</div>
    </>
  )
}

export default HomePage
