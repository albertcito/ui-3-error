<script setup lang="ts">
import FormGroup from '~/components/form/group/index.vue';
const firstName = ref('John');
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-4 h-screen">
      <FormGroup label="First Name" name="firstName">
        <UInput v-model="firstName" />
      </FormGroup>
    </div>
  </div>
</template>
