const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../Ethereum/build/CapmaignFactory.json");
const compiledCampaign = require("../Ethereum/build/Campaign.json");

let factory;
let campaign;
let campaignAddress;
let accounts;

beforeEach( async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data : compiledFactory.bytecode})
    .send({ from :accounts[0],gas : '1000000'});

    await factory.methods.createCampaign('100').send(
        {
            from : accounts[0],
            gas : '1000000'
        }
    );

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
    });

describe('campaigns',() => {
    it('deploys a factory and a campaign', () =>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0],manager);
    });

    it('allows to become a contributor', async () => {
        await campaign.methods.contribute().send({
            value : '200',
            from : accounts[1]
        })
        const isContribbutor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContribbutor);
    });

    it('requires a minimum contribution', async () => {
        try{
        await campaign.methods.contribute().send({
            value : '50',
            from : accounts[2]
        })
        assert(false);
           } catch (err){
                assert(err);
            }
        });

    it('allows a manager to make a request', async () => {
        await campaign.methods.crerateRequest('Buy Batteries','50', accounts[2]).send({
            from : accounts[0],
            gas : '1000000'
        });
        const request = await campaign.methods.requests(0).call();
        assert.equal('Buy Batteries', request.description);
    }); 

    it('processes a request', async () => {
        await campaign.methods.contribute().send({
            from : accounts[2],
            value : web3.utils.toWei('10','ether')  
        });

        await campaign.methods.crerateRequest('A', web3.utils.toWei('5','ether'), accounts[4]).send({
            from : accounts[0],
            gas : '1000000'
        });

        await campaign.methods.approveRequest(0).send({
            from : accounts[2],
            gas : '1000000'
        });

        await campaign.methods.finaliseRequest(0).send({
            from : accounts[0],
            gas : '1000000'
        });

        let balance = await web3.eth.getBalance(accounts[4]);
        balance = web3.utils.fromWei(balance,'ether');
        balance = parseFloat(balance);
        console.log(balance);
        assert(balance > 104);

    });
});