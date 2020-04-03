import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import Brand from '../Atoms/Brand';


const MUTATION = gql`
    mutation($username: String!, $password: String!){
        tokenAuth(username: $username, password: $password){
            token
        }
    }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onCompleted = this.onCompleted.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onCompleted(data) {
    localStorage.setItem('token', data.tokenAuth.token);
    this.props.history.push('/organization');
  }

  render() {
    return (
      <Mutation mutation={MUTATION} onCompleted={this.onCompleted}>
        {(authUser, { data, loading, error }) => (

          <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v3 kt-login--signin">
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style={{ backgroundImage: 'url(./assets/media/bg-3.jpg)' }}>
              <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
                <div className="kt-login__container justify-content-md-center">
                  <Brand />
                  <br/>
                  <div className="kt-login__signin">
                    <div className="kt-login__head">
                    </div>
                    <form className="kt-form" onSubmit={(e) => { e.preventDefault(); authUser({ variables: this.state }); }}>
                      <div className="input-group">
                        <input className="form-control" type="text" placeholder="Email" name="username" autoComplete="off" onChange={this.onChange} />
                      </div>
                      <div className="input-group">
                        <input className="form-control" type="password" placeholder="Password" name="password" onChange={this.onChange} />
                      </div>
                      <div className="row kt-login__extra">
                        <div className="col">
                          <Link to="/signup" className="-login__link">Registrarte</Link>
                        </div>
                        <div className="col kt-align-right">
                          <Link className="kt-login__link">Forget Password ?</Link>
                        </div>
                      </div>
                      <div className="kt-login__actions">
                        {loading
                          ? <button className="btn btn-success btn-wide kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light" disabled>Iniciar</button>
                          : <button className="btn btn-success btn-wide">Iniciar</button>}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )}
      </Mutation>
    );
  }
}

export default Login;
