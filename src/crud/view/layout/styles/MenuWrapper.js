import styled from 'styled-components';

const MenuWrapper = styled.div`
  .menu-nav {
    flex: 0 0 200px;
    max-width: 200px;
    min-width: 200px;
    width: 200px;
    height: 100%;
  }

  .menu-logo {
    padding: 8px;
    width: 100%;
    text-align: center;
    height: 61px;
    font-weight: 500;
    font-size: 1.5em;
  }

  .menu-logo a {
    text-decoration: none;
  }

  .menu-ul {
    font-size: 16px;
    font-variant: tabular-nums;
    line-height: 1.5;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    line-height: 0;
    transition: background 0.3s, width 0.2s;
    zoom: 1;
  }

  .menu-li a {
    display: block;
    width: 100%;
    line-height: 40px;
    height: 40px;
    padding: 0 16px;
    padding-left: 24px;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  .menu-li a .menu-icon {
    margin-right: 10px;
  }

  .menu-li a:focus,
  .menu-li a:hover {
    text-decoration: none;
  }
`;

export default MenuWrapper;
