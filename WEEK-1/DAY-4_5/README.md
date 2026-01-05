Sepolia : Hash: 0xe8ac99738a73c107061d3368b077433dc9c21bd6bc184f37440733d44f3a0f20
Contract Address: 0x79E34278f9865e5Ab9c8eEeA2444F84c5EEc0e7A
Verify it on : https://sepolia.etherscan.io/

You can Check out .env-template and Makefile to deploy and verify it easy-peasy.
To run individual test use command : forge test --mt (test name)

Anvil : Hash: 0xaaefa383f75820b8a85e95ff046521ee4336ee8c8c4c6a91f085bd20d6f3c96f
Contract Address: 0x5FbDB2315678afecb367f032d93F642f64180aa3

abi = [
{
"type": "function",
"name": "addPerson",
"inputs": [
{"name": "_favoriteNumber", "type": "uint256", "internalType": "uint256"},
{"name": "_name", "type": "string", "internalType": "string"}
],
"outputs": [],
"stateMutability": "nonpayable"
},
{
"type": "function",
"name": "get",
"inputs": [],
"outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
"stateMutability": "view"
},
{
"type": "function",
"name": "listOfPeaple",
"inputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
"outputs": [
{"name": "FavoriteNuber", "type": "uint256", "internalType": "uint256"},
{"name": "Name", "type": "string", "internalType": "string"}
],
"stateMutability": "view"
},
{
"type": "function",
"name": "nameToFavoriteNumber",
"inputs": [{"name": "", "type": "string", "internalType": "string"}],
"outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
"stateMutability": "view"
},
{
"type": "function",
"name": "set",
"inputs": [{"name": "_favoriteNumber", "type": "uint256", "internalType": "uint256"}],
"outputs": [],
"stateMutability": "nonpayable"
}
]
