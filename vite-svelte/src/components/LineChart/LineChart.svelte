<script lang="ts">
import { chart } from "svelte-apexcharts";
import type { LineChartSeries } from ".";

export let series: LineChartSeries<number>| undefined = { name: "", data: [] }
export let className: string = ''

$: options = {
  chart: {
    type: "line",
  },
  series: [series],
};
</script>

<div class={className}>
  <div use:chart={options} />
</div>