import './index.css';
import React from 'react';
import Image from 'next/image';
import { Locale } from '@/internationalization/i18n-config';
import { getDictionary } from '@/internationalization/get-dictionary';

// Utils
import { SellCircle, TargetCircle } from './utils/circles/circles';

// Components
import WeeklySell from './components/WeeklySell';

// Images
import SmileImage from '@/assets/images/projects/dashboard/smile.svg';

interface PropTypes {
  params: { lang: Locale };
}

export async function generateMetadata() {
  return {
    title: 'Dashboard'
  };
}

const Dashboard = async ({ params: { lang } }: PropTypes) => {
  const dictionary = await getDictionary(lang);
  const dictionaryD = dictionary['projects-page'].projects.dashboard;
  return (
    <>
      <div className="app grid w-fit h-fit min-h-full font-inter">
        {/* NPS */}
        <div className="box grid gap-[1.5rem]">
          <div className="top text-center">{dictionaryD.nps.title}</div>
          <div
            className={
              'grid gap-[1.6rem] h-40 text-[#81FBB8] text-lg' +
              ' place-content-center justify-items-center'
            }
          >
            <Image
              alt="smile"
              src={SmileImage}
              className="h-14 w-14 rounded-full"
            />

            {dictionaryD.nps.result}
          </div>
          <div className="bottom gap-[1rem]">
            <span>NPS score</span>
            <span>75</span>
          </div>
        </div>

        {/* Closed Sales */}
        <div className="box sell grid">
          <div className="top text-center">{dictionaryD.circle.title}</div>
          <div className="middle">
            <SellCircle percentage={70} />
            <div className="content">
              <h3>70%</h3>
              <p>{dictionaryD.circle.reached}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="item">
              <span className="before:bg-[#4A4556]">
                {dictionaryD.circle.expected}
              </span>
              <span>100</span>
            </div>
            <div className="item">
              <span className="before:bg-gradient-to-r from-[#CE9FFC] to-[#7367F0]">
                {dictionaryD.circle.reached}
              </span>
              <span>70</span>
            </div>
          </div>
        </div>

        {/* Monthly Goal */}
        <div className="box target grid">
          <div className="top text-center">Meta mensal</div>
          <div className="middle">
            <TargetCircle percentage={90} />
            <div className="content">
              <h3>90%</h3>
              <p>{dictionaryD.circle.reached}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="item">
              <span className="before:bg-[#4A4556]">
                {dictionaryD.circle.expected}
              </span>
              <span>R$ 70k</span>
            </div>
            <div className="item">
              <span className="before:bg-gradient-to-r from-[#DF9780] to-[#A66DE9]">
                {dictionaryD.circle.reached}
              </span>
              <span>R$ 63k</span>
            </div>
          </div>
        </div>

        {/* Gráfico de vendas da semana */}
        <WeeklySell dictionary={dictionary} />
      </div>
    </>
  );
};

export default Dashboard;
