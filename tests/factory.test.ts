import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import * as hre from "hardhat";
import { Signer } from "ethers";
const ethers = hre.ethers;

import { SunSwapFactory__factory, SunSwapFactory } from "../typechain-types";

describe("Greater", () => {
    let user: SignerWithAddress;
    let accounts: Signer[];
    let admin;
    let factory;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        admin = await accounts[0].getAddress();

        const Factory: SunSwapFactory__factory =
            await ethers.getContractFactory("SunSwapFactory");

        factory = Factory.attach("0xddAbc0B1930a1Ec982CDF48E78e722D014F1B311");
    });

    describe("Deployment", () => {
        it("Should deploy successfully", async () => {
            expect(await greeter.greet()).to.equal("Hello");
        });
    });

    describe("Set greeting", () => {
        it("Should set successfully", async () => {
            await greeter.connect(user).setGreeting("New hello");
            expect(await greeter.greet()).to.equal("New hello");
        });
    });
});
