<script setup lang="ts">
import { ref, reactive } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";

const filters = reactive({
  text: "",
  status: "",
  endDate: undefined as undefined | Date,
});

import { Offer } from "../services/api";
import { useFetch, debouncedWatch } from "@vueuse/core";

const url = ref("/api/offers");
const {
  isFetching,
  error,
  data: offers,
} = useFetch<Offer[]>(url, { refetch: true }).get().json();

const formatDate = (date: Date | string) => {
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "short" }).format(
    new Date(date)
  );
};

const getStatusSeverity = (status: Offer["status"]) => {
  switch (status) {
    case "LOREM":
      return "danger";
    case "DONE":
      return "success";
    default:
      return "";
  }
};

const updateApiUrl = () => {
  const params = [];
  if (filters.text) {
    params.push(`user_like=${filters.text}`);
  }
  if (filters.status) {
    params.push(`status=${filters.status}`);
  }
  if (filters.endDate) {
    params.push(`endDate_lte=${filters.endDate.toISOString().substr(0, 10)}`);
  }
  url.value = `/api/offers?${params.join("&")}`;
};

debouncedWatch(filters, updateApiUrl, { debounce: 300 });
</script>

<template>
  <div class="p-p-5">
    <h1>Les offres</h1>

    <div class="p-fluid p-formgrid p-grid">
      <div class="p-field p-col">
        <span class="p-input-icon-left p-mb-5">
          <i class="pi pi-search" />
          <InputText type="text" v-model="filters.text" placeholder="Search" />
        </span>
      </div>
      <div class="p-field p-col">
        <Dropdown
          v-model="filters.status"
          :options="['', 'TODO', 'DONE', 'LOREM']"
          placeholder="Select a Status"
        />
      </div>
      <div class="p-field p-col">
        <Calendar
          v-model="filters.endDate"
          placeholder="Select a max end date"
        />
      </div>
    </div>

    <h1 v-if="isFetching">LOADING</h1>
    <pre v-else-if="error">{{ error }}</pre>
    <div v-else-if="!offers?.length">
      <h1>NO OFFERS</h1>
    </div>
    <div v-else>
      <DataTable :value="offers" responsiveLayout="scroll">
        <Column field="number" header="Numéro">
          <template #body="slotProps">
            <router-link :to="`/offers/${slotProps.data.number}`">
              {{ slotProps.data.number }}
            </router-link>
          </template>
        </Column>
        <Column field="endDate" header="Date de fin">
          <template #body="slotProps">
            {{ formatDate(slotProps.data.endDate) }}
          </template>
        </Column>
        <Column field="user" header="Utilisateur"></Column>
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :severity="getStatusSeverity(slotProps.data.status)">{{
              slotProps.data.status
            }}</Tag>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>
