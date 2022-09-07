import React from 'react'
import {GoSmiley} from 'react-icons/go'
const Home = () => {
  return (
    <div className='with-screen h-screen'>
        <div className='h-full flex flex-col justify-center items-center text-[59em] animate-spin-slow'>
            <GoSmiley />
        </div>
    </div>
  )
}

export default Home