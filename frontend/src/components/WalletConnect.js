import React, { useState } from "react";
import { ethers } from "ethers";

const WalletConnect = ({ setAddress }) => {
    const [connected, setConnected] = useState(false);

    const connectWallet = async () => {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            setAddress(await signer.getAddress());
            setConnected(true);
        } else {
            alert("Please install MetaMask!");
        }
    };

    return (
        <button onClick={connectWallet}>
            {connected ? "Connected" : "Connect Wallet"}
        </button>
    );
};

export default WalletConnect;
