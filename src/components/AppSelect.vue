<template>
  <VCombobox
    v-model="selectedItems"
    :items="items"
    :label="label"
    multiple
    chips
  ></VCombobox>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  items: string[];
  modelValue: string[];
  label: string;
}>();

const selectedItems = useVModel(props, "modelValue");
</script>
