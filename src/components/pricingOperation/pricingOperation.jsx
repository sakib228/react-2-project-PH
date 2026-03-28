import React from 'react';
import DataLoad from '../dataLoad/dataLoad';

const PricingOperation = ({ cardData }) => {
  const promiseData =React.use(cardData);
  console.log(cardData);

  return (
    <div>
      <h2 className='flex justify-center items-center text-amber-200 font-bold text-2xl mb-10'> Pricing Details </h2>
      <div className='grid grid-cols-1 gap-6  m-5 lg:grid-cols-3 md:grid-cols-2' >
        {
          promiseData.map((data) => (
            <DataLoad key={data.id} data={data} />
          ))
        }
      </div>

    </div>
  );
};

export default PricingOperation;
