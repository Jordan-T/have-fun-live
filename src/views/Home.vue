<script setup lang="ts">
import Card from "primevue/card";
</script>

<template>
  <div class="p-p-5">
    <div class="p-grid">
      <div class="p-col">
        <Card>
          <template #title
            ><div class="p-text-center">Contrat en cours</div>
          </template>
          <template #content>
            <h1 class="p-text-center">666</h1>
          </template>
        </Card>
      </div>
      <div class="p-col">
        <Card>
          <template #title
            ><div class="p-text-center">Taches restante</div>
          </template>
          <template #content>
            <h1 class="p-text-center">666</h1>
          </template>
        </Card>
      </div>
      <div class="p-col"></div>
    </div>
  </div>
</template>

<style lang="scss"></style>
