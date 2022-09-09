import React from 'react'
import {GoSmiley} from 'react-icons/go'
import {VscSmiley} from 'react-icons/vsc'
const Home = () => {
  return (
    <div className='with-screen h-screen'>
        <div className='h-auto w-auto flex flex-col justify-center items-center text-[2em] animate-spin-slow'>
            <GoSmiley />
        </div>
        <div className='h-auto w-auto flex flex-col justify-center items-center text-[2em]'>
            <VscSmiley />
        </div>
    </div>
  )
}

export default Home