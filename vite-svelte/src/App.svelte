<script lang="ts">
  import { LineChart,LineChartSeries } from './components/LineChart'
  import { getGraphData } from './api'
  import { periodMap, PERIOD } from './constants'
  import type { S } from './types'
  import { onMount } from 'svelte'

  export let graphData1: LineChartSeries<number>
  export let selectValue1:string = "month"

  const setGraphData1 = async () => {
    const newData = await getGraphData(
      periodMap[selectValue1].from,
      periodMap[selectValue1].to
    );
    const data = newData.map(({ Cases }:S) => Cases);
    graphData1 = { name: "s", data }
  };

  onMount(() => {
    setGraphData1()
  });

  let time:string = ""
  setInterval(() => {
    const date = new Date();
    time = date.toLocaleString('ja-JP');
  }, 100);

  $: data1 = graphData1
  $: time

</script>

<main>
  <span>{time}</span>
  <div class="card">
    <select bind:value={selectValue1} on:change={setGraphData1}>
      <option value={PERIOD.MONTH}>month</option>
      <option value={PERIOD.HALF_YEAR}>half year</option>
      <option value={PERIOD.YEAR}>year</option>
      <option value={PERIOD.ALL}>all</option>
    </select>
    <LineChart series={data1} />
  </div>
</main>
<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  main {
    padding: 1em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card {
    padding: 8px;
    margin: 8px;
    width: 500px;
  }
</style>
