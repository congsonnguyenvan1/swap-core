pragma solidity =0.5.16;

import "../SunSwapERC20.sol";

contract ERC20 is SunSwapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
