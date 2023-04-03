const hre = require("hardhat");

async function main() {

  const MyCollection = await hre.ethers.getContractFactory("MyCollection");
  const myCollection = await MyCollection.deploy('Chihuahuax', 'CHX', 'https://ipfs.io/ipfs/QmNQ8c2M3FjkGHrK1V25cbzEEm3rBA6xutZYwb9TwBg3gG/');

  await myCollection.deployed();

  console.log(
    `Contract had been deployed to ${myCollection.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
