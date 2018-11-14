import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate, formatTweet } from '../utils/helpers';

class Tweet extends Component {
  render() {
    const { tweet } = this.props;
    console.log(tweet);
    return (
      <div className='tweet'>
        <p>{tweet.text}</p>
        <div><span>{tweet.name}</span> - {formatDate(tweet.timestamp)}</div>
        <div><span>{tweet.likes}</span> - {tweet.hasLiked ? 'I Like' : 'No Like'}</div>
      </div>
    );
  }
}

function mapStateToProps({ users, tweets, authedUser }, { tweetId }) {
  const tweet = tweets[tweetId];
  const author = users[tweet.author];

  return {
    tweet: formatTweet(tweet, author, authedUser),
  }
}

export default connect(mapStateToProps)(Tweet);