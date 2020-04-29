import React, {Component} from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/prism';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';
import { Link } from 'react-router-dom';

import Widget from '../../components/Widget/Widget';
import Scrollspy from "./ScrollSpyComponent";

export default class Pages extends Component {
  render() {
    return (
      <Row>
        <Col md={10}>
          <Breadcrumb>
            <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
            <BreadcrumbItem>Documentation</BreadcrumbItem>
            <BreadcrumbItem active>Pages</BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col lg={9}>
          <Widget id="Auth">
            <h3>Auth</h3>
            <p>Auth is a built-in module for an admin template dashboard. It contains all actions and handlers for any token authorization for your application.</p>
            <p>All logic is in <code>src/actions/user.js</code> and <code>src/reducers/user.js</code>. We have already preconfigured <a href="https://github.com/flatlogic/nodejs-backend" rel="noopener noreferrer" target="_blank">Node.js backend</a>
                <span className="small text-muted"> (Only in full stack version)</span> under the hood. <code>Creds</code> variable contains user email and password entered in the login form. It does request to our backend server and gets token and saves it in <code>localStorage</code>.</p>
            <p><b>Important note.</b> Credentials validation must be on the server side.</p>
            <p>Another important part of authentication is <code>PrivateRoute</code> component. That’s how it looks like.</p>
            <SyntaxHighlighter language='javascript' style={tomorrow}>{'const PrivateRoute = ({ dispatch, component, ...rest }) => {\n' +
            '    if (!Login.isAuthenticated(localStorage.getItem(\'token\'))) {\n' +
            '        dispatch(logoutUser());\n' +
            '        return (<Redirect to=\'/login\'/>)\n' +
            '    } else {\n' +
            '        return (\n' +
            '            <Route {...rest} render={props => (React.createElement(component, props))}/>\n' +
            '        );\n' +
            '    }\n' +
            '};'}</SyntaxHighlighter>
            <p>We are getting <code>token</code> from local storage, that must be saved in local storage after successful loginUser function completion. Depends on the result of this action, <code>PrivateRoute</code> returns page (react component) or redirect to the login page. If you don’t need login functionality in your app, you can use <code>Route</code> instead of <code>PrivateRoute</code>.</p>
          </Widget>
        </Col>
        <Col lg={3}>
          <Scrollspy
            title="PAGES"
            prefix="pages"
            ids={[
            'Auth',
          ]} />
        </Col>
      </Row>
    )
  }
}
