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
import { DataPoint, data } from './dataChart';

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
