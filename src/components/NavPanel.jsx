import React, { useState, useEffect } from 'react'
import close from '../assets/close.png'
import hamburger from '../assets/hamburger.png'
import detectEthereumProvider from '@metamask/detect-provider'
import { Link } from 'react-router-dom'
import './components.css'


const NavPanel = (props) => {

   

    const {homeActive, swapActive, stakingActive, pageContent} = props
    const [accounts, setAccounts] = useState([]);
    const [connectBtn, setConnectBtn] = useState('Connect Wallet')
    const [panel, setPanel] = useState('hidden')
    const [closeClass, setCloseClass] = useState('hidden')
    const [openClass, setOpenClass] = useState('')

    const openBtn = () => {
        setPanel('flex')
        setCloseClass('block')
        setOpenClass('hidden')
        
    }

    const closeBtn = () => {
        setPanel('hidden')
        setCloseClass('hidden')
        setOpenClass('block')


    }

    useEffect(() => {
      const checkAccount = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (window.ethereum && window.ethereum.selectedAddress) {
          setConnectBtn(accounts[0]);
          setAccounts([window.ethereum.selectedAddress]);
          setConnectBtn(accounts[0]);
          setAccounts([window.ethereum.selectedAddress]);
          // window.location.reload(); // refresh the page
        } 
      };
    
      checkAccount();
      
    }, []);
    

    
    // const [active, setActive] = useState('')
    // const connectBtn = document.getElementById("connectBtn");



   
  const connectWallet = async (e) => {
    e.preventDefault();
    const provider = await detectEthereumProvider();
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    
    if (provider) {
      try {
        // Check if already connected
        if (window.ethereum && window.ethereum.selectedAddress) {
          alert("Your MetaMask account is already connected");
          setConnectBtn(accounts[0]);
          setAccounts([window.ethereum.selectedAddress]);

          return;
        }

        // Assign the value returned by eth_requestAccounts to the accounts variable
        const updatedAccounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccounts(updatedAccounts);
        setConnectBtn(accounts[0]);
      } catch (err) {
        console.log(err);
      } 
    } else {
      setConnectBtn('Install MetaMask')
    }
    window.location.reload();
  };
      
      
    


  return (
    <div>
    {/* Navbar  */}
    <nav className='z-20 w-screen  fixed flex justify-between items-center p-4 bg-neutral-950 text-black shadow-xl md:shadow-2xl'>
        <div className="flex items-center">
        <div className="flex space-x-4 items-cente md:pr-20 border-r-4 border-green-800">

        <div className="hidden md:block text-white text-center px-6 font-bold text-xl">
      <h1>AGRITECH</h1>
      </div>
        

            {/* <h1 className="hidden md:block font-bold text-3xl text-green-700">
                AGRITECH
            </h1> */}
        </div>
       <div className="flex items-center ml-4">
       <button onClick={openBtn} className={` ${openClass} lg:hidden ml-`}>
                <img src={hamburger} alt="" className='h-7' />
            </button>

        <button onClick={closeBtn} className={`${closeClass}`}>
            <img src={close} alt="" className="h-9" />
        </button>
       </div>
        </div>

        <button onClick={connectWallet} className="text-white bg-green-900 px-7 py-2 rounded-lg  hover:bg-green-950 transition duration-500 ease-in-out w-56 overflow-x-scroll">{connectBtn}</button>
    </nav>


    {/* Body  */}
    <section className="text-white">
    <div className="flex justify-between">
    {/* Side Panel  */}
    <div id='navPanel' className={` ${panel} mt-16  z-0 md:z-10 fixed lg:static  lg:flex flex-col shadow-2xl bg-neutral-900 h-screen w-80 px-4 space-y- `}>
      <div className="text-white text-center p-6 font-bold text-xl md:hidden">
      <h1>AGRITECH</h1>
      </div>
    <div className="mt-">
    <Link to="/">
        <button className={` hover:bg-green-950 rounded-xl   font-bold  flex w-full items-center space-x-2 px-6 mt-9 py-6 border-b-neutral-900 hover:border-b-neutral-900   transition duration-300 ease-in-out border-b-4  ${homeActive}`}>Home</button>
    </Link>
    <Link to="/swap">
        <button className={` hover:bg-green-950 rounded-xl font-bold    flex w-full items-center space-x-2 px-6 mt-1 py-6 border-b-neutral-900 hover:border-b-neutral-900   transition duration-300 ease-in-out border-b-4 ${swapActive}`}>Swap</button>
    </Link>
    <Link to="/staking">
        <button className={` hover:bg-green-950 rounded-xl   font-bold  flex w-full items-center space-x-2 px-6 mt-1 py-6 border-b-neutral-900 hover:border-b-neutral-900   transition duration-300 ease-in-out border-b-4 ${stakingActive}`}>Staking</button>
    </Link>


    <div className="border-white border-t-2 mt-14">
    <Link to="/staking">
        <button className={` hover:bg-green-950 rounded-xl   font-bold  flex w-full items-center space-x-2 px-6 mt-4 py-6 border-b-neutral-900 hover:border-b-neutral-900   transition duration-300 ease-in-out border-b-4 ${stakingActive}`}>FAQ</button>
    </Link>
    </div>
    </div>
    </div>

    {/* Content  */}
    <div className="w-screen mt-14 pt-11 xl:p-24 bg-neutral-800">
        {pageContent}
    </div>
    </div>
    </section>
    </div>
  )
}

export default NavPanel
