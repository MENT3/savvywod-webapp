<script setup>
import { ref } from 'vue'
import colors from 'tailwindcss/colors'

const config = useRuntimeConfig()
const analysisType = ref('time')
const ChartsTimeBar = resolveComponent('ChartsTimeBar')
const ChartsPercentBar = resolveComponent('ChartsPercentBar')

const { data: analysis } = await useFetch(config.public.coreApiUrl)

const chartData = computed(() => {
  return {
    labels: analysis.value.round.map((_, i) => `Round ${i+1}`),
    datasets: [
      {
        label: 'Temps de travail',
        borderWidth: 2,
        borderColor: colors.blue['800'],
        backgroundColor: colors.blue['700'],
        data: analysis.value.round.map(rnd => rnd[`w_${analysisType.value == 'percent' ? 'percent' : 'duration'}`]),
        datalabels: { align: 'end', anchor: 'start' }
      },
      {
        label: 'Temps de transition',
        borderWidth: 2,
        borderColor: colors.amber['600'],
        backgroundColor: colors.amber['500'],
        data: analysis.value.round.map(rnd => rnd[`t_${analysisType.value == 'percent' ? 'percent' : 'duration'}`]),
        datalabels: { align: 'end', anchor: 'start' }
      }
    ]
  }
})
</script>

<template>
  <div>
    <UiInlineSelector v-model="analysisType" :options="{ time: 'Temps', percent: 'Pourcentage' }" />

    <div class="mt-7">
      <div class="mb-2 flex flex-col">
        <span class="block text-sm text-gray-500 uppercase">
          Vue d'ensemble
        </span>
        <h3 class="text-lg">
          Analyse par round
        </h3>
      </div>
      <component :is="analysisType == 'percent' ? ChartsPercentBar : ChartsTimeBar" :data="chartData" />
    </div>
  </div>
</template>
