<script setup lang="ts">
const bars = ref([
  { title: 'Home', currentValue: 20, previousValue: 27, color: 'blue', currentYear: 2024, previousYear: 2023 },
  { title: 'Cars', currentValue: 30, previousValue: 25, color: 'green', currentYear: 2024, previousYear: 2023 },
  { title: 'Life', currentValue: 28, previousValue: 5, color: 'red', currentYear: 2024, previousYear: 2023 },
]);
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 class="font-bold text-2xl text-(--ui-primary)">
        Insurance stats
      </h1>
      <div class="w-full max-w-screen-md">
        <Bars :bars="bars" />
      </div>
    </div>
  </div>
</template>
