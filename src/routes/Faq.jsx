import React from 'react'
import NavPanel from '../components/NavPanel'
// import HomeContent from '../pages/HomeContent'
import FaqContent from '../pages/FaqContent'
// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");


const Faq = () => {
   

    // const [active, setActive] = useState('');
  return (
    <div className='bg-neutral-800 h-screen'>

    <div className="">
    <NavPanel pageContent={<FaqContent />} faqActive='bg-green-950 rounded-xl' />
    </div>
      
    </div>
  )
}

export default Faq
