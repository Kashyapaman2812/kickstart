pragma solidity ^0.4.17;

contract CapmaignFactory{
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address newCampagin = new Campaign(minimum , msg.sender);
        deployedCampaigns.push(newCampagin);
    }
    
    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns;
    }
}

contract Campaign{
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    //these variables are in storage
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    //arguments to function call is in memory lost once the func call ends
    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function crerateRequest(string description,uint value,address recipient) public restricted{
        //the Request used after the = is not in storage as we can see so it is obvious it has to be in memory. so we initialise it using 'memory' keyword.
        Request memory newRequest = Request({
            description : description,
            value : value,
            recipient : recipient,
            complete : false,
            approvalCount : 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finaliseRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount/2));
        require(!request.complete);
        
        
        request.recipient.transfer(request.value);
        request.complete = true;
        
        
    }

    function getSummary() public view returns (
        uint,uint,uint,uint,address
    ) {
    return(
        minimumContribution,
        this.balance,
        requests.length,
        approversCount,
        manager
    );

    }

    function getRequestCount() public view returns(uint) {
        return requests.length;
    }
}