import * as hre from "hardhat";
import * as fs from "fs";
import { Signer } from "ethers";
const ethers = hre.ethers;

import {
    UniswapV2Factory__factory,
    UniswapV2Factory,
} from "../typechain-types";

async function main() {
    //Loading accounts
    const accounts: Signer[] = await ethers.getSigners();
    const admin = await accounts[0].getAddress();
    //Loading contracts' factory

    const Factory: UniswapV2Factory__factory = await ethers.getContractFactory(
        "UniswapV2Factory",
    );

    // Deploy contracts
    console.log(
        "==================================================================",
    );
    console.log("DEPLOY CONTRACTS");
    console.log(
        "==================================================================",
    );

    console.log("ACCOUNT: " + admin);

    const factory: UniswapV2Factory = await Factory.deploy(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    );

    console.log("Factory deployed at: ", factory.address);

    const contractAddress = {
        factory: factory.address,
    };

    fs.writeFileSync("contracts.json", JSON.stringify(contractAddress));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
