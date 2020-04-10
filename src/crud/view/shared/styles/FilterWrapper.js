import styled from 'styled-components';

const FilterWrapper = styled.div`
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .invalid-feedback {
    display: block;
  }

  .filter-buttons {
    padding-top: 8px;
    text-align: right;

    .btn {
      margin-left: 8px;
      margin-bottom: 8px;
    }
  }
`;

export const formItemLayout = {
  labelCol: {
    md: { span: 6 },
  },
  wrapperCol: {
    md: { span: 18 },
  },
};

export default FilterWrapper;
