import React, { Component } from 'react';
import MenuWrapper from 'crud/view/layout/styles/MenuWrapper';
import { Link } from 'react-router-dom';
import authSelectors from 'crud/modules/auth/authSelectors';
import { connect } from 'react-redux';
import PermissionChecker from 'crud/modules/auth/permissionChecker';
import actions from 'crud/modules/layout/layoutActions';
import layoutSelectors from 'crud/modules/layout/layoutSelectors';
import routes from 'crud/view/routes';
import { i18n } from 'crud/i18n';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    this.toggleMenuOnResize();
    window.addEventListener(
      'resize',
      this.toggleMenuOnResize,
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.toggleMenuOnResize,
    );
  }

  toggleMenuOnResize = () => {
    window.innerWidth < 576
      ? this.hideMenu()
      : this.showMenu();
  };

  get selectedKeys() {
    const url = this.props.url;

    const match = routes.privateRoutes.find((option) => {
      if (option.menu.exact) {
        return url === option.path;
      }

      return (
        url === option.path ||
        url.startsWith(option.path + '/')
      );
    });

    if (match) {
      return [match.path];
    }

    return null;
  }

  hideMenu = () => {
    const { dispatch } = this.props;
    dispatch(actions.doHideMenu());
  };

  showMenu = () => {
    const { dispatch } = this.props;
    dispatch(actions.doShowMenu());
  };

  match = (permission) => {
    const permissionChecker = new PermissionChecker(
      this.props.currentUser,
    );

    return permissionChecker.match(permission);
  };

  render() {
    return (
      <MenuWrapper
        style={{
          display: this.props.menuVisible
            ? 'block'
            : 'none',
        }}
      >
        <div className="menu-nav border-right">
          <div className="menu-logo">
            <Link to="/">{i18n('app.title')}</Link>
          </div>

          <ul className="menu-ul">
            {routes.privateRoutes
              .filter((privateRoute) => !!privateRoute.menu)
              .filter((privateRoutes) =>
                this.match(
                  privateRoutes.permissionRequired,
                ),
              )
              .map((privateRoute) => (
                <li
                  key={privateRoute.path}
                  className={`menu-li text-nowrap ${
                    this.selectedKeys.includes(
                      privateRoute.path,
                    )
                      ? 'active'
                      : ''
                  }`}
                >
                  <Link to={privateRoute.path}>
                    <i
                      className={`menu-icon ${privateRoute.icon}`}
                    ></i>{' '}
                    <span>{privateRoute.label}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </MenuWrapper>
    );
  }
}

const select = (state) => ({
  currentUser: authSelectors.selectCurrentUser(state),
  menuVisible: layoutSelectors.selectMenuVisible(state),
});

export default connect(select)(Menu);
