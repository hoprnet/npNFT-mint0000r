// SPDX-License-Identifier: MIT

pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract npNFT is ERC721, Ownable {

    string baseURI = "https://non-private-nft.hoprnet.org/api/ethcc-2022-nft-metadata?id=";

    constructor() ERC721("Non-private NFT", "npNFT") {
    }

    function updateBaseURI(string calldata  newBaseURI) onlyOwner public {
        baseURI = newBaseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function mint(address to, uint256 tokenId) onlyOwner public {
        _mint(to, tokenId);
    }

    function batchMint(address[] calldata recipients, uint256[] calldata tokenIds) onlyOwner public {
        require(recipients.length == tokenIds.length, "recipients and tokenIds arrays must have same number of entries");
        for (uint256 c = 0; c < recipients.length; c++) {
            _mint(recipients[c], tokenIds[c]);
        }
    }
}
