import React from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/SignUp';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { errors: [] };
    }

    onSubmitClick({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        });
    }

    componentWillUpdate(nextProps) {
        if (!this.props.data.user && nextProps.data.user) {
            hashHistory.push('/dashboard');
        }
    }


    render() {
        return (
            <div>
                <h3>SignUp Page</h3>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.onSubmitClick.bind(this)} />
            </div>
        );
    }
}

export default graphql(query)(graphql(mutation)(SignUpForm));