<script lang="ts">
import { type } from "arktype";
import { getModifiedValues } from "~/util/getModifiedValues";

const schema = type({
	firstName: "string > 0",
	lastName: "string > 0",
	email: "string.email",
	phone: "string"
});
type FormState = typeof schema.infer;
</script>
<script setup lang="ts">
const props = defineProps<{
  initialValues?: Partial<FormState>;
}>()
const state = reactive<Partial<FormState>>({ ...props.initialValues });
const modifiedValues = computed(() => getModifiedValues(
  state,
  props.initialValues ?? {},
  {
    phone: (value, initialValue) =>  initialValue !== `${value}`.replace(/\D/g, ""),
  }
));
const { add } = useToast()
</script>
<template>
  <UForm
    :schema="schema"
    :state="state"
    class="flex flex-col gap-1"
    @submit="add({ title: 'Success', description: 'Success', })"
  >
    <UFormField label="First Name" name="firstName" :class="[modifiedValues.firstName ? 'bg-green-100' : '']">
      <UInput v-model="state.firstName" />
    </UFormField>
    <UFormField label="Last Name" name="lastName" :class="[modifiedValues.lastName ? 'bg-green-100' : '']">
      <UInput v-model="state.lastName" />
    </UFormField>
    <UFormField label="Email" name="email" :class="[modifiedValues.email ? 'bg-green-100' : '']">
      <UInput v-model="state.email" />
    </UFormField>
    <UFormField label="Phone" name="phone" :class="[modifiedValues.phone ? 'bg-green-100' : '']">
      <UInput v-model="state.phone" v-maska="'(###) ###-####'" />
    </UFormField>
    <div class="p-2">
      <UButton type="submit">
          Submit
      </UButton>
    </div>
  </UForm>
</template>
