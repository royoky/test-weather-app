<template>
  <v-combobox v-model="selectedItems" :items="items" :label="label" multiple chips></v-combobox>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  items: string[];
  modelValue: string[];
  label: string
}>();

const selectedItems = useVModel(props, 'modelValue');

</script>
