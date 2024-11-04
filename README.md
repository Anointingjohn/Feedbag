## **Feedbag Agrihub**

Feedbag Agrihub is an on-chain marketplace addressing post-harvest loss, market inaccessibility, and climate impact by connecting and rewarding African farmers, aggregators, and consumers from farm to table. Our platform leverages blockchain for transparency and AI for personalized consumer purchases, creating a sustainable, efficient, and equitable food supply chain.


## **Project Overview**
Feedbag Agrihub focuses on two primary areas:

**Soil-less Farming**: Utilizes innovative farming techniques to enhance food production without traditional soil-based methods, promoting sustainability and efficiency in agriculture.

**Blockchain-Powered Network**: Establishes a transparent and rewarding ecosystem for stakeholders in the food supply chain. Though this submission does not yet include Algorand smart contracts, the frontend is designed for future blockchain integration.


## **Technical Elements & Technologies Used**
This project leverages a modern tech stack to ensure scalability, performance, and future compatibility with blockchain integration.

**Frontend Framework**: Built with Next.js for server-side rendering and optimized performance.

**Blockchain-Ready Architecture**: Although Algorand functionality is not yet implemented, the structure is prepared for blockchain and dApp integration.

**Styling**: Uses Tailwind CSS for efficient and responsive styling.

## **Running the Code**
Follow the steps below to set up and run the Feedbag Agrihub frontend on your local machine.

Prerequisites
Node.js (recommended version 18 or later)
Git


## **Installation**

1. Clone the project repository to your local machine:

```bash 
git clone https://github.com/yourusername/Feedbag.git
```
3. **Navigate to the Project Directory**
Change to the project’s root directory:

```bash 
cd Feedbag
```


3. **Install Dependencies**
Install the necessary packages:

```bash
npm install
```



## **Key Achievements**
This version of Feedbag Agrihub includes the following key achievements:

**User Interface**: Developed a responsive and user-friendly interface, allowing users to interact seamlessly with the platform.

**Blockchain-Ready Architecture**: Prepared for future Algorand integration, ensuring smooth addition of blockchain functionalities.

**Responsive Design**: Implemented a responsive layout with Tailwind CSS, making the application accessible across devices.

**Modular Codebase**: The code is structured for scalability, allowing for easy addition of backend logic and smart contract features.


For a closer look at the UI components, see the files in the `components` folder.

## **Building on Algorand: Our Roadmap to Blockchain Integration**

While this phase focuses on the frontend, we have mapped out the steps needed to integrate Algorand for a decentralized, transparent supply chain:

**Step 1: Set Up Algorand Environment**
Create an Algorand Wallet: We recommend using [Pera Wallet](https://perawallet.app/)
 or [Algorand Wallet](https://developer.algorand.org/tutorials/adding-transaction-capabilities-dapp-using-algosigner/)  for development.

Acquire Test ALGO Tokens: Access the  [Algorand TestNet Dispenser](https://bank.testnet.algorand.network/) for tokens to use in testing.

Install Algorand SDK: The Algorand JavaScript SDK will handle blockchain interactions.

```bash
npm install algosdk

```

### Step 2: Smart Contract Development
We plan to leverage Algorand’s smart contract capabilities for verifying food sources and incentivizing user engagement.

1. **Smart Contract Design**: Algorand’s ASC1 (Algorand Smart Contract 1) will facilitate transparency in the supply chain, tracking key details like origin, batch numbers, and dates.

2. **Reward System**: By implementing token rewards, we can incentivize contributions from various stakeholders (farmers, aggregators, consumers).


### Step 3: Sample Transaction Code
Our blockchain architecture will include transaction functions for interacting with the Algorand network. Here’s an example setup for a basic transaction:


```javascript
const algosdk = require('algosdk');
const algodClient = new algosdk.Algodv2('YourAPIKey', 'https://testnet-algorand.api.purestake.io/ps2', '');

// Sample transaction
async function sendTransaction() {
    const params = await algodClient.getTransactionParams().do();
    const txn = algosdk.makePaymentTxnWithSuggestedParams(
        senderAddress, receiverAddress, amount, undefined, undefined, params
    );
}

```
This function lays the groundwork for our future transaction processes. Once integrated, users will be able to interact with smart contracts directly through the frontend.


### Step 4: UI-Wallet Integration
To complete the blockchain experience, we’ll incorporate wallet connections on the frontend. This enables users to authenticate, sign transactions, and interact seamlessly with Algorand’s blockchain.

```bash
npm install @perawallet/connect

```

## **Payment Integration on CAF Marketplace with Algorand**
Our vision for the Feedbag Agrihub CAF Marketplace includes using Algorand's blockchain to handle fast, secure, and low-cost payments. This setup will allow farmers, aggregators, and consumers to conduct transactions in a decentralized and efficient manner.

## Why Algorand for Payments?
Algorand’s blockchain provides several key advantages for our CAF Marketplace:

 **Speed**: Algorand processes transactions in seconds, making it ideal for a real-time marketplace.
 
 **Low Fees**: Algorand’s transaction fees are minimal, keeping costs low for all users.
 
 **Scalability**: Algorand’s network can handle a large number of transactions, making it suitable for scaling our platform as the user base grows.

### Sample Code: Payment with `algosdk`
Below is a sample code snippet demonstrating how a payment transaction would work using `algosdk` on the Algorand blockchain
```javascript
const algosdk = require('algosdk');
const algodClient = new algosdk.Algodv2('YourAPIKey', 'https://testnet-algorand.api.purestake.io/ps2', '');

async function sendTransaction(senderAddress, receiverAddress, amount) {
    try {    
        const params = await algodClient.getTransactionParams().do();
        const txn = algosdk.makePaymentTxnWithSuggestedParams(
            senderAddress, 
            receiverAddress, 
            amount, 
            undefined, 
            undefined, 
            params
        );
        const signedTxn = txn.signTxn(senderPrivateKey);
        const txId = await algodClient.sendRawTransaction(signedTxn).do();
        console.log("Transaction ID:", txId);
        await algosdk.waitForConfirmation(algodClient, txId, 4);
        console.log("Transaction confirmed in round", txId);
    } catch (error) {
        console.error("Failed to send transaction:", error);
    }
}

```

## **Next Steps for CAF Payment Integration**
**User Wallet Integration**: We’ll incorporate wallet options (e.g., Pera Wallet or Algosigner Wallet) for seamless user transactions on the marketplace.

**Payment Workflow**: Implement payment flows such as escrow and refunds, ensuring smooth transactions between buyers and sellers.

**Smart Contract Integration**: Smart contracts will be added to automate transactions, add conditions, and enhance security for all parties involved.


This roadmap ensures that the CAF Marketplace will be ready for a secure, blockchain-backed payment system in the future.


## **Future Enhancements**
Our vision for Feedbag Agrihub goes beyond the current phase. Here’s what’s next:

 **Deploy to MainNet**: After successful testing on TestNet, we’ll deploy smart contracts on Algorand’s MainNet for real-world use.
 
 **Enhanced Smart Contracts**: Using Algorand’s stateful contracts, we’ll implement advanced transactions to handle multi-step actions.

 **Expanded Reward System**: Future updates may introduce loyalty points, tokenomics, or even staking mechanisms to further engage users.
