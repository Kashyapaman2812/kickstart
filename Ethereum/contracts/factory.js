import web3 from "../web3";
import CampaignFactory from '../build/CapmaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x65811FA685FF8B0C0ca3467007E7a9dF9A3fe7fE'
);

export default instance;