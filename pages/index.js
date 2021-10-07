//import { defaultConfig } from 'next/dist/server/config-shared';
import React,{ Component} from 'react';
import { Card , Button } from 'semantic-ui-react';
import factory from "../Ethereum/contracts/factory";
import Layout from "../components/layout";
import { Link } from "../routes";

class CampaignIndex extends Component{

    static async getInitialProps() {
        const campaign = await factory.methods.getDeployedCampaigns().call();
        return {campaign};

    }
    //this doesn't get executed on Next server
    // async componentDidMount() {
        
    //     console.log(campaign);
    // }


    renderCampaigns(){
        const items = this.props.campaign.map( address => {
           return{ 
            header : address,
            description :( 
            <Link route = {`/campaign/${address}`}>
            <a>View Campaign</a>
            </Link> ),
            fluid : true
                };
        });

        return <Card.Group items = {items} />
    }
    render(){
        return (
            //all the JSX inside <layout> is being passed to the layout file in component as children property to props argument
            <Layout>
            <div>
                 <link
    async
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
  />
                
                <h2>Open Campaign</h2>
                <Link route = '/campaign/new'>
                <a>
                <Button
                floated = 'right'
                content = "Create Campaign"
                icon = "add"
                primary
                />
                </a>
                </Link>
                {this.renderCampaigns()}
                </div>
                </Layout>
        );
    }

}
export default CampaignIndex;