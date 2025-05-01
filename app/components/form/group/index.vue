<script lang="ts">
import type { FormError, FormFieldProps } from '@nuxt/ui'

interface UiProps {
  config?: string,
}

export type FormGroupProps = FormFieldProps & UiProps & {
  disabled?: boolean,
  readonly?: boolean,
  dataCy?: string,
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<FormGroupProps>(), {
  config: '',
  dataCy: '',
});
const formErrors = inject<Ref<FormError[]> | null>('form-errors', null);
const error = computed(() => (formErrors?.value?.find((e) => e.name === props.name)?.message));
</script>

<template>
  <UFormField
    :label="label"
    :required="required"
    :name="name"
    :ui="ui"
    :data-cy="dataCy ?? `cy-form-group-${name}`"
    :class="[props.class, error ? 'border-2 border-red-500' : '']"
  >
    <template #label>
      <slot name="label" />
    </template>
    <slot />
  </UFormField>
</template>
