<template>
  <FormKit
    :type="props.type"
    :name="props.id"
    :id="props.id"
    :validation="props.validation"
    label-class="text-gray-600 font-medium"
    outer-class="mb-5"
    :label="label"
    :placeholder="props.placeholder"
    message=" text-red-500 mb-1 text-xs max-w-xs"
    input-class="min-w-[100%] peer   outline-none mt-2  h-10 px-3 p-6 text-base text-gray-700  rounded-lg border border-gray-400 "
  />
</template>
<script lang="ts" setup>
interface Props {
  type: string;
  id: string;
  validation: string;
  label: string;
  placeholder: string;
}
let props = defineProps<Props>();
</script>
