<script setup lang="ts">
defineProps<{
  year: number;
  width: number;
  color: string;
}>()
</script>

<template>
  <div class="bg-neutral-200 rounded-lg">
    <div class="relative rounded-lg" :style="{ backgroundColor: color, width: `${width}%` }">
      <div class="px-1 rounded-full text-white text-sm" :style="{ backgroundColor: color }">
        {{ year }} - {{ width }}%
      </div>
    </div>
  </div>
</template>