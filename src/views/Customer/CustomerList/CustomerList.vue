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

  <VTable :hover="true">
    <thead>
      <tr>
        <th>Email</th>
        <th>Name</th>
        <th>Checkbox</th>
        <th>Gender</th>
        <th>Country</th>
        <th>Description</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="customer in customers"
        :key="customer.id"
        @click="() => router.push(`/customers/${customer.id}`)"
      >
        <td>{{ customer.email }}</td>
        <td>{{ `${customer.firstName} ${customer.lastName}` }}</td>
        <td>
          <span v-for="item in customer.checkbox" :key="item">
            {{ item }}
            <br />
          </span>
        </td>
        <td>{{ customer.gender }}</td>
        <td>{{ customer.country }}</td>
        <td>{{ customer.description }}</td>
        <td>
          <VIcon
            icon="mdi-delete"
            @click.stop="() => onDeleteCustomer(customer.id)"
          />
        </td>
      </tr>
    </tbody>
  </VTable>
</template>

<script setup lang="ts">
import { ref } from "vue";
import http from "../../../services/http";
import { useRouter } from "vue-router";
import { Customer } from "../types";

const router = useRouter();

const customers = ref<(Customer & { id: string })[]>([]);

const fetchCustomers = async () => {
  try {
    const response = await http.get("/customers");
    if (response && response.status === 200) {
      customers.value = response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
fetchCustomers();

const onDeleteCustomer = async (customerId: string) => {
  await http.delete(`/customers/${customerId}`);
  await fetchCustomers();
};
</script>
