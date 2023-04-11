'use client';
import './index.css';
import { FormEvent, KeyboardEvent, useState } from 'react';

// Components
import Tweet from './components/Tweet';
import HeaderUITwitter from './components/HeaderUITwitter';

// Local Const's
const tweetsInitial = ['Meu primeiro tweet', 'Teste', 'Deu certo tweetar!'];

const UITwitter = () => {
  // Let's & Const's
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState(tweetsInitial);

  // Functions
  const createNewTweet = (event: FormEvent) => {
    event.preventDefault();
    setTweets((tweets) => [newTweet, ...tweets]);
    setNewTweet('');
  };

  const handleOnKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets((tweets) => [newTweet, ...tweets]);
      setNewTweet('');
    }
  };

  return (
    <div className="content">
      <main className="timeline">
        {/* Header */}
        <HeaderUITwitter title="Home" />

        <form onSubmit={createNewTweet} className="new-tweet-form">
          <label htmlFor="tweet">
            <img
              src="https://github.com/jvmendesavila.png"
              alt="Victor Mendes Ávila"
            />
            <textarea
              id="tweet"
              placeholder="What's happening ?"
              onKeyDown={handleOnKeyDown}
              onChange={(e) => {
                setNewTweet(e.target.value);
              }}
            ></textarea>
          </label>

          <button type="submit">Tweet</button>
        </form>

        <div className="separator" />

        {tweets.map((t) => (
          <Tweet key={t} content={t} />
        ))}
      </main>
    </div>
  );
};

export default UITwitter;
