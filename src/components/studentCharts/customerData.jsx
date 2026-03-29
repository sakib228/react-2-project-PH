import { LineChart, XAxis, YAxis } from 'recharts';
import { Line } from 'recharts';

// customer details
const customers = [
  {
    id: 1,
    name: 'Rahim',
    phone: '01711111111',
    city: 'Dhaka',
    totalPurchase: 5000,
    lastPurchase: '2026-03-20',
  },
  {
    id: 2,
    name: 'Karim',
    phone: '01822222222',
    city: 'Chittagong',
    totalPurchase: 3200,
    lastPurchase: '2026-03-18',
  },
  {
    id: 3,
    name: 'Sakib',
    phone: '01933333333',
    city: 'Sylhet',
    totalPurchase: 7800,
    lastPurchase: '2026-03-25',
  },
  {
    id: 4,
    name: 'Jamal',
    phone: '01644444444',
    city: 'Khulna',
    totalPurchase: 2100,
    lastPurchase: '2026-03-15',
  },
  {
    id: 5,
    name: 'Hasan',
    phone: '01555555555',
    city: 'Rajshahi',
    totalPurchase: 6400,
    lastPurchase: '2026-03-22',
  },
];

const CustomerData = () => {
  return (
    <div className="mt-10">
      <LineChart width={400} height={300} data={customers}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={'totalPurchase'} stroke="blue" strokeWidth={2}></Line>
        <Line dataKey={'city'} stroke="green" strokeWidth={2}></Line>
      </LineChart>
    </div>
  );
};

export default CustomerData;
