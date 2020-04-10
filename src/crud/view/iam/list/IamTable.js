import React, { Component } from 'react';
import { connect } from 'react-redux';
import iamSelectors from 'crud/modules/iam/iamSelectors';
import selectors from 'crud/modules/iam/list/users/iamListUsersSelectors';
import actions from 'crud/modules/iam/list/users/iamListUsersActions';
import Roles from 'crud/security/roles';
import { Link } from 'react-router-dom';
import TableWrapper from 'crud/view/shared/styles/TableWrapper';
import { i18n } from 'crud/i18n';
import model from 'crud/modules/auth/userModel';
import Avatar from 'crud/view/shared/Avatar';
import Pagination from 'crud/view/shared/table/Pagination';
import Spinner from 'crud/view/shared/Spinner';
import TableColumnHeader from 'crud/view/shared/table/TableColumnHeader';

const { fields } = model;

class IamTable extends Component {
  doChangeSort = (columnKey) => {
    const { dispatch, sorter } = this.props;

    const order =
      sorter.columnKey === columnKey &&
      sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        columnKey,
        order,
      }),
    );
  };

  doChangePagination = (pagination) => {
    const { dispatch } = this.props;
    dispatch(actions.doChangePagination(pagination));
  };

  doToggleAllSelected = () => {
    const { dispatch } = this.props;
    dispatch(actions.doToggleAllSelected());
  };

  doToggleOneSelected = (id) => {
    const { dispatch } = this.props;
    dispatch(actions.doToggleOneSelected(id));
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

    return (
      <TableWrapper>
        <div className="table-responsive">
          <table className="table table-bordered mt-4">
            <thead className="thead">
              <tr>
                <TableColumnHeader className="th-checkbox">
                  {hasRows && (
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="table-header-checkbox"
                        checked={!!isAllSelected}
                        onChange={() =>
                          this.doToggleAllSelected()
                        }
                      />
                      <label
                        htmlFor="table-header-checkbox"
                        className="custom-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  )}
                </TableColumnHeader>
                <TableColumnHeader
                  label={fields.avatarsIam.label}
                ></TableColumnHeader>
                <TableColumnHeader
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.email.name}
                  label={fields.email.label}
                />
                <TableColumnHeader
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.fullName.name}
                  label={fields.fullName.label}
                />
                <TableColumnHeader
                  label={fields.roles.label}
                ></TableColumnHeader>
                <TableColumnHeader
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.disabledAsStatus.name}
                  label={fields.disabledAsStatus.label}
                />
                <TableColumnHeader
                  onSort={this.doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={fields.createdAt.name}
                  label={fields.createdAt.label}
                />
                <TableColumnHeader className="th-actions" />
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={100}>
                    <Spinner />
                  </td>
                </tr>
              )}
              {!loading && !hasRows && (
                <tr>
                  <td colSpan={100}>
                    <div className="d-flex justify-content-center">
                      {i18n('table.noData')}
                    </div>
                  </td>
                </tr>
              )}
              {!loading &&
                rows.map((row) => (
                  <tr key={row.id}>
                    <th className="th-checkbox" scope="row">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={`table-header-checkbox-${row.id}`}
                          checked={selectedKeys.includes(
                            row.id,
                          )}
                          onChange={() =>
                            this.doToggleOneSelected(row.id)
                          }
                        />
                        <label
                          htmlFor={`table-header-checkbox-${row.id}`}
                          className="custom-control-label"
                        >
                          &#160;
                        </label>
                      </div>
                    </th>
                    <td>
                      <Avatar
                        src={
                          row.avatars && row.avatars.length
                            ? row.avatars[0].publicUrl
                            : undefined
                        }
                        alt="avatar"
                      />
                    </td>
                    <td>
                      {fields.email.forView(
                        row[fields.email.name],
                      )}
                    </td>
                    <td>
                      {fields.fullName.forView(
                        row[fields.fullName.name],
                      )}
                    </td>
                    <td>
                      {row.roles.map((roleId) => (
                        <div key={roleId}>
                          <span>
                            {Roles.labelOf(roleId)}
                          </span>
                        </div>
                      ))}
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          row[fields.disabledAsStatus.name]
                            ? 'badge-danger'
                            : 'badge-success'
                        }`}
                      >
                        {fields.disabledAsStatus.forView(
                          row[fields.disabledAsStatus.name],
                        )}
                      </span>
                    </td>
                    <td>
                      {fields.createdAt.forView(
                        row[fields.createdAt.name],
                      )}
                    </td>
                    <td className="td-actions">
                      <Link
                        className="btn btn-link"
                        to={`/iam/${row.id}`}
                      >
                        {i18n('common.view')}
                      </Link>
                      {this.props.hasPermissionToEdit && (
                        <Link
                          className="btn btn-link"
                          to={`/iam/${row.id}/edit`}
                        >
                          {i18n('common.edit')}
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Pagination
          onChange={this.doChangePagination}
          disabled={loading}
          pagination={pagination}
        />
      </TableWrapper>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasRows: selectors.selectHasRows(state),
    sorter: selectors.selectSorter(state),
    isAllSelected: selectors.selectIsAllSelected(state),
    hasPermissionToEdit: iamSelectors.selectPermissionToEdit(
      state,
    ),
  };
}

export default connect(select)(IamTable);
