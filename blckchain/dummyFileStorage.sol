// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FileManagement {
    struct File {
        uint id;
        string name;
        string category;
        string hash;
        address uploader;
        uint timestamp;
        bool approved;
        uint version;
    }

    File[] public files;
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    event FileUploaded(uint id, string name, string category, address uploader);
    event FileApproved(uint id);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    function uploadFile(string memory name, string memory category, string memory hash) public {
        uint id = files.length;
        files.push(File(id, name, category, hash, msg.sender, block.timestamp, false, 1));
        emit FileUploaded(id, name, category, msg.sender);
    }

    function approveFile(uint id) public onlyAdmin {
        require(id < files.length, "Invalid file ID");
        files[id].approved = true;
        emit FileApproved(id);
    }

    function filesCount() public view returns (uint) {
        return files.length;
    }

    function getFile(uint id) public view returns (uint, string memory, string memory, string memory, address, uint, bool, uint) {
        require(id < files.length, "Invalid file ID");
        File memory file = files[id];
        return (file.id, file.name, file.category, file.hash, file.uploader, file.timestamp, file.approved, file.version);
    }
}
