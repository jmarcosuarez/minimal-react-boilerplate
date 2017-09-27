import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Button } from '../../components';
import * as actions from '../../redux/actions';

import styles from './Home.css';

class HomePage extends Component {
  componentDidMount() {
    this.props.onSendGetFriendsRequest();
  }

  renderRow = friends =>
    <li key={friends.id}>
      {friends.first_name}
    </li>;

  renderLoader() {
    if (this.props.isFetching) {
      return (
        <div className={styles.pageLoader}>
          Loading friends.
        </div>
      );
    }
    return null;
  }

  renderError() {
    if (this.props.error) {
      return (
        <div className={styles.pageError}>
          Something went wrong.
        </div>
      );
    }
    return null;
  }

  renderContent() {
    if (this.props.friends && this.props.friends.length) {
      return (
        <div className={styles.pageContent}>
          {this.renderFriends()}
        </div>
      );
    }
    return null;
  }

  renderFriends() {
    return (
      <div className={styles.friends}>
        <h1>friends</h1>
        <ul>
          {this.props.friends.map(this.renderRow)}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <Layout title="Welcome!">
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.logo}>
              <p>Logo</p>
            </div>

            <h1>This is the main home Page</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupifriendst non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <ul>
              {this.renderLoader()}
              {this.renderError()}
              {this.renderContent()}
            </ul>
            <Button to="/">Get started</Button>

          </div>
        </div>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  onSendGetFriendsRequest: PropTypes.func.isRequired,
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
  })),

};

HomePage.defaultProps = {
  isFetching: false,
  error: '',
  friends: [],
};


function mapStateToProps(state) {
  const { isFetching, error, friends } = state.main;
  return {
    isFetching,
    error,
    friends,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSendGetFriendsRequest: bindActionCreators(actions.sendGetFriendsRequest, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
