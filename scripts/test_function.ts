import * as hre from "hardhat";
import * as fs from "fs";
import { Signer } from "ethers";
const ethers = hre.ethers;

import { SunSwapPair__factory } from "../typechain-types";

async function main() {
    //Loading accounts
    const accounts: Signer[] = await ethers.getSigners();
    const admin = await accounts[0].getAddress();
    //Loading contracts' factory

    // const Factory: SunSwapFactory__factory = await ethers.getContractFactory(
    //     "SunSwapFactory",
    // );

    // const factory = await Factory.attach("0xe4582f724aE4cAD64Be2AAE3Db0488a758ec8654")

    const Pair: SunSwapPair__factory = await ethers.getContractFactory(
        "SunSwapPair",
    );

    const pair = Pair.attach("0xC27E499C5F25eEe64FC28771377216C39e7662da");

    console.log(await pair.getReserves());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
