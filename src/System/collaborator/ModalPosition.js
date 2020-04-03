import React, { useState } from 'react';
import {
  Modal, Button, Form, Row, Col,
} from 'react-bootstrap';
import { useQuery, useMutation } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

const MUTATE_POSITION = gql`
  mutation createPosition(
    $name: String!,
    $salary: String!,
    $level: UUID!,
    $organizationUnit: UUID!,
    $organizationId: UUID!
  ){
    createPosition(
      name: $name,
      salary: $salary,
      levelId: $level,
      organizationUnitId: $organizationUnit,
      organizationId: $organizationId
    ){
      ok
    }
  }
`;

const CREATE_LEVEL = gql`
  mutation createLevel(
    $name: String!,
    $organizationId: UUID!
  ){
    createLevel(
      name: $name,
      organizationId: $organizationId
    ) {
      ok, level { id }
    }
  }
`;

const CREATE_ORGANIZATION_UNIT = gql`
  mutation createOrganizationUnit(
    $name: String!,
    $organizationId: UUID!
  ){
    createOrganizationUnit(
      name: $name,
      organizationId: $organizationId
    ) {
      ok,
    }
  }
`;

const QUERY = gql`
  query prueba($organizationId: UUID!){
    levels(organization: $organizationId){
      value: id, label: name
    }
    organizationUnits(organization: $organizationId){
      value: id, label: name
    }
  }
`;


export default function ModalPosition(props) {
  const { organizationId } = useParams();
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [level, setLevel] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [organizationUnit, setOrganizationUnit] = useState('');

  const { loading, error, data } = useQuery(QUERY, { variables: { organizationId } });
  const [createPosition] = useMutation(MUTATE_POSITION);
  const [createLevel] = useMutation(CREATE_LEVEL, { onCompleted: () => { setLoading(false); } });
  const [createOrganizationUnit] = useMutation(CREATE_ORGANIZATION_UNIT, { onCompleted() { setLoading(false); } });


  const handleCreateLevel = (value) => {
    setLoading(true);
    createLevel({
      variables: { name: value, organizationId },
      refetchQueries: [{ query: QUERY, variables: { organizationId } }],
    });
  };

  const handleCreateOrganizationUnit = (value) => {
    setLoading(true);
    createOrganizationUnit({
      variables: { name: value, organizationId },
      refetchQueries: [{
        query: QUERY, variables: { organizationId },
      }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPosition({
      variables: {
        organizationId,
        name,
        salary,
        level,
        organizationUnit,
      },
    });
  };

  return (
    <Modal {...props} centered>
      <Form
        className="kt-form kt-form--label-right"
        onSubmit={handleSubmit}
      >
        <Modal.Header closeButton>
          <Modal.Title>Agregar una posición</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm={3}>Nombre: </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="level">
            <Form.Label column sm={3}>Nivel: </Form.Label>
            {loading && <div>Cargando</div>}
            {data && (
              <Col sm={8}>
                <CreatableSelect
                  options={data.levels}
                  isDisabled={isLoading}
                  isLoading={isLoading}
                  onCreateOption={handleCreateLevel}
                  onChange={(selected) => {
                    setLevel(selected.value);
                  }}
                />
              </Col>
            )}
          </Form.Group>
          <Form.Group as={Row} controlId="organizationUnit">
            <Form.Label column sm={3}>Unidad Organizativa: </Form.Label>
            {loading && <div>Cargando</div>}
            {data && (
              <Col sm={8}>
                <CreatableSelect
                  options={data.organizationUnits}
                  isDisabled={isLoading}
                  isLoading={isLoading}
                  onCreateOption={handleCreateOrganizationUnit}
                  onChange={(e) => {
                    setOrganizationUnit(e.value);
                  }}
                />
              </Col>
            )}
          </Form.Group>
          <Form.Group as={Row} controlId="salary">
            <Form.Label column sm={3}>Salary: </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button variant="primary" type="submit">Crear</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
