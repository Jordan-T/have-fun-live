<script setup lang="ts">
import Card from "primevue/card";
import Skeleton from "primevue/skeleton";
import { useFetch } from "@vueuse/core";
import { Offer } from "../services/api";

const nowDate = new Date().toISOString().substr(0, 10);

const {
  isFetching,
  error,
  data: offers,
} = useFetch<Offer[]>(`/api/offers?endDate_gte=${nowDate}`).get().json();
</script>

<template>
  <Card>
    <template #title
      ><div class="p-text-center">Contrat en cours</div>
    </template>
    <template #content>
      <div class="p-d-flex p-jc-center">
        <transition name="fade" mode="out-in">
          <Skeleton
            v-if="isFetching || !offers"
            width="4rem"
            height="2rem"
            class="p-my-2"
          />
          <h1 v-else-if="error" class="p-mb-0">ERREUR</h1>
          <h1 v-else class="p-mb-0">{{ offers.length }}</h1>
        </transition>
      </div>
    </template>
  </Card>
</template>

<style>
.fade-enter-active {
  transition: opacity 0.2s ease;
}
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
