pragma solidity ^0.5.2;

contract Repository {

    struct TeamMember {
        address wallet;
        uint16 percent;
    }

    TeamMember[] team;
}