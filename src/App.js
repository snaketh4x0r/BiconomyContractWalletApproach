import React, { useState, useEffect } from "react";
import "./App.css";


import Web3 from "web3";
import Biconomy from "@biconomy/mexa";
let sigUtil = require("eth-sig-util");
const { config } = require("./config");

let web3,biconomy,con;

function App() {
    //initialize provider using HttpProvider
    //const provider = new Web3.providers.HttpProvider(config.WEB3_PROVIDER_URL);
    //create biconomy instance
	biconomy = new Biconomy(window.ethereum, {dappId: config.biconomy.dappId, apiKey: config.biconomy.apiKey, debug: true});
    //initialize biconomy web3 object
	web3 = new Web3(biconomy);

    //initialize contract
	con = new web3.eth.Contract(config.abi, config.contract.address);
	
	//initialize biconomy
	biconomy
    .onEvent(biconomy.READY, () => {
      // Initialize your dapp here like getting user accounts etc
      console.log("Mexa is Ready");
    })
    .onEvent(biconomy.ERROR, (error, message) => {
      // Handle error while initializing mexa
    });
	
	//login function for user login
    const login = async () => {
			//get user public wallet address
			const accounts = await web3.eth.getAccounts();
            let response = await biconomy.login(accounts[0]);
            if(response && response.transactionHash) {
				// First time user. Contract wallet transaction pending.
                // Wait for confirmation.
                console.log(`NEW USER => Creating your identitiy on chain, Please wait ...   Track using transactionHash ${response.transactionHash}`);
            } else if(response && response.userContract) {
				// Existing user login successful
                console.log(`Login successfull. Contract wallet ${response.userContract}`);  
            }
        } 
	
	//send function
    const send = async () => {
        const add = "0xdb7D0379AB79E7C20c7286e749bD719d197A710f";
	    const x1 = '1000000000000000000000';
		//get user public wallet address
		const accounts = await web3.eth.getAccounts();
	    const result =  await con.methods.approve(web3.utils.toChecksumAddress(add),web3.utils.fromWei(x1,"ether")).send({from: accounts[0]});
        console.log(result);
	}
		
		
		
		
  return (
    <div>  
          <div>Test</div>
		   <button onClick={() => login()} size="small">
            Login
          </button>
		  <button onClick={() => send()} size="small">
            send Tokens
          </button>
    </div>
  );
}


export default App;