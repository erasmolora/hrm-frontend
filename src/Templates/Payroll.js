import React, { useState } from 'react';

import {
  useParams, Redirect,
  Switch, Route, useRouteMatch,
} from 'react-router-dom';
import {
  Row, Col, Spinner, Button,
  Container,
  Form,
} from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';

import Select from 'react-select';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import query from '../graphql/query';


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
                      refetchQueries: [{ query: query.GET_CONFIGURATION }],
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
  const [payroll, setPayroll] = useState('');

  const { organizationId } = useParams();
  const { path, url } = useRouteMatch();
  const collaboratorUrl = `/organization/${organizationId}/collaborator/`;
  const state = {
    columnDefs: [{
      headerName: 'ID', field: 'id',
    }, {
      headerName: 'Colaborador', field: 'collaborator.name',
    }],
  };

  return (
    <Query query={query.GET_CONFIGURATION} variables={{ organizationId }}>
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
          <Container className="kt-portlet kt-portlet--mobile">
            <div className="kt-portlet__head kt-portlet__head--lg">
              <div className="kt-portlet__head-label">
                <h3 className="kt-portlet__head-title">
                  Record Selection
                </h3>
              </div>
              <div className="kt-portlet__head-toolbar">
                <div className="kt-portlet__head-wrapper">
                  <a href="#" className="btn btn-clean btn-icon-sm">
                    <i className="la la-long-arrow-left" />
                    Back
                  </a>
                  <div className="dropdown dropdown-inline">
                    <button type="button" className="btn btn-brand btn-icon-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="flaticon2-plus" />
                      {' '}
                      Add New
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="kt-nav">
                        <li className="kt-nav__section kt-nav__section--first">
                          <span className="kt-nav__section-text">Choose an action:</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kt-portlet__body ag-theme-balham">
              <div className="kt-form kt-form--label-right">
                <div className="col-xl-8">
                  <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
                    <Form.Group controlId="payroll" className="kt-form__group">
                      <Form.Label>Nomina</Form.Label>
                      <Query query={query.GET_PAYROLLS} variables={{ organizationId }}>
                        {({ loading, error, data }) => {
                          if (loading) return 'Loading...';
                          if (error) return `Error! ${error.message}`;

                          return (
                            <Select
                              options={data.payrolls}
                              onChange={
                                (optionSelected) => {
                                  setPayroll(optionSelected.value);
                                }
                              }
                            />
                          );
                        }}
                      </Query>
                    </Form.Group>
                  </div>
                </div>
                <div className="col-xl-4 order-1 order-xl-2 kt-align-right">
                  <a href="#" className="btn btn-default kt-hidden">
                    <i className="la la-cart-plus" />
                    {' '}
                      New Order
                  </a>
                  <div className="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none" />
                  <div>
                    <Query query={query.GET_PAYROLL_COLLABORATOR} variables={{ organizationId }}>
                      {({ loading, error, data }) => {
                        if (loading) return 'Loading ...';
                        if (error) return `Error! ${error.message}`;

                        return (
                          <div id="kt_datatable_2_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                            <div className="row">
                              <div className="col-sm-12">
                                <table className="table table-separate table-head-custom table-checkable dataTable no-footer dtr-inline" id="kt_datatable_2" role="grid" aria-describedby="kt_datatable_2_info">
                                  <thead>
                                    <tr role="row">
                                      <th className="dt-left sorting_disabled" rowSpan="1" colSpan="1" aria-label="Record ID" />
                                      <th className="sorting_desc" tabIndex="0" aria-controls="kt_datatable_2" rowSpan="1" colSpan="1" aria-sort="descending" aria-label="Order ID: activate to sort column ascending">Order ID</th>
                                      <th className="sorting" tabIndex="0" aria-controls="kt_datatable_2" rowSpan="1" colSpan="1" aria-label="Country: activate to sort column ascending">Country</th>
                                      <th className="sorting" tabIndex="0" aria-controls="kt_datatable_2" rowSpan="1" colSpan="1" aria-label="Ship City: activate to sort column ascending">Ship City</th>
                                      <th className="sorting" tabIndex="0" aria-controls="kt_datatable_2" rowSpan="1" colSpan="1" aria-label="Ship Address: activate to sort column ascending">Ship Address</th>
                                      <th className="sorting" tabIndex="0" aria-controls="kt_datatable_2" rowSpan="1" colSpan="1" aria-label="Company Agent: activate to sort column ascending">Company Agent</th>
                                      <th className="sorting" tabIndex="0" aria-controls="kt_datatable_2" rowSpan="1" colSpan="1" aria-label="Company Name: activate to sort column ascending">Company Name</th>
                                      <th className="sorting" tabIndex="0" aria-controls="kt_datatable_2" rowSpan="1" colSpan="1" aria-label="Ship Date: activate to sort column ascending">Ship Date</th>
                                      <th className="sorting" tabIndex="0" aria-controls="kt_datatable_2" rowSpan="1" colSpan="1" aria-label="Status: activate to sort column ascending">Status</th>
                                      <th className="sorting" tabIndex="0" aria-controls="kt_datatable_2" rowSpan="1" colSpan="1" aria-label="Type: activate to sort column ascending">Type</th>
                                      <th className="sorting_disabled" rowSpan="1" colSpan="1" aria-label="Actions">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody />
                                </table>
                              </div>
                            </div>
                          </div>
                        );
                      }}
                    </Query>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        );
      }}
    </Query>
  );
}
