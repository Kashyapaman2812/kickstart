import React, { Component} from 'react';
import {  Button, Table } from 'semantic-ui-react';
import web3 from '../Ethereum/web3';
import Campaign from '../Ethereum/contracts/campaign'

class RequestRow extends Component {

    onApprove = async () => {

        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();

        await campaign.methods.approveRequest(this.props.id-1).send({
            from : accounts[0]
        })
    }

    onFinalize = async () => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        

        await campaign.methods.finaliseRequest(this.props.id-1).send({
            from : accounts[0]
        })
    }

    render(){

        const { Row, Cell} = Table;
        const { id,request,address,approversCount} = this.props;
        const ReadyToFinalize = request.approvalCount >= approversCount/2;

        return( 
                    <Row disabled = {request.complete} positive = {ReadyToFinalize && !request.complete}>
                        <Cell>
                            {id}
                        </Cell>
                        <Cell>
                            {request.description}
                        </Cell>
                        <Cell>
                            {web3.utils.fromWei(request.value,'ether')}
                        </Cell>
                        <Cell>
                            {address}
                        </Cell>
                        <Cell>
                            {request.approvalCount}/{approversCount}
                        </Cell>
                        <Cell>
                            { request.complete ? (<h5>Approved</h5>) : (
                            <Button color = 'green' basic onClick = {this.onApprove}>Approve</Button>
                            )}
                        </Cell>
                        <Cell>
                            { request.complete ? (<h5>Finalized</h5>) : (
                            <Button color = 'teal' basic onClick = {this.onFinalize}>Finalize</Button>
                            )}  
                        </Cell>
                    </Row>
              )
    }
}

export default RequestRow;