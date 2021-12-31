<script lang="ts" generic="T">
import Chart from "svelte-apexcharts";
import type { LineChartProps } from ".";

export let props: LineChartProps<T>  = {
  options: {},
  series: [{ name: "", data: [] }],
  className: "",
}
</script>

<div class={$$props.className}>
  <Chart series={props.series} options={props.options} type="line" />
</div>