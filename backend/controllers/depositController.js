const { ethers } = require("ethers");
const config = require("../config/config");

exports.depositFunds = async (req, res) => {
    try {
        const { userAddress, amount } = req.body;
        if (!userAddress || !amount) return res.status(400).json({ error: "Missing parameters" });

        const provider = new ethers.JsonRpcProvider(config.rpcUrl);
        const signer = new ethers.Wallet(config.privateKey, provider);
        const contract = new ethers.Contract(config.contractAddress, config.abi, signer);

        const tx = await contract.deposit({ value: ethers.parseEther(amount.toString()) });
        await tx.wait();

        res.json({ message: "Deposit successful", transaction: tx.hash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
