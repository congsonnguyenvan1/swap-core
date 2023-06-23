import * as hre from "hardhat";
import * as fs from "fs";
import { Signer } from "ethers";
const ethers = hre.ethers;

import { SunSwapFactory__factory, SunSwapFactory } from "../typechain-types";

async function main() {
    //Loading accounts
    const accounts: Signer[] = await ethers.getSigners();
    const admin = await accounts[0].getAddress();
    //Loading contracts' factory

    const Factory: SunSwapFactory__factory = await ethers.getContractFactory(
        "SunSwapFactory",
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

    const factory: SunSwapFactory = await Factory.deploy(
        "0xf17fa21738EE11e7a41BBE63129fA4e3C89f8B5A",
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
