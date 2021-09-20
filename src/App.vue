<script setup lang="ts">
import LayoutDefault from "./layouts/default.vue";
</script>

<template>
  <LayoutDefault>
    <Suspense>
      <template #default><RouterView /></template>
      <template #fallback>LOADING...</template>
    </Suspense>
  </LayoutDefault>
</template>
