<script lang="ts">
  import { LineChart,LineChartSeries } from './components/LineChart'
  import { getGraphData } from './api'
  import { periodMap, PERIOD } from './constants'
  import type { S } from './types'
  import { onMount } from 'svelte'

  export let graphData1: LineChartSeries<number>
  export let graphData2: LineChartSeries<number>
  export let graphData3: LineChartSeries<number>
  export let graphData4: LineChartSeries<number>
  export let selectValue1:string = "month"
  export let selectValue2:string = "halfYear"
  export let selectValue3:string = "year"
  export let selectValue4:string = "all"

  const setGraphData1 = async () => {
    const newData = await getGraphData(
      periodMap[selectValue1].from,
      periodMap[selectValue1].to
    );
    const data = newData.map(({ Cases }:S) => Cases);
    graphData1 = { name: "s", data }
  };
  const setGraphData2 = async () => {
    const newData = await getGraphData(
      periodMap[selectValue2].from,
      periodMap[selectValue2].to
    );
    const data = newData.map(({ Cases }:S) => Cases);
    graphData2 = { name: "s", data }
  };
  const setGraphData3 = async () => {
    const newData = await getGraphData(
      periodMap[selectValue3].from,
      periodMap[selectValue3].to
    );
    const data = newData.map(({ Cases }:S) => Cases);
    graphData3 = { name: "s", data }
  };
  const setGraphData4 = async () => {
    const newData = await getGraphData(
      periodMap[selectValue4].from,
      periodMap[selectValue4].to
    );
    const data = newData.map(({ Cases }:S) => Cases);
    graphData4 = { name: "s", data }
  };

  onMount(() => {
    setGraphData1()
    setGraphData2()
    setGraphData3()
    setGraphData4()
  });

  $: data1 = graphData1
  $: data2 = graphData2
  $: data3 = graphData3
  $: data4 = graphData4

</script>

<main>
  <div>
    <div class="card">
      <select bind:value={selectValue1} on:change={setGraphData1}>
        <option value={PERIOD.MONTH}>month</option>
        <option value={PERIOD.HALF_YEAR}>half year</option>
        <option value={PERIOD.YEAR}>year</option>
        <option value={PERIOD.ALL}>all</option>
      </select>
      <LineChart series={data1} />
    </div>
    <div class="card">
      <select bind:value={selectValue2} on:change={setGraphData2}>
        <option value={PERIOD.MONTH}>month</option>
        <option value={PERIOD.HALF_YEAR}>half year</option>
        <option value={PERIOD.YEAR}>year</option>
        <option value={PERIOD.ALL}>all</option>
      </select>
      <LineChart series={data2} />
    </div>
  </div>
  <div>
    <div class="card">
      <select bind:value={selectValue3} on:change={setGraphData3}>
        <option value={PERIOD.MONTH}>month</option>
        <option value={PERIOD.HALF_YEAR}>half year</option>
        <option value={PERIOD.YEAR}>year</option>
        <option value={PERIOD.ALL}>all</option>
      </select>
      <LineChart series={data3} />
    </div>
    <div class="card">
      <select bind:value={selectValue4} on:change={setGraphData4}>
        <option value={PERIOD.MONTH}>month</option>
        <option value={PERIOD.HALF_YEAR}>half year</option>
        <option value={PERIOD.YEAR}>year</option>
        <option value={PERIOD.ALL}>all</option>
      </select>
      <LineChart series={data4} />
    </div>
  </div>
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
    display: flex;
  }
  .card {
    padding: 8px;
    margin: 8px;
    width: 500px;
  }
</style>
