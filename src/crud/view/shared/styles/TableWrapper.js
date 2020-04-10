import styled from 'styled-components';

const TableWrapper = styled.div`
  .table td {
    white-space: nowrap;
  }

  .table td,
  .table th {
    vertical-align: middle;
  }

  .table .th-checkbox {
    width: 50px;
    vertical-align: middle;
    text-align: center;
  }

  .table .th-actions,
  .table .td-actions {
    width: 230px;
    vertical-align: middle;
    text-align: center;
  }

  .table .th-actions-sm,
  .table .td-actions-sm {
    width: 100px;
    vertical-align: middle;
    text-align: center;
  }

  .table .td-actions a {
    margin-right: 8px;
  }
`;

export default TableWrapper;
