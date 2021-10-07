import React,{ Component} from 'react';
import { Button, Form, Input, Label, Message } from 'semantic-ui-react';
import web3 from '../Ethereum/web3';
//import campaign from "../Ethereum/build/Campaign.json";
import Campaign from '../Ethereum/contracts/campaign';
import {Router} from '../routes';

class contributeForm extends Component{
    state = {
        value : '',
        errorMessage : '',
        loading : false
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        this.setState({ loading : true , errorMessage : ''})

        try{
        const accounts = await web3.eth.getAccounts();

        await campaign.methods.contribute()
        .send({
                from : accounts[0],
                value : web3.utils.toWei(this.state.value,'ether')
        });

        Router.replaceRoute(`/campaign/${this.props.address}`);
       } catch(err){
               this.setState({ errorMessage : err.message})
       }

       this.setState({loading : false , value : ''})
   }


    render(){
        return(
            <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
                <Form.Field>
                    <Label>
                        Amount to Contribute
                    </Label>
                    <Input
                    value = {this.state.value}
                    onChange={event => this.setState({value : event.target.value})}
                    label = "Ether"
                    labelPosition = "right" />
                </Form.Field>
                <Message error>
                <Message.Header>Oops</Message.Header>
                <p>{this.state.errorMessage}</p>
                </Message>
                <Button
                loading = {this.state.loading}
                primary>Contribute</Button>
            </Form>

        );

    }
}

export default contributeForm;