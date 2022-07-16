// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IMintableNFT {
	function mint(address to, uint256 tokenId) external;

	function transferOwnership(address newOwner) external;
}

contract openMinter is Ownable {
	IMintableNFT public myNFT;
	uint256 public nextNftId;

	constructor(IMintableNFT addressNFT, uint256 _nextNftId) {
		myNFT = addressNFT;
		nextNftId = _nextNftId;
	}

	function transferNftOwnership(address _newOwner) onlyOwner public {
		myNFT.transferOwnership(_newOwner);
	}

	function mintNft() public {
		mintNftFor(msg.sender);
	}

	function mintNftFor(address nftRecipient) public {
		myNFT.mint(nftRecipient, nextNftId);
		nextNftId++;
	}
}

