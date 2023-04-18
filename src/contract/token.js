// Load ethers library
import { ethers } from 'ethers';

import { Web3Provider } from '@ethersproject/providers';

// Load the ABI of the Token contract
import tokenABI from './tokenabi.json'

const abi = tokenABI; // Use your ABI here

// Set the address of the deployed contract
const tokenAddress = "0xfdc50cCE489284B4737Bb557950297cb4f9Ed297"; // Replace with the address of your deployed token

// Create a provider for web3
const provider = new Web3Provider(window.ethereum);

// Create a signer to interact with the contract
const signer = provider.getSigner();

// Create a contract instance
const tokenContract = new ethers.Contract(tokenAddress, abi, signer);

// Export the balanceOf function
export const balanceOf = async (address) => {
  return await tokenContract.balanceOf(address);
};

// Export the transfer function
export const transfer = async (to, amount) => {
  return await tokenContract.transfer(to, amount);
};

// Export the approve function
// export const approve = async (spender, amount) => {
//   return await tokenContract.approve(spender, amount);
// };

// Export the transferFrom function
export const transferFrom = async (from, to, amount) => {
  return await tokenContract.transferFrom(from, to, amount);
};

// Export the totalSupply function
export const totalSupply = async () => {
  return await tokenContract.totalSupply();
};

// Export the name function
export const name = async () => {
  return await tokenContract.name();
};

// Export the symbol function
export const symbol = async () => {
  return await tokenContract.symbol();
};

// Export the decimals function
export const decimals = async () => {
  return await tokenContract.decimals();
};

// Export the mint function
export const mint = async (to, amount) => {
  return await tokenContract._mint(to, amount);
};

// Export the burn function
export const burn = async (from, amount) => {
  return await tokenContract._burn(from, amount);
};

// Export the approve function
export const approve = async (spender, amount) => {
  return await tokenContract._approve(spender, amount);
};

// Export the spendAllowance function
export const spendAllowance = async (from, to, amount) => {
  return await tokenContract._spendAllowance(from, to, amount);
};
