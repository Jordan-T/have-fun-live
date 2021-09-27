<script setup lang="ts">
import { PropType, reactive, watch } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import { Offer } from "../services/api";

export type FormData = {
  status: Offer["status"];
  user: string;
  endDate: Date;
};

const props = defineProps({
  offer: Object as PropType<Offer>,
  isLoading: Boolean,
});

const emit = defineEmits(["submit", "cancel"]);

const form = reactive({
  status: "",
  user: "",
  endDate: undefined as undefined | Date,
});

watch(() => props.offer, resetForm, { immediate: true });

function resetForm() {
  form.status = props.offer?.status || "";
  form.user = props.offer?.user || "";
  form.endDate = props.offer?.endDate
    ? new Date(props.offer?.endDate)
    : undefined;
}

function handleSubmit() {
  emit("submit", form);
}

function handleCancel() {
  emit("cancel");
}
</script>

<template>
  <form @submit.prevent.stop="handleSubmit">
    <div class="p-fluid">
      <div class="p-field">
        <label for="officeUser">Nom de l'utilisateur</label>
        <span class="p-input-icon-left">
          <i class="pi pi-user" />
          <InputText
            type="text"
            id="officeUser"
            v-model="form.user"
            placeholder="Jordan T."
          />
        </span>
      </div>
      <div class="p-field">
        <label for="officeStatus">Status</label>
        <Dropdown
          id="officeStatus"
          v-model="form.status"
          :options="['TODO', 'DONE', 'LOREM']"
          placeholder="Select a Status"
        />
      </div>
      <div class="p-field">
        <label for="officeEndDate">Status</label>
        <Calendar
          v-model="form.endDate"
          id="officeEndDate"
          placeholder="Select the end date"
        />
      </div>
    </div>
    <Button label="Modifier" :loading="isLoading" type="submit" />
    <Button
      label="Annuler"
      class="p-ml-3 p-button-secondary"
      @click.prevent="handleCancel"
    />
  </form>
</template>
