'use client';
import './index.css';
import { FormEvent, KeyboardEvent, useState } from 'react';

// Components
import Tweet from '../../components/Tweet';
import HeaderUITwitter from '../../components/HeaderUITwitter';
import { PaperPlaneRight } from 'phosphor-react';

// Local Const's
const answersInitial = ['Parabéns pelo progresso.'];

const UITwitterTweet = () => {
  // Let's & Const's
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState(answersInitial);

  // Functions
  const createNewAnswer = (event: FormEvent) => {
    event.preventDefault();
    setAnswers((anwers) => [newAnswer, ...anwers]);
    setNewAnswer('');
  };

  console.log('Render');

  const handleOnKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers((anwers) => [newAnswer, ...anwers]);
      setNewAnswer('');
    }
  };

  return (
    <div className="content">
      <main className="status">
        {/* Header */}
        <HeaderUITwitter title="Tweet" />

        <Tweet
          content={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quibusdam, voluptate tempore est temporibus quidem labore deleniti pariatur aspernatur fugiat voluptatibus distinctio id numquam magnam repellat culpa ullam ea ad?'
          }
        />

        <div className="separator" />

        <form onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img
              src="https://github.com/jvmendesavila.png"
              alt="Victor Mendes Ávila"
            />
            <textarea
              id="tweet"
              placeholder="Tweet your answer"
              onKeyDown={handleOnKeyDown}
              onChange={(e) => {
                setNewAnswer(e.target.value);
              }}
            ></textarea>
          </label>

          <button type="submit">
            <PaperPlaneRight />
            <span>Answer</span>
          </button>
        </form>

        {answers.map((a) => (
          <Tweet key={a} content={a} />
        ))}
      </main>
    </div>
  );
};

export default UITwitterTweet;
