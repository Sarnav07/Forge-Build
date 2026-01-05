// Require Packages 
import {ethers} from "ethers"

// Setup connection 
let signer = null;

let provider;
if (window.ethereum == null) {

    // If MetaMask is not installed, we use the default provider,
    // which is backed by a variety of third-party services (such
    // as INFURA). They do not have private keys installed,
    // so they only have read-only access
    console.log("MetaMask not installed; using read-only defaults")
    provider = ethers.getDefaultProvider()

} else {

    // Connect to the MetaMask EIP-1193 object. This is a standard
    // protocol that allows Ethers access to make all read-only
    // requests through MetaMask.
    provider = new ethers.BrowserProvider(window.ethereum)

    // It also provides an opportunity to request access to write
    // operations, which will be performed by the private key
    // that MetaMask manages for the user.
    signer = await provider.getSigner();
}

const Address = "0xC7c1098B2A90e9621dAe395386521eda2321B7D2"

async function main() {
    // Get the current balance of an account (by address or ENS name)
    balance = await provider.getBalance(Address)
    console.log(balance)

}

main()

const input = document.getElementById("inputNumber");
const submit = document.getElementById("submitButton");
const display = document.getElementById("displayValue");


submit.onclick = function() {
  display.textContent = input.value;
};