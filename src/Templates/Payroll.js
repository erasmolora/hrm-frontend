import React, { useState } from 'react';

import {
  useParams, Redirect,
} from 'react-router-dom';
import {
  Row, Col, Spinner, Button,
} from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';

const GET_CONFIGURATION = gql`
    query($organizationId: UUID!){
        payrollConfiguration(organization: $organizationId){ id },
        collaborators(organization: $organizationId){ id },
        typePayrolls{ name, id },
        lawDiscounts{ name, porcentage },
    }
`;


const CREATE_CONFIGURATION = gql`
    mutation($typePayroll: UUID!, $organization: UUID!){
        createPayrollConfiguration(organization: $organization, typePayroll: $typePayroll){
            ok, errors
        }
    }
`;


function ConfigPayroll({ data }) {
  const [typePayroll, setTypePayroll] = useState('');
  const { organizationId } = useParams();

  return (
    <Col xs lg="6">
      <div className="kt-portlet">
        <div className="kt-portlet__body">
          <h3>Aun no se a configurado la nomina</h3>
          <div className="kt-divider text-center">
            <span />
          </div>
          <br />
          <Mutation mutation={CREATE_CONFIGURATION}>
            {(createConfiguration, { loading, error }) => (
              <form
                className="kt-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  createConfiguration(
                    {
                      variables: {
                        typePayroll,
                        organization: organizationId,
                      },
                      refetchQueries: [{ query: GET_CONFIGURATION }],
                    },
                  );
                }}
              >
                {loading && <Spinner animation="border" role="status" />}
                {error && (
                <div>
                  Error `$
                  {error.message}
                  `
                </div>
                )}

                <div className="form-group">
                  <label>¿ De que forma es su nomina ?</label>
                  <div className="kt-radio-inline">
                    {data.typePayrolls.map((typePayroll) => (
                      <label className="kt-radio" key={typePayroll.id}>
                        <input
                          type="radio"
                          name="typePayroll"
                          value={typePayroll.id}
                          onChange={(e) => { setTypePayroll(e.target.value); }}
                        />
                        {typePayroll.name}
                        <span />
                      </label>
                    ))}
                  </div>
                </div>
                <Button className="btn btn-success" type="submit">Iniciar configuración</Button>
              </form>
            )}
          </Mutation>
        </div>
      </div>
    </Col>
  );
}


export default function Payroll() {
  const { organizationId } = useParams();
  const collaboratorUrl = `/organization/${organizationId}/collaborator/`;

  return (
    <Query query={GET_CONFIGURATION} variables={{ organizationId }}>
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <Row className="justify-content-md-center">
              <Col xs lg="12">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Col>
            </Row>
          );
        }
        if (error) return `Error ${error.message}`;
        if (!data.payrollConfiguration) return <ConfigPayroll data={data} />;
        if (data.collaborators.length === 0) return <Redirect to={{ pathname: collaboratorUrl }} />;

        return (
          <Col>
            <div className="alert alert-light alert-elevate fade show">
              <div className="alert-text">
                <ul className="nav nav-fill" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" href="#kt_tabs_5_1">Active</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#kt_tabs_5_2">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#kt_tabs_5_3">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#kt_tabs_5_4">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        );
      }}
    </Query>
  );
}
