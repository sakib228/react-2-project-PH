import { Zap } from 'lucide-react';
import React from 'react';

const Datafeature = ({ feature }) => {
  return (
    <div className='flex gap-2 space-y-3'>
      <Zap></Zap> <p className="text-md">{feature}</p>
    </div>
  );
};

export default Datafeature;
