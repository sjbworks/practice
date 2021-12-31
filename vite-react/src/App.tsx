import { useState, useEffect, ChangeEvent } from "react";
import LineChart, { LineChartSeries } from "./components/LineChart";
import { getGraphData } from "./api";
import "./App.css";

const PERIOD = {
  MONTH: "month",
  HALF_YEAR: "halfYear",
  YEAR: "year",
  ALL: "all",
};

export const App = () => {
  const [data, setData] = useState<LineChartSeries<number>[]>();
  const [selectValue, setSelectValue] = useState<string>("month");
  const handleChangeSelect = (event: ChangeEvent<{ value: string }>) =>
    setSelectValue(event.target.value);

  const periodMap = {
    [PERIOD.MONTH]: {
      from: "2020-03-01T00:00:00Z",
      to: "2020-04-01T00:00:00Z",
    },
    [PERIOD.HALF_YEAR]: {
      from: "2020-03-01T00:00:00Z",
      to: "2020-09-01T00:00:00Z",
    },
    [PERIOD.YEAR]: { from: "2020-03-01T00:00:00Z", to: "2021-03-01T00:00:00Z" },
    [PERIOD.ALL]: { from: "2020-03-01T00:00:00Z", to: "2021-12-28T00:00:00Z" },
  };

  const setGraphData = async () => {
    const newData = await getGraphData(
      periodMap[selectValue].from,
      periodMap[selectValue].to
    );
    const data = newData.map(({ Cases }: S) => Cases);
    setData([{ name: "s", data }]);
  };

  useEffect(() => {
    setGraphData();
    console.log(data);
  }, [selectValue]);

  return (
    <div className="App">
      <select value={selectValue} onChange={handleChangeSelect}>
        <option value={PERIOD.MONTH}>month</option>
        <option value={PERIOD.HALF_YEAR}>half year</option>
        <option value={PERIOD.YEAR}>year</option>
        <option value={PERIOD.ALL}>all</option>
      </select>
      <LineChart<number> series={data} />
      <LineChart<number> series={data} />
      <LineChart<number> series={data} />
      <LineChart<number> series={data} />
    </div>
  );
};
