
import * as dataFormat from 'crud/view/users/list/UsersDataFormatters';
import { i18n } from 'crud/i18n';
import actions from 'crud/modules/users/list/usersListActions';
import destroyActions from 'crud/modules/users/destroy/usersDestroyActions';
import selectors from 'crud/modules/users/list/usersListSelectors';
import destroySelectors from 'crud/modules/users/destroy/usersDestroySelectors';
import usersSelectors from 'crud/modules/users/usersSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { reactTableData, reactBootstrapTableData } from 'pages/tables/dynamic/data';

import {
  Progress,
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
import s from 'pages/tables/dynamic/Dynamic.modules.scss';

class UsersListTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reactTable: reactTableData(),
      reactBootstrapTable: reactBootstrapTableData(),
    };
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
      pagination,
      rows,
      loading,
      isAllSelected,
      selectedKeys,
      sorter,
      hasRows,
    } = this.props;

    const options = {
      sizePerPage: 10,
      paginationSize: 5,
      sizePerPageDropDown: this.renderSizePerPageDropDown,
    };

    return (
        <div>
          <Widget title={<h4>&nbsp;</h4>} collapse close>
            <BootstrapTable data={rows} version="4" pagination options={options} search tableContainerClass={`table-responsive table-striped table-hover ${s.bootstrapTable}`}>
              <TableHeaderColumn isKey className={`${s.columnHead}`} dataField="id" dataFormat={dataFormat.actionFormatter}>
                <span className="fs-sm">Actions</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="fullName" dataSort
                
              >
                <span className="fs-sm">Full Name</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="firstName" dataSort
                
              >
                <span className="fs-sm">First Name</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="lastName" dataSort
                
              >
                <span className="fs-sm">Last Name</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="phoneNumber" dataSort
                
              >
                <span className="fs-sm">Phone Number</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="email" dataSort
                
              >
                <span className="fs-sm">E-mail</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="disabled" dataSort
                
                dataFormat={dataFormat.booleanFormatter}
                
              >
                <span className="fs-sm">Disabled</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="avatar" dataSort
                
                dataFormat={dataFormat.imageFormatter}
                
              >
                <span className="fs-sm">Avatar</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="password" dataSort
                
              >
                <span className="fs-sm">Password</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="emailVerified" dataSort
                
                dataFormat={dataFormat.booleanFormatter}
                
              >
                <span className="fs-sm">emailVerified</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="emailVerificationToken" dataSort
                
              >
                <span className="fs-sm">emailVerificationToken</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="emailVerificationTokenExpiresAt" dataSort
                
                dataFormat={dataFormat.dateTimeFormatter}
                
              >
                <span className="fs-sm">emailVerificationTokenExpiresAt</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="passwordResetToken" dataSort
                
              >
                <span className="fs-sm">passwordResetToken</span>
              </TableHeaderColumn>

              <TableHeaderColumn className={`d-md-table-cell ${s.columnHead}`} dataField="passwordResetTokenExpiresAt" dataSort
                
                dataFormat={dataFormat.dateTimeFormatter}
                
              >
                <span className="fs-sm">passwordResetTokenExpiresAt</span>
              </TableHeaderColumn>

            </BootstrapTable>
          </Widget>

        </div>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
  };
}

export default connect(select)(UsersListTable);
