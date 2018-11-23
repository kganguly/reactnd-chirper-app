import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate, formatTweet } from '../utils/helpers';
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';

class Tweet extends Component {
  handleLike = e => {
    e.preventDefault();

    // TODO: Handle like tweet
  }

  toParent = (e, id) => {
    e.preventDefault();
    // TODO: Redirect to parent tweet
  };

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
            {parent && (<button className='replying-to' onClick={e => this.toParent(e, parent.id)}>Replying to @{parent.author}</button>)}
            <p>{text}</p>
          </div>

          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
            <span>{replies !== 0 && replies}</span>
            <button className='heart-button' onClick={this.handleLike}>
              {hasLiked
                ? <TiHeartFullOutline className='tweet-icon hearted' />
                : <TiHeartOutline className='tweet-icon' />}
            </button>
            <span>{likes !== 0 && likes}</span>
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