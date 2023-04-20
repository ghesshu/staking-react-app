import React from 'react'
import NavPanel from '../components/NavPanel'
import StakingContent from '../pages/StakingContent'

const Staking = () => {
  return (
    <div className='bg-neutral-800 h-screen'>

    <div className="">
    <NavPanel pageContent={<StakingContent />} stakingActive='bg-green-950 rounded-xl' />
    </div>
      
    </div>
  )
}

export default Staking
