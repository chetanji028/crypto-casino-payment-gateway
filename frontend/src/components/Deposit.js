import React, { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "0xYourContractAddress"; // Replace with deployed address
const abi = [
    "function deposit() public payable",
    "function getBalance() public view returns (uint256)"
];

const Deposit = ({ userAddress }) => {
    const [amount, setAmount] = useState("");

    const handleDeposit = async () => {
        if (!window.ethereum) return alert("Install MetaMask!");
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        const tx = await contract.deposit({ value: ethers.parseEther(amount) });
        await tx.wait();
        alert("Deposit successful!");
    };

    return (
        <div>
            <input type="number" placeholder="Amount in ETH" onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleDeposit}>Deposit</button>
        </div>
    );
};

export default Deposit;
