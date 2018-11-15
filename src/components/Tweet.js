import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate, formatTweet } from '../utils/helpers';
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';

class Tweet extends Component {
  render() {
    const { tweet } = this.props;

    if (tweet === null) {
      return <p>This tweet does not exist.</p>
    }

    console.log(this.props);

    const { avatar, text, name, timestamp, parent, likes, hasLiked, replies } = tweet;

    return (
      <div className='tweet'>
        <img src={avatar} alt={`Avatar of ${name}`} className='avatar'></img>
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (<button className='replying-to' onClick=''>Replying to @{parent.author}</button>)}
          </div>
          <p>{text}</p>
          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
            {replies > 0 ? (<span>{replies}</span>) : null}
            {hasLiked ? (<TiHeartFullOutline className='tweet-icon hearted' />) : (<TiHeartOutline className='tweet-icon' />)}
            {likes > 0 ? (<span>{likes}</span>) : null}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, tweets, authedUser }, { tweetId }) {
  const tweet = tweets[tweetId];
  const author = users[tweet.author];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    tweet: tweet ? formatTweet(tweet, author, authedUser, parentTweet) : null,
  }
}

export default connect(mapStateToProps)(Tweet);