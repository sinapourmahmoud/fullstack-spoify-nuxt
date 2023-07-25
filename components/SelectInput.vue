<template>
  <FormKit
    type="select"
    :name="name"
    :label="label"
    :placeholder="placeholder"
    label-class="text-gray-600 font-medium"
    outer-class="mb-5"
    message=" text-red-500 mb-1 text-xs max-w-xs"
    input-class=" min-w-[100%] peer   outline-none mt-2  h-10 px-3 p-6 text-base text-gray-700  rounded-lg border border-gray-400 focus:border-blue-500"
    validation="required"
    :disabled="disabled"
  >
    <optgroup label="List of artists">
      <option
        :value="option.value"
        v-for="(option, index) in options"
        :key="index"
      >
        {{ option.label }}
      </option>
    </optgroup>
  </FormKit>
</template>

<script setup lang="ts">
import { Options } from "types";
interface Props {
  name: string;
  label: string;
  placeholder: string;
  disabled: boolean;
  options: Options[];
}

let { label, name, options, placeholder, disabled } = defineProps<Props>();
</script>
