<script setup lang="ts">
const props = defineProps<{
  title: string;
  currentValue: number;
  currentYear: number;
  previousValue: number;
  previousYear: number;
  color: string;
  max: number;
}>()
const previousBarWidth = computed(() => Math.round(props.previousValue / props.max * 100));
const currentBarWidth = computed(() => Math.round(props.currentValue / props.max * 100));
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="font-bold">{{ title }}</h1>
    <div class="flex flex-col gap-4">
      <BarsLine :year="previousYear" :width="previousBarWidth" :color="color" />
      <BarsLine :year="currentYear" :width="currentBarWidth" :color="color" />
    </div>
  </div>
</template>