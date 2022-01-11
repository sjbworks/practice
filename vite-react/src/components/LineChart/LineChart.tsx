// import React from "react";
import { useEffect } from "react";
import Chart from "react-apexcharts";

import { LineChartProps } from ".";

const LineChart = <T,>({ className, ...props }: LineChartProps<T>) => {
  useEffect(() => console.log("LineChart is rendered"));
  return (
    <div className={className}>
      <Chart {...props} type="line" />
    </div>
  );
};

LineChart.defaultProps = {
  options: {},
  series: [{ name: "", data: [] }],
  className: "",
};

export default LineChart;
