import { useState, useEffect, ChangeEvent } from "react";
import LineChart, { LineChartSeries } from "./components/LineChart";
import { getGraphData } from "./api";
import { PERIOD, periodMap } from "./constants";
import { S } from "./types";
import "./App.css";
import { useDate } from "./useDate";

export const App = () => {
  const time = useDate();
  const [data1, setData1] = useState<LineChartSeries<number>[]>();
  const [selectValue1, setSelectValue1] = useState<string>("month");
  const handleChangeSelect1 = (event: ChangeEvent<{ value: string }>) =>
    setSelectValue1(event.target.value);

  const setGraphData1 = async () => {
    const newData = await getGraphData(
      periodMap[selectValue1].from,
      periodMap[selectValue1].to
    );
    const data = newData.map(({ Cases }: S) => Cases);
    setData1([{ name: "s", data }]);
  };

  useEffect(() => {
    setGraphData1();
  }, [selectValue1]);

  return (
    <div className="main">
      <span>{time}</span>
      <div className="card">
        <select value={selectValue1} onChange={handleChangeSelect1}>
          <option value={PERIOD.MONTH}>month</option>
          <option value={PERIOD.HALF_YEAR}>half year</option>
          <option value={PERIOD.YEAR}>year</option>
          <option value={PERIOD.ALL}>all</option>
        </select>
        <LineChart<number> series={data1} />
      </div>
    </div>
  );
};
