import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import classnames from 'classnames';
import { Switch, Route, withRouter } from 'react-router';
import Hammer from 'rc-hammerjs';

import Header from './DocumentationHeader';
import Sidebar from './DocumentationSidebar';
import { openSidebar, closeSidebar, changeActiveSidebarItem, toggleSidebar } from '../actions/navigation';
import s from '../components/Layout/Layout.module.scss';
import sd from './styles.module.scss';

import Overview from './pages/getting-started/Overview'
import Licences from './pages/getting-started/Licences';
import QuickStart from './pages/getting-started/QuickStart';

class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
  };

  constructor(props) {
    super(props);
    this.handleSwipe = this.handleSwipe.bind(this);

    this.state = {
      chatOpen: false,
      width: window.innerWidth,
    };

  }


  componentDidMount() {
    const staticSidebar = JSON.parse(localStorage.getItem('staticSidebar'));
    if (staticSidebar) {
      this.props.dispatch(toggleSidebar());
    } else if (this.props.sidebarOpened) {
      setTimeout(() => {
        this.props.dispatch(closeSidebar());
        this.props.dispatch(changeActiveSidebarItem(null));
      }, 2500);
    }

    window.addEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
    })

    if(window.innerWidth < 768 && this.props.sidebarOpened) {
      this.props.dispatch(closeSidebar());
    }
  }

  handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4 && !this.state.chatOpen) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          sd.root,
          this.state.width > 768 && s.sidebarStatic,
          this.state.width < 768 && !this.props.sidebarOpened ? s.sidebarClose : '',
        ].join(' ')}
      >
        <Header />
        <div>
          <Hammer onSwipe={this.handleSwipe}>
            <main className={classnames(s.content, sd.content)}>
              <div className="container">
                <div className="row">
                  <Sidebar width={this.state.width} />
                  <Col xl={10} md={9}>
                    <Switch>
                      <Route path="/documentation/getting-started/overview" exact component={Overview} />
                      <Route path="/documentation/getting-started/licences" exact component={Licences} />
                      <Route path="/documentation/getting-started/quick-start" exact component={QuickStart} />
                    </Switch>
                  </Col>
                </div>
              </div>
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
