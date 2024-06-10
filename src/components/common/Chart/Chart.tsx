'use client';
import React, { FC } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import ChartsHeader from './components/ChartsHeader/ChartsHeader';
import { Box } from '@chakra-ui/react';

interface DataPoint {
  date: string;
  'ETH-CORE': number;
  Poly: number;
  PolyGaming: number;
}

const data: DataPoint[] = [
  { date: 'Aug 01', 'ETH-CORE': 73, Poly: 75, PolyGaming: 65 },
  { date: 'Aug 02', 'ETH-CORE': 112, Poly: 78, PolyGaming: 58 },
  { date: 'Aug 03', 'ETH-CORE': 115, Poly: 79, PolyGaming: 59 },
  { date: 'Aug 04', 'ETH-CORE': 116, Poly: 81, PolyGaming: 61 },
  { date: 'Aug 05', 'ETH-CORE': 118, Poly: 82, PolyGaming: 62 },
  { date: 'Aug 06', 'ETH-CORE': 119, Poly: 83, PolyGaming: 63 },
  { date: 'Aug 07', 'ETH-CORE': 118.5, Poly: 82.5, PolyGaming: 62.5 },
  { date: 'Aug 08', 'ETH-CORE': 119.2, Poly: 80, PolyGaming: 60 },
  { date: 'Aug 09', 'ETH-CORE': 119.2, Poly: 80, PolyGaming: 60 },
  { date: 'Aug 10', 'ETH-CORE': 119.2, Poly: 80, PolyGaming: 60 },
  { date: 'Aug 11', 'ETH-CORE': 119.2, Poly: 80, PolyGaming: 60 },
  { date: 'Aug 12', 'ETH-CORE': 119.2, Poly: 80, PolyGaming: 60 },
];

const Chart: FC = () => {
  const formatYAxis = (tick: number) => `$${tick.toFixed(2)}`;

  return (
    <Box>
      <ChartsHeader />
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Legend verticalAlign="top" align="left" iconType="circle" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 200]} tickFormatter={formatYAxis} tickCount={9} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            label="Дата"
            formatter={(value: any) => `$${value.toFixed(2)}`}
          />
          <Line
            type="monotone"
            dataKey="ETH-CORE"
            stroke="#8884d8"
            name="ETH-CORE"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Poly"
            stroke="#82ca9d"
            name="Poly"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="PolyGaming"
            stroke="#ff7300"
            name="PolyGaming"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Chart;
