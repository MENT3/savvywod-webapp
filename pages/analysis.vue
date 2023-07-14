<script setup>
import { ref } from 'vue'
import colors from 'tailwindcss/colors'

const { data: analysis } = await useAsyncData(() => $fetch(process.env.CORE_API_URL))
const chartData = ref({
  labels: analysis.value.round.map((_, i) => `Round ${i+1}`),
  datasets: [
    {
      label: 'Temps de travail',
      borderWidth: 2,
      borderColor: colors.blue['800'],
      backgroundColor: colors.blue['700'],
      data: analysis.value.round.map(rnd => rnd.w_duration),
      datalabels: { align: 'end', anchor: 'start' }
    },
    {
      label: 'Temps de transition',
      borderWidth: 2,
      borderColor: colors.amber['600'],
      backgroundColor: colors.amber['500'],
      data: analysis.value.round.map(rnd => rnd.t_duration),
      datalabels: { align: 'end', anchor: 'start' }
    }
  ]
})
</script>

<template>
  <div>
    <div>
      <div class="mb-2 flex flex-col">
        <span class="block text-sm text-gray-500 uppercase">
          Vue d'ensemble
        </span>
        <h3 class="text-lg">
          Analyse par round
        </h3>
      </div>
      <ChartsTimeBar :data='chartData' />
    </div>
  </div>
</template>
