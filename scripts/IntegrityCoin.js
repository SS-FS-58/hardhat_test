// scripts/BadgeToken.js

const hre = require("hardhat");

async function main() {

  const IntegrityCoin = await hre.ethers.getContractFactory("IntegrityCoin");
  console.log('Deploying IntegrityCoin ERC721 token...');
  const token = await IntegrityCoin.deploy();

  await token.deployed();
  console.log("IntegrityCoin deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });