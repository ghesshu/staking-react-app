import React from 'react'

const StakingContent = () => {
  return (
    <div>
       <div className="bg-green-800  text-white mx-12">
        <div className="flex justify-between p-4 border-b-2 ">
          <div className=""></div>

          <div className="w-4/6 flex justify-between">
          <div className="">
            <h1 className='font-bold'>Token Amount</h1>
            <h1>Earned</h1>
          </div>
          <div className="">
            <h1 className='font-bold'>APR</h1>
            <h1>170%</h1>
          </div>
          <div className="">
            <h1 className='font-bold'>End Date</h1>
            <h1>Invalid Date</h1>
          </div>
          </div>
        </div>

        <div className="p-4 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 ">
          <div className="w-1/2 flex justify-between p-4 border-2 items-center ">
            <div className="">
              <h1>Pending Reward</h1>
              <h1 className='font-bold'>0.0000</h1>
            </div>

            <div className=" flex flex-col space-y-4">
              <button className='font-bold text-green-800 bg-white px-4 py-1'>Harvest</button>
              <button className='font-bold text-green-800 bg-white px-4 py-1'>UnStake</button>
            </div>
          </div>

          <div className="w-1/2 flex flex-col p-4 border-2 space-y-4 ">
           <h1 className='font-bold'>Balance: <span>0.000</span></h1>
           <div className="">
            <input type="text" className='w-full p-4 bg-green-800 border-2'  />
            <h1 className='f font-extrabold'>Max: 10,000,0000,0000  AGT</h1>
           </div>
           <button className='w-full text-green-800 border-white border-2 bg-white py-4 hover:text-white hover:bg-green-800 duration-500 transition ease-in-out'>
            Stake
           </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StakingContent
