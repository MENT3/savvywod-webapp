<script setup>
import { ref } from 'vue'
import colors from 'tailwindcss/colors'

const { data: analysis } = await useAsyncData(() => $fetch(process.env.CORE_API_URL))
const chartData = ref({
  labels: analysis.value.map((_, i) => `Round ${i+1}`),
  datasets: [
    {
      label: 'Temps de travail',
      borderWidth: 2,
      borderColor: colors.blue['800'],
      backgroundColor: colors.blue['700'],
      data: analysis.value.map(rnd => rnd.w_duration),
      datalabels: { align: 'end', anchor: 'start' }
    },
    {
      label: 'Temps de transition',
      borderWidth: 2,
      borderColor: colors.amber['600'],
      backgroundColor: colors.amber['500'],
      data: analysis?.value?.map(rnd => rnd.t_duration),
      datalabels: { align: 'end', anchor: 'start' }
    }
  ]
})
</script>

<template>
  <div>
    analysis page
    <div>
      <ChartsBar :data="chartData" />
    </div>
  </div>
</template>
