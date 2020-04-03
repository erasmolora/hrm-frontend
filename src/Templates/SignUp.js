import React from 'react';
import { Mutation, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import Brand from '../Atoms/Brand';


const MUTATION = gql`
    mutation(
        $firstName: String!,
        $lastName: String!,
        $email: String!,
        $password: String!
    ){ createUser(
        email: $email,
        firstName: $firstName,
        lastName: $lastName,
        password: $password) { ok, user{ id }, errorMessage } 
      }`;

const EMAIL_QUERY = gql`
  query
    user($email: String!){
      user(email: $email) {
        email
      } 
    }`;

function EmailInput({ emailValue }) {
  const { loading, error } = useQuery(EMAIL_QUERY, { variables: { email: emailValue } });

  if (!emailValue) return null;
  if (loading) return null; 
  if (error) return null;

  return (
    <span className="">Este correo ya esta registrado</span>
  )
}


export default class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };


    this.onChange = this.onChange.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onCompleted = this.onCompleted.bind(this);
  };

  onCompleted(data){
    if (data.createUser.ok){
      localStorage.setItem('user', data.createUser.user.id);
      this.props.history.push('/');
    }
  }

  onChangeEmail(event) {
    console.log(event.target.value);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    return (
      <Mutation mutation={MUTATION} onCompleted={ this.onCompleted } >
        {(createUser, { data, loading, error }) => (
          <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v3 kt-login--signin">
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style={{ backgroundImage: 'url(./assets/media/bg-3.jpg)' }}>
              <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
                <div className="kt-login__container">
                  <Brand />
                  <div className="kt-login__signin">
                    <div className="kt-login__head">
                      <h3 className="kt-login__title">Datos para crear tu cuenta</h3>
                    </div>

                    <form className="kt-form" onSubmit={e => { e.preventDefault(); createUser({ variables: this.state}); }}>
                      <div className="input-group">
                        <input className="form-control" type="text" placeholder="Nombre" name="firstName" onChange={this.onChange} />
                      </div>
                      <div className="input-group">
                        <input className="form-control" type="text" placeholder="Apellido" name="lastName" onChange={this.onChange} />
                      </div>
                      <div className="input-group">
                        <input className="form-control" type="text" placeholder="Correo Electronico" name="email" onChange={this.onChange} />
                      </div>
                      <EmailInput emailValue={this.state.email}></EmailInput>
                      <div className="input-group">
                        <input className="form-control" type="password" placeholder="Crear una contraseña" name="password" onChange={this.onChange} />
                      </div>
                      <div className="kt-login__actions">
                        { loading
                          ? <button id="kt_login_signin_submit" className="btn btn-outline-dark kt-spinner kt-spinner--lg kt-spinner--danger" disabled>Registrar </button>
                          : <button id="kt_login_signin_submit" className="btn btn-outline-dark kt-login__btn-primary">Registrar </button>
                        }
                      </div>
                    </form>
                    {data && <p>{ data.createUser.errorMessage }</p>}
                    {error && <p>Error!</p>}
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
