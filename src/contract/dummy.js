const web3 = require('web3');
const BN = web3.utils.BN;

// Define the staking contract address and ABI
const stakingContractAddress = '0x123...'; // Replace with actual contract address
const stakingContractABI = [
  // Define the contract's ABI
  // ...
];

// Create a new instance of the staking contract
const stakingContract = new web3.eth.Contract(stakingContractABI, stakingContractAddress);

// Define the staking function that will stake a given amount of tokens
module.exports.stakeTokens = async function(userAddress, amount) {
  // Convert the amount to the appropriate units
  const amountInWei = web3.utils.toWei(amount, 'ether');

  // Call the staking contract's stake() function
  await stakingContract.methods.stake(amountInWei).send({from: userAddress});

  console.log(`Staked ${amount} tokens successfully!`);
};

// Define the unstaking function that will unstake a given amount of tokens
module.exports.unstakeTokens = async function(userAddress, amount) {
  // Convert the amount to the appropriate units
  const amountInWei = web3.utils.toWei(amount, 'ether');

  // Call the staking contract's unstake() function
  await stakingContract.methods.unstake(amountInWei).send({from: userAddress});

  console.log(`Unstaked ${amount} tokens successfully!`);
};

// Define the function to get the user's staked balance
module.exports.getStakedBalance = async function(userAddress) {
  // Call the staking contract's balanceOf() function to get the user's staked balance
  const balanceInWei = await stakingContract.methods.balanceOf(userAddress).call();

  // Convert the balance to the appropriate units
  const balance = web3.utils.fromWei(balanceInWei, 'ether');

  console.log(`User's staked balance is ${balance} tokens.`);

  return balance;
};

// Define the function to get the user's unstaked balance
module.exports.getUnstakedBalance = async function(userAddress) {
  // Call the staking contract's balanceOfUnderlying() function to get the user's unstaked balance
  const balanceInWei = await stakingContract.methods.balanceOfUnderlying(userAddress).call();

  // Convert the balance to the appropriate units
  const balance = web3.utils.fromWei(balanceInWei, 'ether');

  console.log(`User's unstaked balance is ${balance} tokens.`);

  return balance;
};










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
