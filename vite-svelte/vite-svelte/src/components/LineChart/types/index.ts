import type { ApexOptions } from 'apexcharts'

export type LineChartSeries<T> = {
  name: string
  data: T[]
}

export type LineChartProps<T> = {
  series?: LineChartSeries<T>[]
  options?: ApexOptions
  className?: string
}
