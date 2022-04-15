import { FC, useState } from 'react';
import { connect } from "react-redux";

import { Paper } from '@mui/material';
// import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
// import { Animation } from '@devexpress/dx-react-chart';

import { CheckListModel, ItemStatus } from '../../../model';

interface MonitorChartProps { }

const MonitorChart: FC<MonitorChartProps> = (props: MonitorChartProps) => {
  const mockData = [
    { country: 'Russia', area: 12 },
    { country: 'Canada', area: 7 },
    { country: 'USA', area: 7 },
    { country: 'China', area: 7 },
    { country: 'Brazil', area: 6 },
    { country: 'Australia', area: 5 },
    { country: 'India', area: 2 },
    { country: 'Others', area: 55 },
  ];

  const [data, setData] = useState(mockData);

  return (
    <Paper>
      {/* <Chart
        data={data}
      >
        <PieSeries
          valueField="area"
          argumentField="country"
        />
        <Title
          text="Area of Countries"
        />
        <Animation />
      </Chart> */}
    </Paper>
  );
}

export default connect(null, null)(MonitorChart);