<script lang="ts">
  import { Card } from './components/Card'
  import { LineChart,LineChartSeries } from './components/LineChart'
  import { getGraphData } from './api'
  import { S } from './types'

  const PERIOD = {
    MONTH: "month",
    HALF_YEAR: "halfYear",
    YEAR: "year",
    ALL: "all",
  };

  export let graphData//: LineChartSeries<number>[]
  export let selectValue//:string = "month"

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
    const data = newData.map(({ Cases }) => Cases);
    graphData = [{ name: "s", data }]
  };

</script>

<main>
  <select value={selectValue} onChange={setGraphData}>
    <option value={PERIOD.MONTH}>month</option>
    <option value={PERIOD.HALF_YEAR}>half year</option>
    <option value={PERIOD.YEAR}>year</option>
    <option value={PERIOD.ALL}>all</option>
  </select>
  <Card><LineChart generic={Number} /></Card>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  
</style>
