import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import Widget from "../../../components/Widget/Widget";
import Scrollspy from "../ScrollSpyComponent";

const Overview = () => (
  <Row>
    <Col md={10}>
      <Breadcrumb>
        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
        <BreadcrumbItem>Documentation</BreadcrumbItem>
        <BreadcrumbItem>Getting Started</BreadcrumbItem>
        <BreadcrumbItem active>Overview</BreadcrumbItem>
      </Breadcrumb>
    </Col>
    <Col lg={9}>
      <Widget id="Overview">
        <h1>Overview</h1>
        <p className="lead">
          React User Management is an admin dashboard template built with React 16.5.2. React UM goes beyond usual admin
          templates and provides you entire intuitive programming framework. Server Side Rendering and Node.js backend
          will even further speed up your development. You can use React UM to build any type of web applications
          like SAAS, CMS, financial dashboards, project management tools, etc.
        </p>
        <p className="lead">
            This version of React UM includes full functionality needed to register, authenticate and manage the user base
            of your application, including all required frontend and backend components. It's a perfect solution to jump start your
            project as you basically get a working application out of the box and can focus on developing your business components.
        </p>
        <Link to="/app">Live demo</Link>
      </Widget>
      <Widget id="Features">
        <h3 className="">Features</h3>
        <ul className="mt">
          <li className="lead"><i className="la la-check" /> Fully Responsive Layout</li>
          <li className="lead"><i className="la la-check" /> PostgreSQL backend with Sequalize ORM</li>
          <li className="lead"><i className="la la-check" /> Redux based frontend</li>
          <li className="lead"><i className="la la-check" /> Easily extended Formik based forms</li>
          <li className="lead"><i className="la la-check" /> Registration with E-mail verification</li>
          <li className="lead"><i className="la la-check" /> Social login</li>
          <li className="lead"><i className="la la-check" /> Password change and recovery</li>
          <li className="lead"><i className="la la-check" /> Full CRUD functionality for users table</li>
          <li className="lead"><i className="la la-check" /> User roles</li>
          <li className="lead"><i className="la la-check" /> User profile</li>
          <li className="lead"><i className="la la-check" /> Avatar upload</li>
        </ul>
      </Widget>
      <Row>
        <Col md={5}>
          <Widget title="Continue with">
            <Link to="/documentation/getting-started/licences">
              <h4>Licences <i className="la la-arrow-right"/></h4>
            </Link>
          </Widget>
        </Col>
        <Col md={5}>
          <Widget title="Or learn about">
            <Link to="/documentation/getting-started/quick-start">
              <h4>How to start project <i className="la la-arrow-right"/></h4>
            </Link>
          </Widget>
        </Col>
      </Row>
    </Col>
    <Col lg={3}>
      <Scrollspy
        title="OVERVIEW"
        prefix="getting-started/overview"
        ids={[
          'Overview',
          'Features'
        ]}
      />
    </Col>
  </Row>
);

export default Overview;
