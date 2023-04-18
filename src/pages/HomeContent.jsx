import React, { useState, useEffect } from 'react';
import { stake, getTokenBalance } from '../contract/contract';
import { useRef } from 'react';
// import { ethers } from 'ethers';
import { formatEther } from 'ethers';

// import Web3 from 'web3';

const HomeContent = () => {
  
  const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
  

  const [address, setAddress] = useState("");
  const [bal, setBal] = useState('');
  const amountRef = useRef();


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
  
  // const staking = async () => {
  //   try {
      

  //     const amtstr = amountRef.current.value;
  //     const amount = BigInt(+amtstr * 10**18);
  //     if (!amount) {
  //       alert("Please enter an amount.");
  //       return; // stop execution of the function
  //     }
  //     await stake(amount, accounts[0]);
  //   } catch (error) {
  //     alert(eror)
  //   }
  // };

  // const gebalancee = async () => {
  //   try {
  //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //     const balance = await getTokenBalance(accounts[0]);
  //     setBal(balance);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  const getball = () => {

  }

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const balanceInWei = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });
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
      <input className='text-black py-2 px-2 '  type="text" ref={amountRef} />
      <p>Connected Address: {address}</p>
      <p>Address Balance: {bal}</p>
      <div className="space-x-6 mt-8">
        <button className='bg-green-800 px-4 py-4 hover:bg-green-900'  onClick={staking}>Stake</button>
        <button className='bg-green-800 px-4 py-4 hover:bg-green-900' onClick={getball}>Get Balance</button>
      </div>
    </div>
  )
}

export default HomeContent;
