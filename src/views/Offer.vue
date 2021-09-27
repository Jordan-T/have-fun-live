<script setup lang="ts">
import MyLoader from "../components/MyLoader.vue";
import Button from "primevue/button";
import { Offer } from "../services/api";
import { useFetch } from "@vueuse/core";
import { computed, ref } from "vue";
import OfferForm, { FormData } from "../components/OfferForm.vue";

const props = defineProps({
  offerNumber: String,
});

const url = computed(() => `/api/offers/${props.offerNumber}`);
const { isFetching, data: offer } = useFetch<Offer[]>(url, { refetch: true })
  .get()
  .json();

const isEdit = ref(false);
const submitIsLoading = ref(false);

async function handleSubmit(form: FormData) {
  submitIsLoading.value = true;
  const updatedOffer = await fetch(`/api/offers/${props.offerNumber}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: form.status,
      user: form.user,
      endDate: form.endDate.toISOString().substr(0, 10),
    }),
  }).then((res) => res.json());
  submitIsLoading.value = false;
  offer.value = updatedOffer;
  isEdit.value = false;
}

function handleCancel() {
  isEdit.value = false;
}
</script>

<template>
  <div>
    <router-link to="/offers">&lg; Retour aux offres</router-link>
    <h1>Offre N°{{ offerNumber }}</h1>
    <MyLoader v-if="isFetching" />

    <div v-else>
      <OfferForm
        v-if="isEdit"
        :offer="offer"
        :isLoading="submitIsLoading"
        @submit="handleSubmit"
        @cancel="handleCancel"
      />
      <div v-else>
        <pre>{{ offer }}</pre>
        <Button label="edit" @click="isEdit = true" />
      </div>
    </div>
  </div>
</template>
