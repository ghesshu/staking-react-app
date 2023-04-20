import React from 'react';
import { stake, getTokenBalance, unstake, claimReward, getTotalRewards } from '../contract/contract'
import { useRef, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { formatEther } from 'ethers';
import { balanceOf, getReward, getStakedBalance } from '../contract/contract';

const StakingContent = () => {

  const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });


  const [address, setAddress] = useState("");
  const [bal, setBal] = useState('0.000');
  const amountRef = useRef();
  const [rewards, setRewards] = useState('0.000');
  const [stakebal, setStakebal] = useState('0.000')
  // const [pendingR, setpendingR] = useState('0.000')

    const staking = async () => {
    try {
      const amtstr = amountRef.current.value;
      const amount = BigInt(Math.floor(+amtstr * 10**18));
      if (!amount) {
        alert("Please enter an amount.");
        return; // stop execution of the function
      }
      await stake(amount, accounts[0]);
    } catch (error) {
      alert(error)
    }
  }


  const unStaking = async () => {
    try {
      const amount = amountRef.current.value;
      // const amount = BigInt(Math.floor(+amtstr * 10**18));
      if (isNaN(amount) || amount <= BigInt(0)) {
        alert("Please enter a valid amount.");
        return; // stop execution of the function
      }
      await unstake(amount, accounts[0]);
    } catch(error) {
      console.error(error);
      alert(error);
    }
  }

  async function harvest() {
    try {
      await getTotalRewards();
      // Harvesting successful
    } catch (error) {
      // Handle error
      alert('No Rewards to Claim')
      // console.error(error);
    }
  }

  
  useEffect(() => {
    const fetchStakebal = async () => {
      try{
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const sbal = await getStakedBalance(accounts[0]);
        const sbalNum = Number(sbal.toString()) / 10 ** 18; // convert BigInt to number and divide by 10^18 to get the value in ETH
        if(!sbalNum) {
          setStakebal('0.000')
        }else{
          setStakebal(sbalNum)
          // console.log(sbalNum)
        }
        // setStakebal(sbal);
      } catch (error) {
        console.log(error)
      }
    };

    fetchStakebal();
  }, []);

  useEffect(() => {
    const calcReward = async () => {
      try{
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const preward = await getReward(accounts[0])
        const conReward = Number(preward.toString()) / 10 ** 18; // convert BigInt to number and divide by 10^18 to get the value in ETH
        setRewards(conReward);
        console.log(conReward)
      } catch(error){
        console.log(error)
      }
    }

    calcReward();
  })


    useEffect(() => {
    const fetchAddress = async () => {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        // const balanceInWei = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });
        const balanceInWei = await balanceOf(accounts[0]);
        const balanceInEther = formatEther(balanceInWei);
        setBal(balanceInEther)
        setAddress(accounts[0]);
      } catch (error) {
        setAddress("");
      }
    };
    fetchAddress();
  }, []);



  return (
    <div>
       <div className="bg-green-800  text-white mx-4 md:mx-12">
        <div className="flex justify-between p-4 border-b-2 ">
          <div className="hidden md:flex"></div>

          <div className="md:w-4/6 flex justify-between w-full">
          <div className="">
            <h1 className=''>Stake Balance</h1>
            <h1 className='font-extrabold'>{stakebal}</h1>
          </div>
          <div className="">
            <h1 className=''>APR</h1>
            <h1 className='font-extrabold'>1170%</h1>
          </div>
          <div className="">
            <h1 className='font-bold'>End Date</h1>
            <h1>25 - 30, April</h1>
          </div>
          </div>
        </div>

        <div className="p-4 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 ">
          <div className="md:w-1/2 flex justify-between p-4 border-2 items-center ">
            <div className="">
              <h1>Pending Reward</h1>
              <h1 className='font-bold  text-xs'>{rewards}</h1>

            </div>

            <div className=" flex flex-col space-y-4">
              <button onClick={harvest} className='font-bold text-green-800 bg-white px-4 py-1 border-2  hover:text-white hover:bg-green-800 duration-500 transition ease-in-out'>Harvest</button>
              <button onClick={unStaking} className='font-bold text-green-800 bg-white px-4 py-1 border-2  hover:text-white hover:bg-green-800 duration-500 transition ease-in-out'>UnStake</button>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col p-4 border-2 space-y-4 ">
           <h1 className='font-bold'>Balance: <span>{bal}</span></h1>
           <div className="">
            <input type="text" inputMode='numeric' ref={amountRef} className='w-full p-4 bg-green-800 border-2'  />
            <h1 className='f font-extrabold'>Max: 10,000,0000,0000  AGT</h1>
           </div>
           <button onClick={staking} className='w-full text-green-800 border-white border-2 bg-white py-4 hover:text-white hover:bg-green-800 duration-500 transition ease-in-out'>
            Stake
           </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StakingContent
