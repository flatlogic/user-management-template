import * as dataFormat from 'crud/view/users/list/UsersDataFormatters';
import actions from 'crud/modules/users/list/usersListActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

import {
  BootstrapTable,
  TableHeaderColumn,
} from 'react-bootstrap-table';

import Widget from 'components/Widget';

class UsersListTable extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch({}));
  }

  renderSizePerPageDropDown = (props) => {
    const limits = [];
    props.sizePerPageList.forEach((limit) => {
      limits.push(<DropdownItem key={limit} onClick={() => props.changeSizePerPage(limit)}>{ limit }</DropdownItem>);
    });

    return (
      <Dropdown isOpen={props.open} toggle={props.toggleDropDown}>
        <DropdownToggle color="default" caret>
          { props.currSizePerPage }
        </DropdownToggle>
        <DropdownMenu>
          { limits }
        </DropdownMenu>
      </Dropdown>
    );
  };

  render() {
    const {
      rows
    } = this.props;

    const options = {
      sizePerPage: 10,
      paginationSize: 5,
      sizePerPageDropDown: this.renderSizePerPageDropDown,
    };

    return (
        <div>
          <Widget title={<h4>User management</h4>} collapse close>
            <BootstrapTable bordered={false} data={rows} version="4" pagination options={options} search tableContainerClass={`table-responsive table-striped table-hover`}>
              <TableHeaderColumn dataField="firstName" dataSort>
                <span className="fs-sm">First Name</span>
              </TableHeaderColumn>

              <TableHeaderColumn dataField="lastName" dataSort>
                <span className="fs-sm">Last Name</span>
              </TableHeaderColumn>

              <TableHeaderColumn dataField="phoneNumber" dataSort>
                <span className="fs-sm">Phone Number</span>
              </TableHeaderColumn>

              <TableHeaderColumn dataField="email" dataSort>
                <span className="fs-sm">E-mail</span>
              </TableHeaderColumn>

              <TableHeaderColumn dataField="role" dataSort>
                <span className="fs-sm">Role</span>
              </TableHeaderColumn>

              <TableHeaderColumn dataField="disabled" dataSort dataFormat={dataFormat.booleanFormatter}>
                <span className="fs-sm">Disabled</span>
              </TableHeaderColumn>

              <TableHeaderColumn dataField="avatar" dataSort dataFormat={dataFormat.imageFormatter}>
                <span className="fs-sm">Avatar</span>
              </TableHeaderColumn>

              <TableHeaderColumn isKey dataField="id" dataFormat={dataFormat.actionFormatter}>
                <span className="fs-sm">Actions</span>
              </TableHeaderColumn>
            </BootstrapTable>
          </Widget>

        </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    loading: store.users.list.selectLoading,
    rows: store.users.list.rows,
  };
}

export default connect(mapStateToProps)(UsersListTable);
