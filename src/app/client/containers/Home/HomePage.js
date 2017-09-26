import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Button } from '../../components';
import * as actions from '../../redux/actions';

import styles from './Home.css';

class HomePage extends Component {
  componentDidMount() {
    if (this.props.friends !== []) this.props.onFetchFriends();
  }

  renderRow = friends =>
    <li key={friends.id}>
      {friends.first_name}
    </li>;

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
            Async list of friends:
            <ul>
              {this.props.friends.map(this.renderRow)}
            </ul>
            <Button to="/">Get started</Button>

          </div>
        </div>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  onFetchFriends: PropTypes.func.isRequired,
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
  })),
};

HomePage.defaultProps = {
  friends: [],
};


function mapStateToProps(state) {
  const { friends } = state.main;
  return {
    friends,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchFriends: bindActionCreators(actions.fetchFriends, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
