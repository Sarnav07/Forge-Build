/*Layout of Contract: version , imports , errors , interfaces, libraries, contracts
Type declarations ,State variables , Events , Modifiers ,Functions

Layout of Functions: constructor , receive function (if exists) ,fallback function (if exists)
external , public ,internal ,private ,view & pure functions */

//SPDX-License-Identifier:MIT
pragma solidity ^0.8.30;

contract SimpleStorage {
    uint256 s_favoriteNumber;

    mapping(string => uint256) public nameToFavoriteNumber;

    struct Person {
        uint256 FavoriteNuber;
        string Name;
    }

    Person[] public listOfPeaple;

    function set(uint256 _favoriteNumber) public {
        s_favoriteNumber = _favoriteNumber;
    }

    function addPerson(uint256 _favoriteNumber, string memory _name) public {
        listOfPeaple.push(Person(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }

    function get() public view returns (uint256) {
        return s_favoriteNumber;
    }
}

// can add event of addPerson
