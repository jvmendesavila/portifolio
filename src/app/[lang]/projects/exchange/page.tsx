import ExchangeComponent from '@/components/pages/projects/exchange';

export async function generateMetadata() {
  return {
    title: 'Exchange'
  };
}

const Exchange = async () => {
  return <ExchangeComponent />;
};

export default Exchange;
