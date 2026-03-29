import axios from 'axios';
import { Suspense } from 'react';
import './App.css';
import OwnNavBar from './components/OwnNavBar/OwnNavBar';
import PricingOperation from './components/pricingOperation/pricingOperation';
import CustomerData from './components/studentCharts/customerData';
import StudentChart from './components/studentCharts/studentChart';
import StudentMark from './components/studentMarks/studentMark';

// api fetching is done in the pricingOperation component ---
const cardData = fetch('/public/priceData.json').then((res) => res.json());

// student mark api fetching is done in the pricingOperation component ---
const studentMarkData = axios.get('/public/marks.json');

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
      {/* charts  */}
      <StudentChart />
      <CustomerData />
      <Suspense fallback={'loading loading-infinity loading-xl'}>
        <StudentMark studentMarkData={studentMarkData} />
      </Suspense>
    </>
  );
}

export default App;
