// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.9;

contract Transactions {
    uint256 transactionCounter = 0;

    event trasfer(
        address from,
        address receiver,
        uint amount,
        uint256 transactionId,
        uint256 timestamp,
        string message,
        string keyword
    );

    struct TrasferStruct {
        address from;
        address receiver;
        uint amount;
        uint256 transactionId;
        uint256 timestamp;
        string message;
        string keyword;
    }

    TrasferStruct[] transactions;

    function addToBlockchain(
        address _receiver,
        uint _amount,
        string memory _message,
        string memory _keyword
    ) public {
        transactions.push(
            TrasferStruct(
                msg.sender,
                _receiver,
                _amount,
                transactionCounter,
                block.timestamp,
                _message,
                _keyword
            )
        );
        transactionCounter++;
        emit trasfer(
            msg.sender,
            _receiver,
            _amount,
            transactionCounter,
            block.timestamp,
            _message,
            _keyword
        );
    }

    function getTransaction(uint256 transactionId)
        public
        view
        returns (TrasferStruct memory)
    {
        return transactions[transactionId];
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }

    function getTransactions() public view returns (TrasferStruct[] memory) {
        return transactions;
    }
}
