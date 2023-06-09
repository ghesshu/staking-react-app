import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import contractABI from './stakeabi.json';
import tokenABI from './tokenabi.json';

const abi = contractABI;
const contractAddress = "0x92f744927DE8e5E33051603c9B6D68eea7A4e517";
const tokenAddress = "0xfdc50cCE489284B4737Bb557950297cb4f9Ed297";
const provider = new Web3Provider(window.ethereum);
const signer = provider.getSigner();

export async function getStakingContract() {
  const provider = new Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const stakingContract = new ethers.Contract(contractAddress, abi, signer);
  return stakingContract;
}

// import { ethers } from 'ethers';
// import { Web3Provider } from '@ethersproject/providers';
// import contractABI from './stakeabi.json';
// import tokenABI from './tokenabi.json';

// const abi = contractABI;
// const contractAddress = "0x92f744927DE8e5E33051603c9B6D68eea7A4e517";
// const tokenAddress = "0xfdc50cCE489284B4737Bb557950297cb4f9Ed297";

// export async function getStakingContract() {
//   let provider, signer;
//   try {
//     provider = new Web3Provider(window.ethereum);
//     signer = provider.getSigner();
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
//   const stakingContract = new ethers.Contract(contractAddress, abi, signer);
//   return stakingContract;
// }


export async function stake(amount) {
  const stakingContract = await getStakingContract();

  // Get the token instance
  const tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);

  // Approve transfer of tokens from user's wallet to staking contract
  await tokenContract.approve(contractAddress, amount);

  // Stake tokens
  await stakingContract.stake(amount);

  // Staking successful
}

// Balance
export const balanceOf = async (address) => {
  // Get the token instance
  const tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
  return await tokenContract.balanceOf(address);
};

  // Perform unstaking
  export async function unstake(amount) {
    const stakingContract = await getStakingContract();
    await stakingContract.unstake(amount);
    // Unstaking successful
  }

  // Claim rewards
  export async function claimReward() {
  const stakingContract = await getStakingContract();
  await stakingContract.claimReward();
  // Claiming rewards successful
}

  // Get the total rewards
  export async function getTotalRewards() {
  const stakingContract = await getStakingContract();
  const rewards = await stakingContract.claimRewards();
  return rewards;
}

// Define the function to call calculateReward
export async function getReward(address) {
  const stakingContract = await getStakingContract();
  const rewards = await stakingContract.calculateReward(address);
  return rewards;
}


// Export the getStakedBalance function
export const getStakedBalance = async (address) => {
  const stakingContract = await getStakingContract();
  return await stakingContract.stakedBalance(address);
};


// call balanceOf function and retrieve balance for given account
export async function getTokenBalance(account) {
  const provider = new Web3Provider(window.ethereum);
  const tokenContract = new ethers.Contract(tokenAddress, tokenABI, provider);
  const balance = await tokenContract.balanceOf(account);
  return balance;
}

// other functions...


// // Load ethers library
// import { ethers } from 'ethers';

// import { Web3Provider } from '@ethersproject/providers';

// // Load the ABI of the StakingContract
// import contractABI from './abi.json';
// import tokenABI from './tokenabi.json'
// const abi = contractABI; // Use your ABI here

// // Set the address of the deployed contract
// const contractAddress = "0x0946FdAA8327D75f544A753B654F3B143CDd38D8"; // Replace with the address of your deployed contract
// const tokenAddress = "0xfdc50cCE489284B4737Bb557950297cb4f9Ed297";

// // Export the contract functions
// export async function getStakingContract() {
//   // Connect to the blockchain network using Metamask provider
//   const provider = new Web3Provider(windowa.ethereum);
//   // Get the contract instance
//   const signer = provider.getSigner();
//   const stakingContract = new ethers.Contract(contractAddress, abi, signer);
//   return stakingContract;
// }

// // Perform staking
// export async function stake(amount) {
//   const stakingContract = await getStakingContract();
//   await stakingContract.stake(amount);
//   // Staking successful
// }

// // Perform unstaking
// export async function unstake(amount) {
//   const stakingContract = await getStakingContract();
//   await stakingContract.unstake(amount);
//   // Unstaking successful
// }

// // Claim rewards
// export async function claimReward() {
//   const stakingContract = await getStakingContract();
//   await stakingContract.claimReward();
//   // Claiming rewards successful
// }

// // Get the total rewards
// export async function getTotalRewards() {
//   const stakingContract = await getStakingContract();
//   const rewards = await stakingContract.getTotalRewards();
//   return rewards;
// }

// // Get the total supply
// export async function getTotalSupply() {
//   const stakingContract = await getStakingContract();
//   const totalSupply = await stakingContract.totalSupply();
//   return totalSupply;
// }

// // Get the balance of an account
// export async function getBalanceOf(account) {
//   const stakingContract = await getStakingContract();
//   const balance = await stakingContract.balanceOf(account);
//   return balance;
// }

// // Transfer tokens to another account
// export async function transfer(to, amount) {
//   const stakingContract = await getStakingContract();
//   const result = await stakingContract.transfer(to, amount);
//   // Check the result to see if the transfer was successful
//   if (result) {
//     // Transfer successful
//   } else {
//     // Transfer failed
//   }
// }




// // Load ethers library
// import { ethers } from 'ethers';

// import { Web3Provider } from '@ethersproject/providers';

// // Load detectEthereumProvider
// // import detectEthereumProvider from '@metamask/detect-provider';

// // Load the ABI of the StakingContract
// import contractABI from './abi.json';
// const abi = contractABI; // Copy and paste the ABI here

// // Set the address of the deployed contract
// const contractAddress = "0x0946FdAA8327D75f544A753B654F3B143CDd38D8"; // Replace with the address of your deployed contract

// // Export the contract functions
// export async function getStakingContract() {
//   // Connect to the blockchain network using Metamask provider
//    const provider = new Web3Provider(window.ethereum);
//   // Get the contract instance
//   const signer = provider.getSigner();
//   const stakingContract = new ethers.Contract(contractAddress, abi, signer);
//   return stakingContract;
// }


// // Perform staking
// export async function stake(amount) {
//   const stakingContract = await getStakingContract();
//   await stakingContract.stake(amount);
//   // Staking successful
// }

// // Perform unstaking
// export async function unstake(amount) {
//   const stakingContract = await getStakingContract();
//   await stakingContract.unstake(amount);
//   // Unstaking successful
// }

// // Claim rewards
// export async function claimReward() {
//   const stakingContract = await getStakingContract();
//   await stakingContract.claimReward();
//   // Claiming rewards successful
// }

// // Get the total rewards
// export async function getTotalRewards() {
//   const stakingContract = await getStakingContract();
//   const rewards = await stakingContract.getTotalRewards();
//   return rewards;
// }
