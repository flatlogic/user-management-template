import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import s from '../components/Sidebar/Sidebar.module.scss';
import sd from './styles.module.scss'
import { LinksGroup } from './components';

import { openSidebar, closeSidebar, changeActiveSidebarItem } from '../actions/navigation';
import isScreen from '../core/screenHelper';

class Sidebar extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
    activeItem: '',
  };

  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    if (!this.props.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
      const paths = this.props.location.pathname.split('/');
      paths.pop();
      this.props.dispatch(openSidebar());
      this.props.dispatch(changeActiveSidebarItem(paths.join('/')));
    }
  }

  onMouseLeave() {
    if (!this.props.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
      this.props.dispatch(closeSidebar());
      this.props.dispatch(changeActiveSidebarItem(null));
    }
  }

  render() {
    return (
      <Col xl={2} md={3}>
        <nav
          className={[s.root, sd.sidebar, this.props.width > 768 && s.staticSidebar].join(' ')}
        >
          <ul>
            <LinksGroup
              onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
              activeItem={this.props.activeItem}
              header="Overview"
              isHeader
              link="/documentation/getting-started/overview"
              index="overview"
            />
            <LinksGroup
              onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
              activeItem={this.props.activeItem}
              header="Licences"
              isHeader
              link="/documentation/getting-started/licences"
              index="licences"
            />
            <LinksGroup
              onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
              activeItem={this.props.activeItem}
              header="Quick Start"
              isHeader
              link="/documentation/getting-started/quick-start"
              index="quick-start"
            />
          </ul>

          <a className={classnames('d-md-down-none', sd.company)} href="http://flatlogic.com/" target="_blank" rel="noopener noreferrer">
            <img alt="company logo" src="https://cdn.dribbble.com/users/883507/avatars/small/7ca04141e335237d393ab41008adb46d.png?1509465697"/>
            Proudly built and maintained by <br/> Flatlogic
          </a>
        </nav >
      </Col>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
