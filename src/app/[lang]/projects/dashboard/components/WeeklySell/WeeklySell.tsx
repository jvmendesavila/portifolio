import './index.css';
import React from 'react';

// Types
interface PropTypes {
  dictionary: any;
}

const WeeklySell = ({ dictionary }: PropTypes) => {
  const dictionaryD = dictionary['projects-page'].projects.dashboard;
  const dictionaryWeek = dictionary.utils.weekdaysDaysResume;
  return (
    <div className="box weekly-sell gap-[3rem] grid">
      <div className="top">{dictionaryD.sales.title}</div>

      <div className="wrapper">
        <div className="left grid">
          <div className="most-sell grid">
            <span>{dictionaryD.sales.moreSales}</span>
            {dictionaryWeek.Wednesday}
          </div>
          <div className="less-sell grid">
            <span>{dictionaryD.sales.lessSales}</span>
            {dictionaryWeek.Sunday}
          </div>
        </div>
        <div className="right">
          <div className="bars">
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{ '--height': '3.9rem' } as React.CSSProperties}
              ></div>
              <span>{dictionaryWeek.Sunday.substr(0, 3)}</span>
            </div>
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{ '--height': '11.5rem' } as React.CSSProperties}
              ></div>
              <span>{dictionaryWeek.Monday.substr(0, 3)}</span>
            </div>
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{ '--height': '7.6rem' } as React.CSSProperties}
              ></div>
              <span>{dictionaryWeek.Tuesday.substr(0, 3)}</span>
            </div>
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{ '--height': '15.9rem' } as React.CSSProperties}
              ></div>
              <span>{dictionaryWeek.Wednesday.substr(0, 3)}</span>
            </div>
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{ '--height': '12.9rem' } as React.CSSProperties}
              ></div>
              <span>{dictionaryWeek.Thursday.substr(0, 3)}</span>
            </div>
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{ '--height': '12rem' } as React.CSSProperties}
              ></div>
              <span>{dictionaryWeek.Friday.substr(0, 3)}</span>
            </div>
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{ '--height': '6.9rem' } as React.CSSProperties}
              ></div>
              <span>{dictionaryWeek.Saturday.substr(0, 3)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySell;
