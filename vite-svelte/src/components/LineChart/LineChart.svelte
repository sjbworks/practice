<script lang="ts">
import { chart } from "svelte-apexcharts";
import type { LineChartSeries } from ".";
type SeriesType = $$Generic;
export let series: LineChartSeries<SeriesType>| undefined = { name: "", data: [] }
export let className: string = ''

$: options = {
  chart: {
    type: "line",
  },
  series: [series],
};
$: console.log('LineChart is rendered')
</script>

<div class={className}>
  <div use:chart={options} />
</div>