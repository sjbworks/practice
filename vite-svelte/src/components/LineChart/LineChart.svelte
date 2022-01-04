<script lang="ts">
import { chart } from "svelte-apexcharts";
import type { LineChartProps } from ".";

export let props: LineChartProps<number> = {
  options: {},
  series: [{ name: "", data: [] }],
  className: "",
}

let options = {
  chart: {
    type: "line",
  },
  series: props.series,
  // xaxis: {
  //   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  // },
};
</script>

<div class={$$props.className}>
  <div use:chart={options} />
</div>