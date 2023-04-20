import React from 'react'

const HomeContent = () => {
  return (
    <div className='bg-neutral-800  mb-8 smd:mb-0'>
      <div className="mx-6">
        <h1 className='block md:hidden font-bold text-center text-3xl text-green-700'> AGRITECH</h1>
        <div className="flex flex-col max-w-6xl md:mx-7">


        <div className=" hidden  md:flex justify-between items-center md:py-14 py-8 md:px-7 px-4 rounded-xl bg-gradient-to-r from-green-950 via-green-800  to-green-900">

        <div className="flex flex-col w-2/6 justify-center items-center border-r-4 border-white ">
            <h1 className="text-2xl font-bold  ">10,0000,000</h1>
            <h1>Max Supply</h1>
        </div>

        <div className="flex flex-col w-2/6 justify-center items-center border-r-4 border-white">
            <h1 className="text-2xl font-bold">10,0000,000</h1>
            <h1>Circulating Supply</h1>
        </div>

        <div className="flex flex-col w-2/6 justify-center items-center">
            <h1 className="text-2xl font-bold">0</h1>
            <h1>🔥Burn</h1>
        </div>

        </div>

        <div className="text-white mt-8">
          <h1 className="font-bold text-2xl">Trade crypto & NFTs with confidence on Binance Smart Chain.</h1>
          <h1 className='text-xl'>Enjoy profitable yield farming and exchanging with the lowest fees in DeFi space!</h1>
        </div>

        </div>

        <div className="flex flex-col  md:flex-row justify-center items-center mt-32 space-y-8 md:space-y-0 s md:mt-56 md:space-x-4 xl:space-x-44">

            <div className="l:mx-14 text-center space-y-4 font-bold text-2xl bg-gradient-to-r from-green-950 via-green-800 to-green-900 py-12 px-14 rounded-xl  w-full md:w-1/2">
              <h1>Total Value Locked</h1>
              <h1>$0</h1>
            </div>

            <div className=" text-center space-y-4 font-bold text-2xl bg-gradient-to-r from-green-950 via-green-800  to-green-900 py-12 px-14 rounded-xl w-full md:w-1/2 ">
              <h1>MARKET CAP</h1>
              <h1>$4000</h1>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomeContent









// import React, { useState, useEffect } from 'react';
// import { stake, getTokenBalance } from '../contract/contract';
// import { useRef } from 'react';
// // import { ethers } from 'ethers';
// import { formatEther } from 'ethers';

// // import Web3 from 'web3';

// const HomeContent = () => {
  
//   const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
  

//   const [address, setAddress] = useState("");
//   const [bal, setBal] = useState('');
//   const amountRef = useRef();


//   const staking = async () => {
//     try {
//       const amtstr = amountRef.current.value;
//       const amount = BigInt(Math.floor(+amtstr * 10**18));
//       if (!amount) {
//         alert("Please enter an amount.");
//         return; // stop execution of the function
//       }
//       await stake(amount, accounts[0]);
//     } catch (error) {
//       alert(error)
//     }
//   }
  
//   // const staking = async () => {
//   //   try {
      

//   //     const amtstr = amountRef.current.value;
//   //     const amount = BigInt(+amtstr * 10**18);
//   //     if (!amount) {
//   //       alert("Please enter an amount.");
//   //       return; // stop execution of the function
//   //     }
//   //     await stake(amount, accounts[0]);
//   //   } catch (error) {
//   //     alert(eror)
//   //   }
//   // };

//   // const gebalancee = async () => {
//   //   try {
//   //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//   //     const balance = await getTokenBalance(accounts[0]);
//   //     setBal(balance);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
  
//   const getball = () => {

//   }

//   useEffect(() => {
//     const fetchAddress = async () => {
//       try {
//         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//         const balanceInWei = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });
//         const balanceInEther = formatEther(balanceInWei);
//         setBal(balanceInEther)
//         setAddress(accounts[0]);
//       } catch (error) {
//         setAddress("");
//       }
//     };
//     fetchAddress();
//   }, []);

//   return (
//     <div>
//       <input className='text-black py-2 px-2 '  type="text" ref={amountRef} />
//       <p>Connected Address: {address}</p>
//       <p>Address Balance: {bal}</p>
//       <div className="space-x-6 mt-8">
//         <button className='bg-green-800 px-4 py-4 hover:bg-green-900'  onClick={staking}>Stake</button>
//         <button className='bg-green-800 px-4 py-4 hover:bg-green-900' onClick={getball}>Get Balance</button>
//       </div>
//     </div>
//   )
// }

// export default HomeContent;
