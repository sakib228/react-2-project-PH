import { LineChart, XAxis, YAxis } from 'recharts';
import { Line } from 'recharts';

const students = [
  {
    name: 'Rahim',
    math: 85,
    physics: 78,
    chemistry: 88,
    english: 75,
    computer: 90,
  },
  {
    name: 'Karim',
    math: 70,
    physics: 82,
    chemistry: 76,
    english: 80,
    computer: 85,
  },
  {
    name: 'Sakib',
    math: 92,
    physics: 88,
    chemistry: 91,
    english: 84,
    computer: 95,
  },
  {
    name: 'Jamal',
    math: 65,
    physics: 70,
    chemistry: 68,
    english: 72,
    computer: 75,
  },
  {
    name: 'Hasan',
    math: 88,
    physics: 85,
    chemistry: 90,
    english: 87,
    computer: 93,
  },
];

const StudentChart = () => {
  return (
    <div className='mt-10'>
      <LineChart width={400} height={300} data={students}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={'math'} stroke='blue' strokeWidth={2}></Line>
        <Line dataKey={'physics'} stroke='green' strokeWidth={2}></Line>
        <Line dataKey={'chemistry'} stroke='red' strokeWidth={2}></Line>
        <Line dataKey={'english'} stroke='orange' strokeWidth={2}></Line>
        <Line dataKey={'computer'} stroke='purple' strokeWidth={2}></Line>
      </LineChart>
    </div>
  );
};

export default StudentChart;
