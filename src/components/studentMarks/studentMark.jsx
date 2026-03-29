import { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const StudentMark = ({ studentMarkData }) => {
  const studentMarks = use(studentMarkData);
  console.log(studentMarks);
  const studentDataAll = studentMarks.data;
  // map
  const markChartData = studentDataAll.map((studentData) => {
    const studentDetails = {
      name: studentData.name,
      subjects: studentData.subjects.math,
      physics: studentData.subjects.physics,
      chemistry: studentData.subjects.chemistry,
      english: studentData.subjects.english,
      computer: studentData.subjects.computer,
    };
    return studentDetails;
  });
  return (
    <div>
      <BarChart width={400} height={300} data={markChartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="math" fill="#8884d8" />
        <Bar dataKey="physics" fill="#82ca9d" />
        <Bar dataKey="chemistry" fill="#ffc658" />
        <Bar dataKey="english" fill="#ff7f50" />
        <Bar dataKey="computer" fill="#9f82ca" />
      </BarChart>
    </div>
  );
};

export default StudentMark;
