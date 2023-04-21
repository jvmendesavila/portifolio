import './index.css';

import Link from 'next/link';

// Icons
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';

const Tweet = (props: { content: string }) => {
  return (
    <Link href="/projects/ui-twitter/tweet" className="tweet">
      <img
        src="https://github.com/jvmendesavila.png"
        alt="Victor Mendes Ávila"
      />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Victor Mendes Ávila</strong>
          <span>@victorma</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Tweet;
