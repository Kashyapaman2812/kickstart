//import { loadComponents } from "next/dist/server/load-components";
import React,{ Component } from "react";
import Layout from "../../components/layout";
import Campaign from "../../Ethereum/contracts/campaign"
//import web3 from "../../Ethereum/web3";
//import Campaign from "../../Ethereum/build/Campaign.json"
import { Button, Card, Grid } from "semantic-ui-react";
import web3 from "../../Ethereum/web3";
import ContributeForm from "../../components/contributeForm"
import {Link} from '../../routes';

class CampaignShow extends Component {

   static async getInitialProps(props) {
     // console.log(props.query.address);//this line of code is being used to access address of the campaign from the routes directory

      const campaign = Campaign(props.query.address);

   // //   console.log( await campaign.methods.getSummary().call());

   // const instance = new web3.eth.Contract(
   //    JSON.parse(Campaign.interface),
   //    props.query.address
   // )

   const summary = await campaign.methods.getSummary().call();

      return{
         address : props.query.address,
         minimumContribution : summary[0],
         balance : summary[1],
        requests : summary[2],
        approversCount : summary[3],
        manager : summary[4]
      }
   }

   renderCards(){
      const {
         balance,
         requests,
         approversCount,
         manager,
         minimumContribution
      } = this.props;

      const items = [
         {
            header: manager,
            meta: 'Address of Manager',
            description : 'The manager created this campaign and can create requests',
            style : { overflowWrap :  'break-word'}
         },
         {
            header: minimumContribution,
            meta: 'Minimum Contribution( Wei )',
            description : 'You must contribute at least this much to the campaign',
            style : { overflowWrap :  'break-word'}
         },
         {
            header: requests,
            meta: 'Number of requests',
            description : 'A request tries to withdraw money from the contract',
            style : { overflowWrap :  'break-word'}
         },
         {
            header: approversCount,
            meta: 'Number of Approvers',
            description : 'Nuumber of people who have already donated to the campaign',
            style : { overflowWrap :  'break-word'}
         } ,
         {
            header: web3.utils.fromWei(balance,'ether'),
            meta: 'Campaign Balance(Ether)',
            description : 'Amount left in campaign to spent',
            style : { overflowWrap :  'break-word'}
         }
      ];

      return <Card.Group items = {items} />;
   }

    render(){
       return(
                <Layout>
                       <link
                             async
                            rel="stylesheet"
                            href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                         />
                   <h3>Campaign Show</h3>
                   <Grid>
                      <Grid.Row>
                      <Grid.Column width = {10}>
                         {this.renderCards()}
                      </Grid.Column>
                      <Grid.Column width = {4}>
                        <ContributeForm address = {this.props.address} />
                      </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                         <Grid.Column>
                         <Link route = {`/campaign/${this.props.address}/requests`}>
                         <a>
                            <Button 
                            primary>
                               View Requests
                            </Button>
                         </a>
                         </Link>
                         </Grid.Column>
                      </Grid.Row>
                    </Grid>
                </Layout>
             )
    }
}

export default CampaignShow;