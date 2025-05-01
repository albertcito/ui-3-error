<script lang="ts">
interface Bar {
  title: string;
  currentValue: number;
  previousValue: number;
  color: string;
  currentYear: number;
  previousYear: number;
}
</script>
<script setup lang="ts">
const props = defineProps<{ bars: Bar[] }>();
const max = Math.max(...props.bars.map((bar) => Math.max(bar.currentValue, bar.previousValue)));
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <BarsBar
      v-for="bar in bars"
      :key="bar.title"
      :title="bar.title"
      :current-value="bar.currentValue"
      :previous-value="bar.previousValue"
      :max="max"
      :color="bar.color"
      :current-year="bar.currentYear"
      :previous-year="bar.previousYear"
    />
  </div>
</template>