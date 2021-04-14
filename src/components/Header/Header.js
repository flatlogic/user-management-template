import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { NavbarTypes } from '../../reducers/layout';
import {
  Navbar,
  Nav,
  Dropdown,
  NavItem,
  NavLink,
  NavbarText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip,
  InputGroupAddon,
  InputGroup,
  Input,
  Form,
  FormGroup,
} from 'reactstrap';
import chroma from 'chroma-js';
import cx from 'classnames';
import { logoutUser } from 'actions/auth';
import { toggleSidebar, openSidebar, closeSidebar, changeActiveSidebarItem } from '../../actions/navigation';

import adminDefault from '../../images/people/chat2.png';
import MenuIcon from '../../images/sidebar/Fill/MenuIcon';
import FlipIcon from '../../images/sidebar/Outline/Flip';
import CloseIcon from '../../images/sidebar/Fill/CloseIconOne';
import SearchIcon from '../../images/sidebar/Outline/Search';
import SettingsIcon from '../../images/sidebar/Outline/Settings';
import PersonIcon from '../../images/sidebar/Outline/Person';
import PowerIcon from '../../images/sidebar/Outline/Power';
import s from './Header.module.scss';

class Header extends React.Component {
  static propTypes = {
    sidebarOpened: PropTypes.bool,
    sidebarStatic: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.switchSidebar = this.switchSidebar.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.doLogout = this.doLogout.bind(this);

    this.state = {
      menuOpen: false,
      focus: false,
      showNewMessage: false,
      hideMessage: true,
      run: true
    };
  }

  toggleFocus = () => {
    this.setState({ focus: !this.state.focus })
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  // collapse/uncolappse
  switchSidebar() {
    if (this.props.sidebarOpened) {
      this.props.dispatch(closeSidebar());
      this.props.dispatch(changeActiveSidebarItem(null));
    } else {
      const paths = this.props.location.pathname.split('/');
      paths.pop();
      this.props.dispatch(openSidebar());
      this.props.dispatch(changeActiveSidebarItem(paths.join('/')));
    }
  }

  // static/non-static
  toggleSidebar() {
    this.props.dispatch(toggleSidebar(!this.props.sidebarStatic));
    if (this.props.sidebarStatic) {
      localStorage.setItem('staticSidebar', 'false');
      this.props.dispatch(changeActiveSidebarItem(null));
    } else {
      localStorage.setItem('staticSidebar', 'true');
      const paths = this.props.location.pathname.split('/');
      paths.pop();
      this.props.dispatch(changeActiveSidebarItem(paths.join('/')));
    }
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }
  render() {
    const { focus } = this.state;
    const { navbarType, navbarColor, openUsersList } = this.props;

    const user = this.props.currentUser;
    const avatar = user && user.avatar && user.avatar.length && user.avatar[0].publicUrl;
    const firstUserLetter = user && (user.firstName|| user.email)[0].toUpperCase();

    return (
      <Navbar className={`${s.root} d-print-none ${navbarType === NavbarTypes.FLOATING ? s.navbarFloatingType : ''}`} style={{backgroundColor: navbarColor, zIndex: !openUsersList ? 100 : 0}}>
       <Nav>
          <NavItem>
            <NavLink className={`d-md-down-none ml-5 ${s.toggleSidebar}`} id="toggleSidebar" onClick={this.toggleSidebar}>
              <span className={s.headerSvgFlipColor}>
                <MenuIcon  maskId={1001}/>
              </span>
            </NavLink>
            <UncontrolledTooltip placement="bottom" target="toggleSidebar">
              Turn on/off<br />sidebar<br />collapsing
            </UncontrolledTooltip>
            <NavLink className="fs-lg d-lg-none" onClick={this.switchSidebar}>
            <span 
              className={`rounded rounded-lg d-md-none d-sm-down-block`} style={{marginTop: 7}}>
                <span 
                  className={s.headerSvgFlipColor}
                  style={{fontSize: 30}} 
                ><MenuIcon maskId={1000}/></span>
              </span>
              <span className={`ml-3 d-sm-down-none ${s.headerSvgFlipColor}`}>
                <MenuIcon maskId={999}/>
              </span>
            </NavLink>
          </NavItem>
          <NavItem className="d-sm-down-none">
            <NavLink className="px-2">
              <span className={s.headerSvgFlipColor}>
                <FlipIcon />
              </span>
            </NavLink>
          </NavItem>
          <NavItem className="d-sm-down-none">
            <NavLink className="px-2">
              <span className={s.headerSvgFlipColor}>
                <CloseIcon />
              </span>
            </NavLink>
          </NavItem>

        </Nav>

        <Form className={`d-sm-down-none ml-5 ${s.headerSearchInput}`} inline>
          <FormGroup>
            <InputGroup onFocus={this.toggleFocus} onBlur={this.toggleFocus} className={
              cx('input-group-no-border', {'focus' : !!focus})
            }>
              <InputGroupAddon addonType="prepend">
              <span className={`${s.headerSvgFlipColor}`}><SearchIcon /></span>
              </InputGroupAddon>
              <Input id="search-input" placeholder="Search Dashboard" className={cx({'focus' : !!focus})} />
            </InputGroup>
          </FormGroup>
        </Form>

        <NavLink  className={`${s.navbarBrand} d-md-none ${s.headerSvgFlipColor}`}>
          <i className="la la-circle text-primary mr-n-sm" />
          <i className="la la-circle text-danger" />
          &nbsp;
          react um
          &nbsp;
          <i className="la la-circle text-danger mr-n-sm" />
          <i className="la la-circle text-primary" />
        </NavLink>

        <Nav className="ml-auto">
          <NavbarText>
            <span className={`${s.avatar} rounded-circle float-left mr-2`}>
              {avatar ? (
                <img src={avatar} onError={e => e.target.src = adminDefault} alt="..." title={user && (user.firstName || user.email)} />
              ) : user && user.role === 'admin' ? (
                <img src={adminDefault} onError={e => e.target.src = adminDefault} alt="..." title={user && (user.firstName || user.email)} />
              ) : <span title={user && (user.firstName || user.email)}>{firstUserLetter}</span>
              }
            </span>
            <span className={`d-sm-down-none ${chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""}`}>{user && (user.firstName || user.email)}</span>
          </NavbarText>
          <Dropdown nav isOpen={this.state.menuOpen} toggle={this.toggleMenu} className="tutorial-dropdown pr-4">
            <DropdownToggle nav className={`${s.mobileCog}`}>
              <span className={`${s.headerSvgFlipColor}`}>
                <SettingsIcon/>
              </span>
            </DropdownToggle>
            <DropdownMenu right className={`${s.headerDropdownLinks} super-colors`}>
              <DropdownItem href="/#/app/profile"><span className={s.headerDropdownIcon}><PersonIcon/></span> My Account</DropdownItem>
              <DropdownItem onClick={this.doLogout}><span className={s.headerDropdownIcon}><PowerIcon/></span> Log Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    currentUser: store.auth.currentUser,
    navbarType: store.layout.navbarType,
    navbarColor: store.layout.navbarColor,
  };
}

export default withRouter(connect(mapStateToProps)(Header));

