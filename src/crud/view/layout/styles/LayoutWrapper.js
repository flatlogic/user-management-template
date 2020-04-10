import styled from 'styled-components';

const LayoutWrapper = styled.div`
  color: rgba(0, 0, 0, 0.65);
  background-color: #f0f2f5;
  display: flex;

  h1 {
    font-size: 2em;
  }

  .bg-primary-light {
    background-color: #e6f7ff;
  }

  .primary-light {
    color: #e6f7ff;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgba(0, 0, 0, 0.85);
  }

  .content {
    padding: 24px;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex: auto;
    background: #f0f2f5;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

export default LayoutWrapper;
