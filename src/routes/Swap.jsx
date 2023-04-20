import React from 'react'
import SwapContent from '../pages/SwapContent'
import NavPanel from '../components/NavPanel'

const Swap = () => {
  return (
    <div className='bg-neutral-800 h-screen'>

    <div className="">
    <NavPanel pageContent={<SwapContent />} swapActive='bg-green-950 rounded-xl' />
    </div>
      
    </div>
  )
}

export default Swap
