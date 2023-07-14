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
const sec2min = v => `${Math.floor(v/60).toString().padStart(2, '0')}:${(v%60).toString().padStart(2, '0')}`

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { stacked: true },
    y: {
      stacked: true,
      ticks: {
          stepSize: 60,
          callback: sec2min
        }
    }
  },
  plugins: {
    datalabels: {
      color: colors.white,
      display: context => context.dataset.data[context.dataIndex] > 30,
      font: { weight: 'bold' },
      formatter: sec2min
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'end'
    },
    tooltip: {
      callbacks: {
        label: ({raw}) => sec2min(raw)
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
