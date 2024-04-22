<template>
  <VRow justify="space-between">
    <VCol cols="auto">
      <h1 class="text-h4 mb-3">Customer list</h1>
    </VCol>

    <VCol cols="auto">
      <VBtn variant="outlined" @click="() => router.push('/customers/new')"
        >New</VBtn
      >
    </VCol>
  </VRow>

  <VTextField
    v-model="search"
    label="Search"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    hide-details
    single-line
    density="compact"
  ></VTextField>

  <VDataTableServer
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="customers"
    :items-length="totalItems"
    @update:options="fetchCustomers"
  >
    <template v-slot:item.checkbox="{ item }">
      <span v-for="cb in item.checkbox" :key="cb">
        {{ cb }}
        <br />
      </span>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon
        class="me-8"
        size="small"
        @click="() => router.push(`/customers/${item.id}`)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="
          () => {
            dialogDelete.customerId = item.id;
            dialogDelete.open = true;
          }
        "
      >
        mdi-delete
      </v-icon>
    </template>
  </VDataTableServer>

  <v-dialog v-model="dialogDelete.open" width="fit-content">
    <v-card>
      <v-card-title> Are you sure you want to delete this item? </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          variant="text"
          @click="
            () => {
              dialogDelete.open = false;
              dialogDelete.customerId = null;
            }
          "
          >Cancel</v-btn
        >
        <v-btn variant="tonal" @click="onDeleteCustomer">OK</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import http from "../../../services/http";
import { useRouter } from "vue-router";
import { Customer } from "../types";

const router = useRouter();

const customers = ref<(Customer & { id: string })[]>([]);
const totalItems = ref(0);
const itemsPerPage = ref(10);

const dialogDelete = ref({
  open: false,
  customerId: null,
});

const search = ref("");

const fetchCustomers = async ({ page, itemsPerPage, sortBy }) => {
  let sort = undefined;
  if (sortBy.length) {
    const [{ key, order }] = sortBy;
    let orderBy = order === "asc" ? "" : "-";
    sort = orderBy + key;
  }

  try {
    const response = await http.get(`/customers/`, {
      params: {
        _page: page,
        _per_page: itemsPerPage,
        _sort: sort,
      },
    });
    const totalItemsResponse = await http.get(`/customers/`, {
      params: {
        _sort: sort,
      },
    });
    if (response && response.status === 200) {
      console.log("response", response);
      customers.value = response.data.data;
      totalItems.value = totalItemsResponse.data.length;
    }
  } catch (error) {
    console.error(error);
  }
};

const headers = [
  { title: "Email", key: "email" },
  { title: "First Name", key: "firstName" },
  { title: "Last Name", key: "lastName" },
  { title: "Checkbox", key: "checkbox", sortable: false },
  { title: "Gender", key: "gender" },
  { title: "Country", key: "country" },
  { title: "Description", key: "description" },
  { title: "Actions", key: "actions", sortable: false },
];

const onDeleteCustomer = async () => {
  await http.delete(`/customers/${dialogDelete.value.customerId}`);
  dialogDelete.value.customerId = null;
  dialogDelete.value.open = false;
};
</script>
