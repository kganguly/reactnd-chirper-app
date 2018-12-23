import React, { Component } from 'react';
import { handleAddTweet } from '../actions/tweets';
import { dispatch } from 'rxjs/internal/observable/range';

class NewTweet extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    const text = e.target.value;

    this.setState(() => ({
      text,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { text } = this.state;

    // TODO: Add tweet to store

    console.log('New Tweet:', text);

    dispatch(handleAddTweet(text));

    this.setState(() => ({
      text: '',
    }));
  }

  render() {
    const { text } = this.state;
    const tweetsLeft = 280 - text.length;

    /* TODO: Redirect to home view if submitted */

    return (
      <div>
        <h3 className='center'>Compose New Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetsLeft <= 100 && (
            <div className='tweet-length'>
              {tweetsLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={text === ''}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewTweet;