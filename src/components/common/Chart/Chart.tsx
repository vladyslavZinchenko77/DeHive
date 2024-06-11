'use client';
import React, { FC } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cross,
} from 'recharts';
import ChartsHeader from './components/ChartsHeader/ChartsHeader';
import { Box, border, useMediaQuery } from '@chakra-ui/react';
import StatCard from './components/StatCard/StatCard';

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
  const [isMobile] = useMediaQuery('(max-width: 1279px)');
  const formatYAxis = (tick: number) => `$${tick.toFixed(2)}`;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const currentData = payload[0].payload;
      return (
        <div
          className="custom-tooltip"
          style={{
            borderRadius: '24px',
            backgroundColor: '#13141D',
            padding: 10,
            border: '1px solid rgba(255, 255, 255, 0.16)',
          }}
        >
          <p className="label">{`Дата: ${label}`}</p>
          <p className="desc">{`ETH-CORE: $${currentData['ETH-CORE']}`}</p>
          <p className="desc">{`Poly: $${currentData.Poly}`}</p>
          <p className="desc">{`PolyGaming: $${currentData.PolyGaming}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Box>
      <ChartsHeader sx={{ marginTop: '24px' }} />

      <ResponsiveContainer
        width="100%"
        height={300}
        style={{ marginTop: '30px', cursor: 'pointer' }}
      >
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis domain={[0, 200]} tickFormatter={formatYAxis} tickCount={9} />
          <CartesianGrid
            stroke="rgba(255, 255, 255, 0.16)"
            strokeDasharray="1 0"
            horizontal={true}
            vertical={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              strokeDasharray: '3 3',
              stroke: '#8884d8',
              strokeWidth: 2,
            }}
          />
          <Line
            type="natural"
            dataKey="ETH-CORE"
            stroke="#8884d8"
            name="ETH-CORE"
            dot={false}
          />
          <Line
            type="natural"
            dataKey="Poly"
            stroke="#82ca9d"
            name="Poly"
            dot={false}
          />
          <Line
            type="natural"
            dataKey="PolyGaming"
            stroke="#ff7300"
            name="PolyGaming"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      {isMobile && <StatCard d="1D" w="1W" m="1M" y="1Y" />}
    </Box>
  );
};

export default Chart;
