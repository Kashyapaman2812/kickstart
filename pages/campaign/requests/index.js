import { Link } from '../../../routes';
import React,{ Component} from 'react';
import { Button, Tab, Table } from 'semantic-ui-react';
import Layout from '../../../components/layout';
import Campaign from '../../../Ethereum/contracts/campaign';
import RequestRow from '../../../components/requestRow';

class ViewRequests extends Component{

    static async getInitialProps(props){
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element,index) => {
                return campaign.methods.requests(index).call()
            })
        );

        return { address , requests , requestCount , approversCount };
    }

    renderRequest(){
        return this.props.requests.map((request,index) => {
            return(
                <RequestRow
                    key = {index}
                    id =  {index+1}
                    request = {request}
                    address = {this.props.address}
                    approversCount = {this.props.approversCount}
                />
            )
        })
    }
    render(){

        const{ Header, Row, HeaderCell ,Body } = Table;
        return(
            <Layout>
                 <link
                             async
                            rel="stylesheet"
                            href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                         />
                <h3>Requests</h3>
                <Link route = {`/campaign/${this.props.address}/requests/new`}>
                <a>
                    <Button primary floated='right' style = {{marginBottom : 10}}>Add Requests</Button>
                </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>
                                ID
                            </HeaderCell>
                            <HeaderCell>
                                Description
                            </HeaderCell>
                            <HeaderCell>
                                Amount
                            </HeaderCell>
                            <HeaderCell>
                                Recipient
                            </HeaderCell>
                            <HeaderCell>
                                ApprovalCount
                            </HeaderCell>
                            <HeaderCell>
                                Approve
                            </HeaderCell>
                            <HeaderCell>
                                Finalize
                            </HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRequest()}
                    </Body>
                </Table>
                <h5>Found {this.props.requestCount} Requests</h5>
            </Layout>
            
        )
    }
}

export default ViewRequests;