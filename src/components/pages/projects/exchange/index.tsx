'use client';
import './index.css';
import React from 'react';
import Image from 'next/image';
import { Locale } from '@/internationalization/i18n-config';

// Images
import ArrowDown from '@/assets/images/projects/exchange/arrow-down.svg';
import ArrowsExange from '@/assets/images/projects/exchange/arrows-exchange.svg';
import ExchangeChart from '@/components/pages/projects/exchange/ExchangeChart';

// Types
interface PropTypes {
  params: { lang: Locale };
}

interface CoinType {
  icon: string;
  label: 'BRL' | 'USD' | 'EUR' | 'GBP';
  symbol: 'R$' | '$' | '£' | '€';
  selectedInitial: boolean;
  selectedFinal: boolean;
  price: {
    BRL: number;
    USD: number;
    EUR: number;
    GBP: number;
  };
}

// Initial States
const initialCoins: CoinType[] = [
  {
    icon: 'fi-br',
    label: 'BRL',
    symbol: 'R$',
    selectedInitial: false,
    selectedFinal: true,
    price: {
      BRL: 1,
      USD: 0.19,
      EUR: 0.18,
      GBP: 0.16
    }
  },
  {
    icon: 'fi-us',
    label: 'USD',
    symbol: '$',
    selectedInitial: true,
    selectedFinal: false,
    price: {
      USD: 1,
      BRL: 5.22,
      EUR: 0.94,
      GBP: 0.83
    }
  },
  {
    icon: 'fi-eu',
    label: 'EUR',
    symbol: '€',
    selectedInitial: false,
    selectedFinal: false,
    price: {
      EUR: 1,
      BRL: 5.56,
      USD: 1.07,
      GBP: 0.89
    }
  },
  {
    icon: 'fi-gb',
    label: 'GBP',
    symbol: '£',
    selectedInitial: false,
    selectedFinal: false,
    price: {
      GBP: 1,
      BRL: 6.28,
      USD: 1.2,
      EUR: 1.13
    }
  }
];

const initialRanges = [
  {
    range: '1D',
    selected: false
  },
  {
    range: '5D',
    selected: false
  },
  {
    range: '1M',
    selected: true
  },
  {
    range: '1A',
    selected: false
  },
  {
    range: '5A',
    selected: false
  },
  {
    range: 'Max',
    selected: false
  }
];

export async function generateMetadata() {
  return {
    title: 'Exchange'
  };
}

const ExchangeComponent = () => {
  const [input, setInput] = React.useState('');
  const [ranges, setRanges] = React.useState(initialRanges);

  const [coins, setCoins] = React.useState<CoinType[]>(initialCoins);

  const initialCoin = React.useMemo(
    () => coins.filter((c) => c.selectedInitial)[0],
    [coins]
  );

  const finalCoin = React.useMemo(
    () => coins.filter((c) => c.selectedFinal)[0],
    [coins]
  );

  const priceValue = React.useMemo(
    () =>
      (
        parseFloat(input ? input : '0') * initialCoin.price[finalCoin.label]
      ).toFixed(2),
    [input, coins]
  );

  const selectInitialCoin = (s: any) => () => {
    setCoins((oldCoins) =>
      oldCoins.map((oldC) => ({
        ...oldC,
        selectedInitial: oldC.label === s.label
      }))
    );
  };

  const selectFinalCoin = (s: any) => () => {
    setCoins((oldCoins) =>
      oldCoins.map((oldC) => ({
        ...oldC,
        selectedFinal: oldC.label === s.label
      }))
    );
  };

  const changeCoinPosition = () => {
    setCoins((oldCoins) =>
      oldCoins.map((oldC) => {
        if (oldC.selectedInitial) {
          return { ...oldC, selectedInitial: false, selectedFinal: true };
        } else if (oldC.selectedFinal) {
          return { ...oldC, selectedFinal: false, selectedInitial: true };
        } else return oldC;
      })
    );
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-center text-white font-inter">
        <div className="main justify-self-center">
          <section className="conversor">
            <div className="text-2xl font-bold">
              Conversor de moedas
              <div className="wrapper">
                <div className="money-wrapper items-center">
                  <span className="mr-2 w-6">{initialCoin.symbol}</span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="amount bg-white"
                  />
                  <div className="dropdown z-10">
                    <div className="selected">
                      <span className={`fi ${initialCoin.icon} fis`} />
                      {initialCoin.label}

                      <Image
                        src={ArrowDown}
                        className="h-[0.6rem] w-[0.6rem]"
                        alt=""
                      />
                    </div>

                    <ul>
                      {coins.map((s) => (
                        <li key={s.label} onClick={selectInitialCoin(s)}>
                          <span className={`fi ${s.icon} fis`} />
                          {s.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="middle">
                  <Image
                    alt=""
                    src={ArrowsExange}
                    onClick={changeCoinPosition}
                    className="h-4 w-4 cursor-pointer"
                  />
                </div>
                <div className="money-wrapper">
                  <span className="mr-2 w-6">{finalCoin.symbol}</span>
                  <input
                    readOnly
                    type="text"
                    value={priceValue}
                    className="amount bg-white"
                  />

                  <div className="dropdown">
                    <div className="selected">
                      <span className={`fi ${finalCoin.icon} fis`} />
                      {finalCoin.label}
                      <Image
                        src={ArrowDown}
                        className="h-[0.6rem] w-[0.6rem]"
                        alt=""
                      />
                    </div>

                    <ul>
                      {coins.map((sF) => (
                        <li key={sF.label} onClick={selectFinalCoin(sF)}>
                          <span className={`fi ${sF.icon} fis`} />
                          {sF.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="cambio">
            <div className="text-2xl font-bold">
              Taxa de câmbio
              <div className="wrapper w-full">
                <ExchangeChart />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              {ranges.map((r) => (
                <span
                  key={r.range}
                  className={`rangeButton ${r.selected && 'selectedRange'}`}
                  onClick={() =>
                    setRanges((oldRanges) =>
                      oldRanges.map((oldR) => ({
                        ...oldR,
                        selected: oldR.range === r.range
                      }))
                    )
                  }
                >
                  {r.range}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ExchangeComponent;
