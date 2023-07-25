<template>
  <div class="flex flex-col gap-2 mb-5">
    <label :for="id" class="text-gray-600 font-medium">{{ label }}</label>
    <div
      class="border flex items-center gap-transition-all duration-300 hovre:border-blue-500 px-2 py-3 rounded-lg border-gray-400"
    >
      <input
        @change="handleChange"
        class="block w-full text-sm"
        type="file"
        :accept="accept"
        :id="id"
        :disabled="disabled"
      />
    </div>
    <p v-if="error">{{ label }} is required.</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  accept: string;
  id: string;
  label: string;
  error: boolean;
  disabled: boolean;
}

let { accept, id, label, error, disabled } = defineProps<Props>();
let emit = defineEmits<{
  (event: "changed", e: any): void;
}>();

const handleChange = (e: any) => {
  emit("changed", e);
};
</script>
