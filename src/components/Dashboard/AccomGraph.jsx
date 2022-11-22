import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {data, options} from '../../constants/text'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AccomGraph = ({chartData}) => {
  return (
    <div className='w-full h-[400px] flex justify-center items-center'>
      <Line options={options} data={data} />
    </div>
  )
}

export default AccomGraph