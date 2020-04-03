import React, { useState } from 'react';

import { Modal, ModalTitle } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { Mutation, useQuery } from 'react-apollo';
import {
  useRouteMatch, Link,
} from 'react-router-dom';


const MUTATION = gql`
    mutation(
        $name: String!,
        $principalEmail: String!
    ){ 
        createOrganization(name: $name, principalEmail: $principalEmail) { 
            ok, errorMessage
    } 
 }`;

const ORGANIZATION_QUERY = gql`
    query { 
        organizations{ 
            name, id, slug
        } 
    }`;


function OrganizationModal({ show, setShow }) {
  const [name, setName] = useState('');
  const [principalEmail, setPrincipalEmail] = useState('');

  return (
    <Mutation mutation={MUTATION}>
      {(createOrganization, { data, loading, error }) => (
        <Modal show={show} onHide={() => { setShow(false); }} aria-labelledby="contained-modal-title-vcenter" centered>
          <form
            className="kt-form"
            onSubmit={
              (e) => {
                e.preventDefault();
                createOrganization({
                  variables: { name, principalEmail },
                  refetchQueries: [{ query: ORGANIZATION_QUERY }],
                });
                setShow(false);
              }
            }
          >
            <Modal.Header>
              <ModalTitle>Informacion de la organización</ModalTitle>
            </Modal.Header>
            <Modal.Body>
              <div className="kt-portlet__body">
                <div className="form-group form-group-last">
                  <div className="alert alert-secondary" role="alert">
                    <div className="alert-icon"><i className="flaticon-warning kt-font-brand" /></div>
                    <div className="alert-text">The example form below demonstrates common HTML form elements that receive updated styles from Bootstrap with additional classes.</div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Nombre de la organización</label>
                  <input type="text" className="form-control" placeholder="Enter nombre" onChange={(e) => { setName(e.target.value); }} />
                  {/* <span className="form-text text-muted">We'll never share your email with anyone else.</span> */}
                </div>
                <div className="form-group">
                  <label>Correo principal</label>
                  <input type="email" className="form-control" placeholder="info@company.com" onChange={(e) => { setPrincipalEmail(e.target.value); }} />
                  {/* <span className="form-text text-muted">We'll never share your email with anyone else.</span> */}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" onClick={(e) => { setShow(false); }} className="btn btn-secondary">Cerrar</button>
              {loading
                ? <button className="btn btn-success btn-wide kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light" disabled>Configurando</button>
                : <button className="btn btn-success btn-wide">Iniciar</button>}
            </Modal.Footer>
          </form>
        </Modal>
      )}
    </Mutation>
  );
}


export default function Organization() {
  const [showModal, setShowModal] = useState(false);
  const { loading, error, data } = useQuery(ORGANIZATION_QUERY);

  const { url } = useRouteMatch();

  return (
    <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v3 kt-login--signin">
      <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style={{ backgroundImage: 'url(./assets/media/bg-3.jpg)' }}>
        <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
          <div className="kt-login__container" />
          <div className="kt-portlet">
            <div className="kt-portlet__body">
              <div className="kt-notification-v2">
                {loading
                  && (
                    <div className="row">
                      <div className="col-sm">
                        <div className="kt-spinner kt-spinner--lg kt-spinner--dark" />
                      </div>
                    </div>
                  )}

                {error && `'Error!: ${error}`}

                {data && data.organizations.map(
                  (organization) => (
                    <Link to={`${url}/${organization.id}`} className="kt-notification-v2__item" key={organization.id}>
                      <div className="kt-notification-v2__item-icon">
                        <i className="flaticon-bell kt-font-success" />
                      </div>
                      <div className="kt-notification-v2__itek-wrapper">
                        <div className="kt-notification-v2__item-title">{organization.name}</div>
                        <div className="kt-notification-v2__item-desc">Reports based on sales</div>
                      </div>
                    </Link>
                  ),
                )}
              </div>
              <div className="kt-separator kt-separator--space-lg kt-separator--border-dashed" />
              <button type="button" className="btn btn-success btn-lg" onClick={() => setShowModal(true)}>Iniciar organización</button>
            </div>
          </div>
          <OrganizationModal show={showModal} setShow={setShowModal} />
        </div>
      </div>
    </div>
  );
}
