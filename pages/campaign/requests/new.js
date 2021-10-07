import React,{ Component} from "react";
import { Button, Form, Input ,Message } from "semantic-ui-react";
import Campaign from '../../../Ethereum/contracts/campaign';
import web3 from '../../../Ethereum/web3';
import { Link , Router} from '../../../routes';
import Layout from '../../../components/layout';
class NewRequest extends Component {

    state = {
        description : '',
        value : '',
        recipient : '',
        errorMessage : '',
        loading : false
    }

    static async getInitialProps(props){
        const { address} = props.query;

        return { address};
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        this.setState({ loading : true , errorMessage : ''})

        try{
        const accounts = await web3.eth.getAccounts();

        await campaign.methods.crerateRequest(this.state.description,web3.utils.toWei(this.state.value, 'ether'),this.state.recipient)
        .send({
                from : accounts[0],
               // value : web3.utils.toWei(this.state.value,'ether')
        });

        Router.pushRoute(`/campaign/${this.props.address}/requests`);
       } catch(err){
               this.setState({ errorMessage : err.message})
       }

       this.setState({loading : false ,description : '', value : '' , recipient : ''});
   }


    render(){
        return(
            <Layout>
                 <link
                             async
                            rel="stylesheet"
                            href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                         />
                         <Link route = {`/campaign/${this.props.address}/requests`}>
                            <a>Back</a>
                         </Link>
                         <h3> Create a Request</h3>
                <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
                    <Form.Field>
                        <label>
                            Description
                        </label>
                        <Input 
                            value = {this.state.description}
                            onChange = {event => { this.setState({description : event.target.value})}}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>
                            Value
                        </label>
                        <Input 
                            value = {this.state.value}
                            onChange = {event => { this.setState({ value : event.target.value})}}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>
                            Recipient
                        </label>
                        <Input 
                            value = {this.state.recipient}
                            onChange = {event => { this.setState({recipient : event.target.value})}}
                        />
                    </Form.Field>
                        <Message error>
                    <Message.Header>Oops</Message.Header>
                    <p>{this.state.errorMessage}</p>
                    </Message>
                    <Button primary loading = {this.state.loading}>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default NewRequest;