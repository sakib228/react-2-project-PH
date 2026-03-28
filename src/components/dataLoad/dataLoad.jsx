import React from 'react';
import Datafeature from './datafeature';

const DataLoad = ({ data }) => {
  const {name, price, duration, description, features } = data;

  return (
    <div className="border-2 rounded-2xl border-amber-500 p-5 space-y-3 bg-base-300">
      <h3 className="text-sm">{name}</h3>

      <p className="text-md">Price: {price}</p>
      <p className="text-md">Duration: {duration}</p>

      <p className="text-lg border-2 border-amber-50 p-3 rounded-2xl bg-blue-400 text-black">
        Description: {description}
      </p>

      <div className='mt-6'>
        {features.map((feature, index) => (
          <Datafeature key={index} feature={feature} />
        ))}
      </div>
    </div> 
  );
};

export default DataLoad;
