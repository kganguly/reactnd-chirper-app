import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { tweetIds } = this.props;

    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {
            tweetIds.map(tweetId => (
              <li key={tweetId}>
                <div>TWEET ID: {tweetId}</div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp),
  };
}

export default connect(mapStateToProps)(Dashboard);