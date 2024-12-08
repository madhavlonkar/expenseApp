import * as React from 'react';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  height: 300,
};

export default function GridDemo(props) {
  return (
    <BarChart
      dataset={props.data}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'count', label: 'Expense Cont' }]}
      grid={{ horizontal: true }}
      sx={{
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
          transform: 'translateX(-10px)',
        },
        [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3', strokeWidth: 2 },
      }}
      {...chartSetting}
    />
  );
}