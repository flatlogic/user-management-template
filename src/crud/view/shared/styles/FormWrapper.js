import styled from 'styled-components';

const FormWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 0;

  label.required::before {
    display: inline-block;
    margin-right: 4px;
    content: '*';
    line-height: 1;
    font-size: 16px;
    color: #f5222d;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .invalid-feedback {
    display: block;
  }

  .form-buttons {
    padding-top: 16px;

    .btn {
      margin-right: 8px;
      margin-bottom: 8px;
    }
  }
`;

export default FormWrapper;
