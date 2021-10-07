const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CapmaignFactory.json');

const provider = new HDWalletProvider(
    'lumber ill danger ride rare brisk trick clarify front rely vacant fan',
    'https://rinkeby.infura.io/v3/39729526ed3846adbe840d6d87dd13c3'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Addres of account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
     .deploy({ data : compiledFactory.bytecode})
     .send({gas : '1000000' , gasPrice : '5000000000', from : accounts[0]});

     console.log('Contract deployed at', result.options.address);
}
deploy();