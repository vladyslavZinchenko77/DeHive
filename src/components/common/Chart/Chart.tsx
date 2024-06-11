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
} from 'recharts';
import ChartsHeader from './components/ChartsHeader/ChartsHeader';
import { Box, useMediaQuery } from '@chakra-ui/react';
import StatCard from './components/StatCard/StatCard';
import { data } from './dataChart';
import SvgIcon from '../SvgIcon/SvgIcon';

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
            color: '#fff',
          }}
        >
          <p className="label">{`date: ${label}`}</p>
          <div
            className="desc"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <SvgIcon type="ethereum" />
            <span
              style={{ marginLeft: '8px' }}
            >{`ETH-CORE: $${currentData['ETH-CORE']}`}</span>
          </div>
          <div
            className="desc"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <SvgIcon type="polyCluster" />
            <span
              style={{ marginLeft: '8px' }}
            >{`Poly: $${currentData.Poly}`}</span>
          </div>
          <div
            className="desc"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <SvgIcon type="polyGaming" />
            <span
              style={{ marginLeft: '8px' }}
            >{`PolyGaming: $${currentData.PolyGaming}`}</span>
          </div>
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
          {!isMobile && <XAxis dataKey="date" />}
          {!isMobile && (
            <YAxis
              domain={[0, 200]}
              tickFormatter={formatYAxis}
              tickCount={9}
            />
          )}
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
