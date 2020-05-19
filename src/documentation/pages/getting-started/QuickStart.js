import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Widget from "../../../components/Widget/Widget";

const QuickStart = () => (
  <Row>
    <Col md={10}>
      <Breadcrumb>
        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
        <BreadcrumbItem>Documentation</BreadcrumbItem>
        <BreadcrumbItem>Getting Started</BreadcrumbItem>
        <BreadcrumbItem active>Quick Start</BreadcrumbItem>
      </Breadcrumb>
    </Col>
    <Col md={9}>
      <Widget>
        <h5>Requirements:</h5>
        <ol>
          <li>1. Mac OS X, Windows, or Linux</li>
          <li>2. Yarn package + Node.js v6.5 or newer</li>
          <li>3. Running our <a href="https://github.com/flatlogic/nodejs-backend" rel="noopener noreferrer" target="_blank">Node.js backend</a>
              <span className="small text-muted"> (Required only in full stack version)</span></li>
          <li>4. PostgreSQL</li>
        </ol>
        <h5>Quick Start:</h5>
        <h6>Backend</h6>
        <ol>
          <li>1. Go to <code>backend</code> folder</li>
          <li>2. Edit <code>config.js</code> to setup DB access and e-mail client credentials</li>
          <li>3. Run PostgreSQL server and create a DB for your app, e.g. via <code>createdb</code>.
          Originally the DB is called <code>development</code> unless you change its name in <code>config.js</code></li>
          <li>4. Run <code>yarn reset</code> to create <code>users</code> table. Note: running this script
          again will delete all the users records.</li>
          <li>5. Run <code>yarn install</code></li>
          <li>6. Run <code>yarn start:dev</code></li>
        </ol>
        <h6>Frontend</h6>
        <ol>
          <li>1. Go to <code>frontend</code> folder</li>
          <li>2. Run <code>yarn install</code></li>
          <li>3. Run <code>yarn start</code></li>
        </ol>
        <h5>There are also other npm tasks:</h5>
        <ul>
          <li><code>yarn build</code>: if you need just to build the app (without running a dev server)</li>
          <li><code>yarn lint</code>: to check the source code for syntax errors and potential issues</li>
        </ul>
      </Widget>
      <p>For more instruction please refer to React UM readme.md.</p>
    </Col>
  </Row>
);

export default QuickStart;
