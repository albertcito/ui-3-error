<script lang="ts">
interface FormState {
  address: string;
  city: string;
  state: string;
  zip: string;
}
</script>
<script setup lang="ts">
const props = defineProps<{
  initialValues?: Partial<FormState>;
}>()
const state = reactive<Partial<FormState>>({ ...props.initialValues })
</script>

<template>
  <UForm :state="state" class="flex flex-col gap-1">
    <UFormField label="Address" class="bg-green-100">
      <UInput v-model="state.address" />
    </UFormField>
    <UFormField label="City">
      <UInput v-model="state.city" />
    </UFormField>
    <UFormField label="State">
      <UInput v-model="state.state" />
    </UFormField>
    <UFormField label="Zip">
      <UInput v-model="state.zip" v-maska="'*****-****'" />
    </UFormField>
    <div class="p-2">
      <UButton type="submit">
          Submit
      </UButton>
    </div>
  </UForm>
</template>
