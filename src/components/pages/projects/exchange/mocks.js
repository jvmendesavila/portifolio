export const initialCoins = [
  {
    label: 'BRL',
    icon: 'fi-br',
    selectedInitial: false,
    selectedFinal: true,
    price: {
      'BRL': 1,
      'USD': 0.19,
      'EUR': 0.18,
      'GBP': 0.16
    }
  },
  {
    label: 'USD',
    icon: 'fi-us',
    selectedInitial: true,
    selectedFinal: false,
    price: {
      'USD': 1,
      'BRL': 5.22,
      'EUR': 0.94,
      'GBP': 0.83
    }
  },
  {
    label: 'EUR',
    icon: 'fi-eu',
    selectedInitial: false,
    selectedFinal: false,
    price: {
      'EUR': 1,
      'BRL': 5.56,
      'USD': 1.07,
      'GBP': 0.89
    }
  },
  {
    label: 'GBP',
    icon: 'fi-gb',
    selectedInitial: false,
    selectedFinal: false,
    price: {
      'GBP': 1,
      'BRL': 6.28,
      'USD': 1.2,
      'EUR': 1.13
    }
  }
];

export const initialRanges = [
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
