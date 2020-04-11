let config = {};
config.contract = {
    address: "0xdb7D0379AB79E7C20c7286e749bD719d197A710f",
    abi: [{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":""}],"name":"name","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"approve","inputs":[{"type":"address","name":"spender"},{"type":"uint256","name":"amount"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"totalSupply","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"transferFrom","inputs":[{"type":"address","name":"sender"},{"type":"address","name":"recipient"},{"type":"uint256","name":"amount"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint8","name":""}],"name":"decimals","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender"},{"type":"uint256","name":"addedValue"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"balanceOf","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":""}],"name":"symbol","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender"},{"type":"uint256","name":"subtractedValue"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"transfer","inputs":[{"type":"address","name":"recipient"},{"type":"uint256","name":"amount"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"allowance","inputs":[{"type":"address","name":"owner"},{"type":"address","name":"spender"}],"constant":true},{"type":"constructor","stateMutability":"nonpayable","payable":false,"inputs":[]},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"spender","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false}]
}
config.activeNetworkId = "8995";
// Biconomy configurations
config.biconomy = {
    dappId : "5d8a04b9c4e711650caf4468",
    apiKey: "uihQb57pd.44feab10-b4c5-494c-8f15-68065bc76186"
}

// web3 configurations
config.WEB3_PROVIDER_URL = 'https://testnet2.matic.network';


module.exports = {config}
