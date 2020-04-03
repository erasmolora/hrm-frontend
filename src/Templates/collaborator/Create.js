import React, { useState } from 'react';
import Select from 'react-select';
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import InputMask from "react-input-mask";
import ModalPosition from '../../System/collaborator/ModalPosition';


const GET_POSITIONS = gql`
  query positions($organizationId: UUID!){
    positions(organization: $organizationId){
      value: id, label: name 
    }
  }
`;

const MUTATE_COLLABORATOR = gql`
  mutation(
    $dateAdmission: Date!,
    $lastName: String!,
    $name: String!,
    $organization: UUID!,
    $position: UUID!,
  ){
    createCollaborator(
        dateAdmission: $dateAdmission,
        lastName: $lastName,
        name: $name,
        organizationId: $organization,
        positionId: $position,
    ){
      collaborator {
        id, name, lastName
      }
    }
  }
`;


export default function Create() {
  const { organizationId } = useParams();
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateAdmission, setDateAdmission] = useState('');
  const [position, setPosition] = useState('');

  const [showModal, setShowModal] = useState();

  return (
    <div className="col-lg-6">
      <div className="kt-portlet">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Datos del colaborador</h3>
          </div>
        </div>
        <Mutation mutation={MUTATE_COLLABORATOR}>
          {(createCollaborator, { data, loading, error }) => (
            <form
              className="kt-form kt-form--label-right"
              onSubmit={(e) => {
                e.preventDefault();
                createCollaborator({
                  variables: {
                    organization: organizationId,
                    identificationNumber,
                    name,
                    lastName,
                    dateAdmission,
                    position,
                  },
                });
              }}
            >
              <div className="kt-portlet__body">
                <div className="kt-section kt-section--first">
                  <div className="kt-section__body">
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Cedula:</label>
                      <div className="col-lg-6">
                        <InputMask
                          className="form-control"
                          mask="999-9999999-9"
                          onChange={(e) => {
                            setIdentificationNumber(e.target.value);
                          }}
                        />
                        <span className="form-text text-muted">Please enter your full name</span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Nombres:</label>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email" 
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        <span className="form-text text-muted">We'll never share your email with anyone else</span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Apellidos:</label>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email"
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                        />
                        <span className="form-text text-muted">We'll never share your email with anyone else</span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Fecha de ingreso:</label>
                      <div className="col-lg-6">
                        <input
                          type="date"
                          className="form-control"
                          onChange={(e) => {
                            setDateAdmission(e.target.value);
                          }}
                        />
                        <span className="form-text text-muted">We'll never share your email with anyone else</span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Posición:</label>
                      <Query query={GET_POSITIONS} variables={{ organizationId }}>
                        {({ loading, error, data }) => {
                          if (loading) return 'Loading...';
                          if (error) return `Error! ${error.message}`;

                          return (
                            <div className="col-lg-6">
                              <Select
                                options={data.positions}
                                onChange={
                                  (optionSelected) => {
                                    setPosition(optionSelected.value);
                                  }
                                }
                              />
                              {/* <span className="form-text text-muted">Please enter your account holder</span> */}
                              <Button
                                variant="link"
                                onClick={() => setShowModal(true)}
                                >Agregar posición</Button>
                            </div>
                          );
                        }}

                      </Query>
                    </div>
                  </div>

                  <div className="kt-portlet__foot">
                    <div className="kt-form__actions">
                        <button type="submit" className="btn btn-success">Guardar</button>
                        <button type="reset" className="btn btn-secondary">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Mutation>

        <ModalPosition show={showModal} onHide={() => setShowModal(false)} />
      </div>
    </div>
  );
}
