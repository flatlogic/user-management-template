import React, { Component } from 'react';
import styled from 'styled-components';

const TableColumnHeaderStyled = styled.th`
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.15s ease-in;

  &:hover,
  &:focus {
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
  }

  &:active {
    opacity: 0.8;
    transition: opacity 0.15s ease-out;
  }
`;

class TableColumnHeader extends Component {
  render() {
    const {
      sorter,
      onSort,
      name,
      label,
      hasRows,
      children,
    } = this.props;

    if (!hasRows || !onSort) {
      return (
        <th
          className={this.props.className || ''}
          scope="col"
        >
          {children || label || ''}
        </th>
      );
    }

    return (
      <TableColumnHeaderStyled
        onClick={() => onSort(name)}
        className={`${this.props.className || ''} sortable`}
        scope="col"
      >
        <div className="d-flex">
          {children || label || ''}

          {sorter.columnKey === name &&
            sorter.order === 'descend' && (
              <i className="ml-2 fas fa-sort-up" />
            )}
          {sorter.columnKey === name &&
            sorter.order === 'ascend' && (
              <i className="ml-2 fas fa-sort-down" />
            )}
        </div>
      </TableColumnHeaderStyled>
    );
  }
}

export default TableColumnHeader;
