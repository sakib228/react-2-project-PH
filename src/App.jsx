import { Suspense } from 'react';
import './App.css';
import OwnNavBar from './components/OwnNavBar/OwnNavBar';
import PricingOperation from './components/pricingOperation/pricingOperation';

// api fetching is done in the pricingOperation component ---
const cardData = fetch('/public/priceData.json')
  .then((res) => res.json());

function App() {
  return (
    <>
      <OwnNavBar />
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        }
      >
        <PricingOperation cardData={cardData} />
      </Suspense>
      {/* <DaisyNavBar /> */}
      {/* <h1 className="text-2xl text-amber-700 underline">Get started</h1> */}
    </>
  );
}

export default App;
