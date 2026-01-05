import { ethers } from "./node_modules/ethers/dist/ethers.min.js";

const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; 
const abi = [ { "type": "function", "name": "addPerson", "inputs": [ {"name": "_favoriteNumber", "type": "uint256", "internalType": "uint256"}, {"name": "_name", "type": "string", "internalType": "string"} ], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "get", "inputs": [], "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}], "stateMutability": "view" }, { "type": "function", "name": "listOfPeaple", "inputs": [{"name": "", "type": "uint256", "internalType": "uint256"}], "outputs": [ {"name": "FavoriteNuber", "type": "uint256", "internalType": "uint256"}, {"name": "Name", "type": "string", "internalType": "string"} ], "stateMutability": "view" }, { "type": "function", "name": "nameToFavoriteNumber", "inputs": [{"name": "", "type": "string", "internalType": "string"}], "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}], "stateMutability": "view" }, { "type": "function", "name": "set", "inputs": [{"name": "_favoriteNumber", "type": "uint256", "internalType": "uint256"}], "outputs": [], "stateMutability": "nonpayable" } ];

const connectButton = document.getElementById("connectWallet");
const input = document.getElementById("inputNumber");
const display = document.getElementById("displayValue");
const submitButton = document.getElementById("submitButton");
const getButton = document.getElementById("getValueButton");

let provider;
let signer;
let contract;


async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
    connectButton.innerHTML = "Connected successfully";
    await getValue();

  } else {
    connectButton.innerHTML = "Please install MetaMask extension";
  }
}

async function storeValue() {
  if (contract) {
    const valueToStore = input.value;
    const tx = await contract.set(valueToStore);
    display.innerHTML = "Processing...";
    // await tx.wait();

    console.log("Done..");
    await getValue();

  } else {
    alert("Please connect to wallet");
  }
}

async function getValue() {
  if (contract) {
    const value = await contract.get();
    display.innerHTML = value.toString();

  } else {
    alert("Please connect wallet first");
  }
}

connectButton.onclick = connect;
submitButton.onclick = storeValue;
getButton.onclick = getValue;

