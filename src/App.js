import React, { useState, useEffect } from "react";
import "./App.css";

import Web3 from "web3";
import Biconomy from "@biconomy/mexa";
let sigUtil = require("eth-sig-util");
const { config } = require("./config");

function App() {

    const provider = new Web3.providers.HttpProvider(config.WEB3_PROVIDER_URL);
    const biconomy = new Biconomy(window.ethereum, {dappId: config.biconomy.dappId, apiKey: config.biconomy.apiKey, debug: true});
    const web3 = new Web3(biconomy);

    
	
	//initialize biconomy
	biconomy
    .onEvent(biconomy.READY, () => {
      // Initialize your dapp here like getting user accounts etc
      console.log("Mexa is Ready");
    })
    .onEvent(biconomy.ERROR, (error, message) => {
      // Handle error while initializing mexa
    });
	
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
  return (
    <div>  
          <div>Test</div>
		   <button onClick={() => login()} size="small">
            Login
          </button>

    </div>
  );
}


export default App;