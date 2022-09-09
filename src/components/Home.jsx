import React from 'react'
import {GoSmiley} from 'react-icons/go'
import {VscSmiley} from 'react-icons/vsc'
const Home = () => {
  return (
    <div className='with-screen h-screen'>
        <div className='z-10 h-full flex flex-col justify-center items-center text-[2em] animate-spin-slow'>
            <GoSmiley />
            </div>
            {/* <div className='h-full flex flex-col justify-right items-start text-[4em] animate-spin-slow'>
            <VscSmiley />
        </div> */}
    </div>
  )
}

export default Home