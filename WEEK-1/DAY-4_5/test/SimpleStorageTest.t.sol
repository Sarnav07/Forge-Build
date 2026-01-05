//SPDX-License-Identifier:MIT
pragma solidity ^0.8.30;

import {DeploySimpleStorage} from "../script/DeploySimpleStorage.s.sol";
import {SimpleStorage} from "../src/SimpleStorage.sol";
import {Test} from "forge-std/Test.sol";

contract SimpleStorageTest is Test {
    SimpleStorage public simpleStorage;

    function setUp() external {
        DeploySimpleStorage deployer = new DeploySimpleStorage();
        simpleStorage = deployer.run();
    }

    function testStoreNumber() public {
        uint256 favoriteNumber = 7;

        simpleStorage.set(favoriteNumber);
        assertEq(favoriteNumber, simpleStorage.get());
    }

    function testCreatePeron() public {
        string memory name = "Sarnav";
        uint256 favoriteNumber = 7;

        simpleStorage.addPerson(favoriteNumber, name);

        uint256 getNumber = simpleStorage.nameToFavoriteNumber(name);
        assertEq(getNumber, favoriteNumber);
    }

    function testMultiplePeaple() public {
        simpleStorage.addPerson(7, "Sarnav");
        simpleStorage.addPerson(18, "Kansal");

        assertEq(simpleStorage.nameToFavoriteNumber("Sarnav"), 7);
        assertEq(simpleStorage.nameToFavoriteNumber("Kansal"), 18);
    }
}
