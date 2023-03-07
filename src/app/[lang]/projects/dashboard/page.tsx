import './index.css';
import React from 'react';
import Image from 'next/image';

// Images
import SmileImage from '@/assets/images/projects/dashboard/smile.svg';

// Types
interface GradientCircle {
  percentage: number;
}

const SellCircle = ({ percentage }: GradientCircle) => {
  return (
    <svg
      viewBox="0 0 232 232"
      style={{ '--percentage': percentage } as React.CSSProperties}
    >
      <circle
        cx="50%"
        cy="50%"
        r="98.5"
        fill="none"
        opacity="0.1"
        stroke="#D9D9D9"
      />
      <circle cx="50%" cy="50%" r="98.5" stroke="url(#sell_circle)" />
      <defs>
        <linearGradient
          id="sell_circle"
          x1="-9"
          y1="82"
          x2="145"
          y2="178"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CE9FFC" />
          <stop offset="1" stopColor="#7367F0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const TargetCircle = ({ percentage }: GradientCircle) => {
  return (
    <svg
      viewBox="0 0 232 232"
      style={{ '--percentage': percentage } as React.CSSProperties}
    >
      <circle
        cx="50%"
        cy="50%"
        r="98.5"
        fill="none"
        opacity="0.1"
        stroke="#D9D9D9"
      />
      <circle cx="50%" cy="50%" r="98.5" stroke="url(#target_circle)" />
      <defs>
        <linearGradient
          id="target_circle"
          x1="1.97421e-07"
          y1="82"
          x2="154"
          y2="178"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DF9780" />
          <stop offset="1" stopColor="#A66DE9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Dashboard = () => {
  return (
    <>
      <div className="app grid w-fit h-fit min-h-full inter">
        <div className="box nps grid">
          <div className="top text-center">NPS geral</div>
          <div className="middle grid">
            <Image
              src={SmileImage}
              className="h-14 w-14 rounded-full"
              alt="Victor Mendes Avila"
            />
            Excelente
          </div>
          <div className="bottom">
            <span>NPS score</span>
            <span>75</span>
          </div>
        </div>
        <div className="box sell grid">
          <div className="top text-center">Vendas fechadas</div>
          <div className="middle">
            <SellCircle percentage={70} />
            <div className="content">
              <h3>70%</h3>
              <p>alcançada</p>
            </div>
          </div>
          <div className="bottom">
            <div className="item">
              <span className="before:bg-[#4A4556]">Esperado</span>
              <span>100</span>
            </div>
            <div className="item">
              <span className="before:bg-gradient-to-r from-[#CE9FFC] to-[#7367F0]">
                Alcançado
              </span>
              <span>70</span>
            </div>
          </div>
        </div>
        <div className="box target grid">
          <div className="top text-center">Meta mensal</div>
          <div className="middle">
            <TargetCircle percentage={90} />
            <div className="content">
              <h3>90%</h3>
              <p>alcançada</p>
            </div>
          </div>
          <div className="bottom">
            <div className="item">
              <span className="before:bg-[#4A4556]">Esperado</span>
              <span>R$ 70k</span>
            </div>
            <div className="item">
              <span className="before:bg-gradient-to-r from-[#DF9780] to-[#A66DE9]">
                Alcançado
              </span>
              <span>R$ 63k</span>
            </div>
          </div>
        </div>
        <div className="box weekly-sell grid">
          <div className="top">Vendas por dia da semana</div>

          <div className="wrapper">
            <div className="left grid">
              <div className="most-sell grid">
                <span>Dia com mais vendas</span>
                quarta-feira
              </div>
              <div className="less-sell grid">
                <span>Dia com menos vendas</span>
                domingo
              </div>
            </div>
            <div className="right">
              <div className="bars">
                <div className="bar-wrapper">
                  <div
                    className="bar"
                    style={{ '--height': '3.9rem' } as React.CSSProperties}
                  ></div>
                  <span>dom</span>
                </div>
                <div className="bar-wrapper">
                  <div
                    className="bar"
                    style={{ '--height': '11.5rem' } as React.CSSProperties}
                  ></div>
                  <span>seg</span>
                </div>
                <div className="bar-wrapper">
                  <div
                    className="bar"
                    style={{ '--height': '7.6rem' } as React.CSSProperties}
                  ></div>
                  <span>ter</span>
                </div>
                <div className="bar-wrapper">
                  <div
                    className="bar"
                    style={{ '--height': '15.9rem' } as React.CSSProperties}
                  ></div>
                  <span>qua</span>
                </div>
                <div className="bar-wrapper">
                  <div
                    className="bar"
                    style={{ '--height': '12.9rem' } as React.CSSProperties}
                  ></div>
                  <span>qui</span>
                </div>
                <div className="bar-wrapper">
                  <div
                    className="bar"
                    style={{ '--height': '12rem' } as React.CSSProperties}
                  ></div>
                  <span>sex</span>
                </div>
                <div className="bar-wrapper">
                  <div
                    className="bar"
                    style={{ '--height': '6.9rem' } as React.CSSProperties}
                  ></div>
                  <span>sab</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
