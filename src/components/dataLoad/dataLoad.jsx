import Datafeature from './datafeature';

const DataLoad = ({ data }) => {
  const { name, price, duration, description, features } = data;

  return (
    <div className="border-2 rounded-2xl border-amber-500 p-5 space-y-3 bg-base-300 flex flex-1 flex-col">
      <h3 className="text-sm">{name}</h3>

      <p className="text-md">Price: {price}</p>
      <p className="text-md">Duration: {duration}</p>

      <p className="text-sm border-none border-amber-50 p-2 rounded-2xl bg-blue-300 text-black">
        Description: {description}
      </p>

      <div className="mt-6 flex flex-col gap-2 flex-1">
        {features.map((feature, index) => (
          <Datafeature key={index} feature={feature} />
        ))}
      </div>
      <button className="p-3 bg-blue-200 text-black border-none rounded-2xl cursor-pointer hover:bg-blue-400 duration-200 ease-in">
        {' '}
        Buy Now{' '}
      </button>
    </div>
  );
};

export default DataLoad;
