import React,{ Component } from 'react';
import Layout from '../../components/layout';
import {Input,Button, Form, Message } from "semantic-ui-react";
import factory from '../../Ethereum/contracts/factory';
import web3 from '../../Ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {

    state = {
        minimumContribution : '' ,
        errorMessage : '',
        loading : false
    };

    onSubmit = async (event) => {
         event.preventDefault();

         this.setState({ loading : true , errorMessage : ''})

         try{
         const accounts = await web3.eth.getAccounts();

         await factory.methods.createCampaign(this.state.minimumContribution)
         .send({
                 from : accounts[0]
         });

         Router.pushRoute('/');
        } catch(err){
                this.setState({ errorMessage : err.message})
        }

        this.setState({loading : false})
    }

    
    render(){
        console.log( this.state.errorMessage);
    return (
        <Layout>
            <div>
            <link
    async
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
  />
            <h3>Create a Campaign</h3>
            <Form onSubmit = {this.onSubmit}  error = {!!this.state.errorMessage}>
                <Form.Field>
                    Minimum Contribution
                    <Input focus
                     placeholder='100'
                     label = 'Wei' 
                     labelPosition = 'right'
                     value = {this.state.minimumContribution}
                     onChange = {event => {
                         this.setState({minimumContribution : event.target.value})
                     }
                    }
                     />
                </Form.Field>
            
            <Message error>
                <Message.Header>Oops</Message.Header>
                <p>{this.state.errorMessage}</p>
                </Message>
            <Button
                loading = {this.state.loading}
                style = {{ marginTop : '15px'}}
                content = "Create Campaign"
                icon = "add"
                primary
                />
            </Form>    
            </div>
       </Layout>
       

    );
    }
    
}


export default CampaignNew;
