import { useState, useEffect, ChangeEvent } from "react";
import LineChart, { LineChartSeries } from "./components/LineChart";
import { getGraphData } from "./api";
import { PERIOD, periodMap } from "./constants";
import { S } from "./types";
import "./App.css";

export const App = () => {
  const [data1, setData1] = useState<LineChartSeries<number>[]>();
  const [data2, setData2] = useState<LineChartSeries<number>[]>();
  const [data3, setData3] = useState<LineChartSeries<number>[]>();
  const [data4, setData4] = useState<LineChartSeries<number>[]>();
  const [selectValue1, setSelectValue1] = useState<string>("month");
  const [selectValue2, setSelectValue2] = useState<string>("halfYear");
  const [selectValue3, setSelectValue3] = useState<string>("year");
  const [selectValue4, setSelectValue4] = useState<string>("all");
  const handleChangeSelect1 = (event: ChangeEvent<{ value: string }>) =>
    setSelectValue1(event.target.value);
  const handleChangeSelect2 = (event: ChangeEvent<{ value: string }>) =>
    setSelectValue2(event.target.value);
  const handleChangeSelect3 = (event: ChangeEvent<{ value: string }>) =>
    setSelectValue3(event.target.value);
  const handleChangeSelect4 = (event: ChangeEvent<{ value: string }>) =>
    setSelectValue4(event.target.value);

  const setGraphData1 = async () => {
    const newData = await getGraphData(
      periodMap[selectValue1].from,
      periodMap[selectValue1].to
    );
    const data = newData.map(({ Cases }: S) => Cases);
    setData1([{ name: "s", data }]);
  };
  const setGraphData2 = async () => {
    const newData = await getGraphData(
      periodMap[selectValue2].from,
      periodMap[selectValue2].to
    );
    const data = newData.map(({ Cases }: S) => Cases);
    setData2([{ name: "s", data }]);
  };
  const setGraphData3 = async () => {
    const newData = await getGraphData(
      periodMap[selectValue3].from,
      periodMap[selectValue3].to
    );
    const data = newData.map(({ Cases }: S) => Cases);
    setData3([{ name: "s", data }]);
  };
  const setGraphData4 = async () => {
    const newData = await getGraphData(
      periodMap[selectValue4].from,
      periodMap[selectValue4].to
    );
    const data = newData.map(({ Cases }: S) => Cases);
    setData4([{ name: "s", data }]);
  };

  useEffect(() => {
    setGraphData1();
  }, [selectValue1]);
  useEffect(() => {
    setGraphData2();
  }, [selectValue2]);
  useEffect(() => {
    setGraphData3();
  }, [selectValue3]);
  useEffect(() => {
    setGraphData4();
  }, [selectValue4]);

  return (
    <div className="main">
      <div>
        <div className="card">
          <select value={selectValue1} onChange={handleChangeSelect1}>
            <option value={PERIOD.MONTH}>month</option>
            <option value={PERIOD.HALF_YEAR}>half year</option>
            <option value={PERIOD.YEAR}>year</option>
            <option value={PERIOD.ALL}>all</option>
          </select>
          <LineChart<number> series={data1} />
        </div>
        <div className="card">
          <select value={selectValue2} onChange={handleChangeSelect2}>
            <option value={PERIOD.MONTH}>month</option>
            <option value={PERIOD.HALF_YEAR}>half year</option>
            <option value={PERIOD.YEAR}>year</option>
            <option value={PERIOD.ALL}>all</option>
          </select>
          <LineChart<number> series={data2} />
        </div>
      </div>
      <div>
        <div className="card">
          <select value={selectValue3} onChange={handleChangeSelect3}>
            <option value={PERIOD.MONTH}>month</option>
            <option value={PERIOD.HALF_YEAR}>half year</option>
            <option value={PERIOD.YEAR}>year</option>
            <option value={PERIOD.ALL}>all</option>
          </select>
          <LineChart<number> series={data3} />
        </div>
        <div className="card">
          <select value={selectValue4} onChange={handleChangeSelect4}>
            <option value={PERIOD.MONTH}>month</option>
            <option value={PERIOD.HALF_YEAR}>half year</option>
            <option value={PERIOD.YEAR}>year</option>
            <option value={PERIOD.ALL}>all</option>
          </select>
          <LineChart<number> series={data4} />
        </div>
      </div>
    </div>
  );
};
