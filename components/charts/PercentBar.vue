<script setup>
import colors from 'tailwindcss/colors'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const formatPercent = (v) => `${v*100}%`

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { stacked: true },
    y: {
      stacked: true,
      ticks: {
        stepSize: 0.2,
        callback: formatPercent
      }
    }
  },
  plugins: {
    datalabels: {
      color: colors.white,
      display: context => context.dataset.data[context.dataIndex] > 0.1,
      font: { weight: 'bold' },
      formatter: formatPercent
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'end'
    },
    tooltip: {
      callbacks: {
        label: ({raw}) => formatPercent(raw)
      }
    }
  }
}
</script>

<template>
  <div class="h-64">
    <Bar :data="data" :options="options" :plugins="[ChartDataLabels]" />
  </div>
</template>
