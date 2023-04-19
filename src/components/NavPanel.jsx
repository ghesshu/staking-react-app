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

    const openBtn = () => {
        setPanel('flex')
        setCloseClass('block')
        
    }

    const closeBtn = () => {
        setPanel('hidden')
        setCloseClass('hidden')


    }

    useEffect(() => {
      const checkAccount = async () => {
        if (window.ethereum && window.ethereum.selectedAddress) {
          setConnectBtn('Account Connected');
          setAccounts([window.ethereum.selectedAddress]);
          setConnectBtn('Account Connected');
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
    
    if (provider) {
      try {
        // Check if already connected
        if (window.ethereum && window.ethereum.selectedAddress) {
          alert("Your MetaMask account is already connected");
          setConnectBtn('Account Connected');
          setAccounts([window.ethereum.selectedAddress]);

          return;
        }

        // Assign the value returned by eth_requestAccounts to the accounts variable
        const updatedAccounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccounts(updatedAccounts);
        setConnectBtn('Account Connected');
      } catch (err) {
        console.log(err);
      } 
    } else {
      setConnectBtn('Install MetaMask')
    }
  };
      
      
    


  return (
    <div>
    {/* Navbar  */}
    <nav className='z-10 w-screen  fixed flex justify-between items-center p-4 bg-white text-black shadow-xl md:shadow-sm'>
        <div className="flex space-x-24">
        <div className="flex space-x-4 items-cente md:w-64 ">
            <button onClick={openBtn} className='lg:hidden ml-'>
                <img src={hamburger} alt="" className='h-7' />
            </button>

            {/* <h1 className="hidden md:block font-bold text-3xl text-green-700">
                AGRITECH
            </h1> */}
        </div>

        <button onClick={closeBtn} className={`${closeClass}`}>
            <img src={close} alt="" className="h-12" />
        </button>
        </div>

        <button onClick={connectWallet} className="text-white bg-green-900 px-7 py-2 rounded-lg  hover:bg-green-950 transition duration-500 ease-in-out">{connectBtn}</button>
    </nav>


    {/* Body  */}
    <section className="text-white">
    <div className="flex justify-between">
    {/* Side Panel  */}
    <div id='navPanel' className={` ${panel} z-0 md:z-20 fixed md:static  lg:flex flex-col bg-green-950 h-screen w-80 px-4 space-y- `}>
      <div className="text-white text-center p-6 font-bold text-xl">
      <h1>AGRITECH</h1>
      </div>
    <div className="mt-">
    <Link to="/">
        <button className={` hover:bg-green-700 rounded-xl   font-bold  flex w-full items-center space-x-2 px-6 mt-9 py-6 border-b-green-950 hover:border-b-green-950   transition duration-300 ease-in-out border-b-4  ${homeActive}`}>Home</button>
    </Link>
    <Link to="/swap">
        <button className={` hover:bg-green-700 rounded-xl font-bold    flex w-full items-center space-x-2 px-6 mt-1 py-6 border-b-green-950 hover:border-b-green-950   transition duration-300 ease-in-out border-b-4 ${swapActive}`}>Swap</button>
    </Link>
    <Link to="/staking">
        <button className={` hover:bg-green-700 rounded-xl   font-bold  flex w-full items-center space-x-2 px-6 mt-1 py-6 border-b-green-950 hover:border-b-green-700   transition duration-300 ease-in-out border-b-4 ${stakingActive}`}>Staking</button>
    </Link>


    <div className="border-white border-t-2 mt-14">
    <Link to="/staking">
        <button className={` hover:bg-green-700 rounded-xl   font-bold  flex w-full items-center space-x-2 px-6 mt-4 py-6 border-b-green-950 hover:border-b-green-700   transition duration-300 ease-in-out border-b-4 ${stakingActive}`}>FAQ</button>
    </Link>
    </div>
    </div>
    </div>

    {/* Content  */}
    <div className="w-screen mt-14 pt-11 xl:p-24 bg-white">
        {pageContent}
    </div>
    </div>
    </section>
    </div>
  )
}

export default NavPanel
