<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  options: {
    type: Object,
    required: true
  }
})
console.log(props.modelValue)
defineEmits(['update:modelValue'])
</script>

<template>
  <UFormGroup label="Type d'analyse">
    <div class="flex space-x-2">
      <UButton
        :key="k"
        v-for="(v,k) in options"
        :variant="modelValue == k ? 'solid' : 'ghost'"
        @click="$emit('update:modelValue', k)"
      >
        {{ v }}
      </UButton>
    </div>
  </UFormGroup>
</template>
