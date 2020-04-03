import React from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import {
  Switch, Route, useRouteMatch,
} from 'react-router-dom';
import Brand from '../Atoms/Brand';
import SubHeader from '../Atoms/SubHeader';
import HeaderLeft from '../Molecules/HeaderLeft';
import HeaderRight from '../Molecules/HeaderRight';
import Payroll from './Payroll';
import Collaborator from './collaborator/Collaborator';
import CreateCollaborator from './collaborator/Create';


export default function Dashboard() {
  const { path } = useRouteMatch();

  return (
    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
      <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper">
        <div className="kt-header  kt-header--fixed ">
          <div className="kt-container  kt-container--fluid ">
            <HeaderLeft />
            <Brand />
            <HeaderRight />
          </div>
        </div>
        <Jumbotron fluid className="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch">
          <Container className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
            <div className="kt-container kt-grid__item kt-grid__item--fluid ">
              <Row className="justify-content-md-center">
                {/* <SubHeader /> */}
                <Switch>
                  <Route exact path={path}>
                    <div>Dashboard</div>
                  </Route>
                  <Route exact path={`${path}/payroll`} component={Payroll} />
                  <Route exact path={`${path}/collaborator`} component={Collaborator} />
                  <Route exact path={`${path}/collaborator/create-manual`} component={CreateCollaborator} />
                </Switch>
              </Row>
            </div>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}
