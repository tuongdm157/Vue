<template>
  <VForm @submit.prevent="onSubmit">
    <VRow justify="space-between">
      <VCol cols="auto">
        <h1 class="text-h4 mb-3">
          {{ customerId ? "Edit Customer" : "Add Customer" }}
        </h1>
      </VCol>

      <VCol cols="auto">
        <VBtn
          variant="tonal"
          class="mr-8"
          @click="() => router.push('/customers')"
          >Cancel</VBtn
        >
        <VBtn variant="outlined" type="submit">Submit</VBtn>
      </VCol>
    </VRow>

    <VRow>
      <VCol>
        <VTextField
          clearable
          label="Email"
          hide-details="auto"
          v-model="email"
          :error="!!errors.email"
          :error-messages="errors.email"
        />
      </VCol>
    </VRow>

    <VRow>
      <VCol>
        <VTextField
          clearable
          label="First Name"
          hide-details="auto"
          v-model="firstName"
          :error="!!errors.firstName"
          :error-messages="errors.firstName"
        />
      </VCol>
      <VCol>
        <VTextField
          clearable
          label="Last Name"
          hide-details="auto"
          v-model="lastName"
          :error="!!errors.lastName"
          :error-messages="errors.lastName"
        />
      </VCol>
    </VRow>

    <VRow>
      <VCol>
        <VTextField
          label="Password"
          hide-details="auto"
          :type="visible.password ? 'text' : 'password'"
          :append-inner-icon="visible.password ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="visible.password = !visible.password"
          v-model="password"
          :error="!!errors.password"
          :error-messages="errors.password"
        />
      </VCol>
      <VCol>
        <VTextField
          label="Confirm Password"
          hide-details="auto"
          :type="visible.confirmPassword ? 'text' : 'password'"
          :append-inner-icon="
            visible.confirmPassword ? 'mdi-eye-off' : 'mdi-eye'
          "
          @click:append-inner="
            visible.confirmPassword = !visible.confirmPassword
          "
          v-model="confirmPassword"
          :error="!!errors.confirmPassword"
          :error-messages="errors.confirmPassword"
        />
      </VCol>
    </VRow>

    <VRow>
      <VCol>
        <VLabel text="Checkbox" class="font-weight-bold" />
        <VCheckbox
          :label="'Choice 1'"
          hide-details="auto"
          v-model="checkbox"
          value="Choice 1"
        />
        <VCheckbox
          :label="'Choice 2'"
          hide-details="auto"
          v-model="checkbox"
          value="Choice 2"
        />
        <VCheckbox
          :label="'Choice 3'"
          hide-details="auto"
          v-model="checkbox"
          value="Choice 3"
        />
        <VCheckbox
          :label="'Choice 4'"
          hide-details="auto"
          v-model="checkbox"
          value="Choice 4"
        />
        <VMessages
          :active="!!errors.checkbox"
          :messages="errors.checkbox"
          color="error"
          style="opacity: unset"
        />
      </VCol>

      <VCol>
        <VLabel text="Radio" class="font-weight-bold" />
        <VRadioGroup v-model="gender">
          <VRadio :label="'Male'" value="Male" />
          <VRadio :label="'Female'" value="Female" />
          <VRadio :label="'No Answer'" value="No Answer" />
        </VRadioGroup>
      </VCol>
    </VRow>

    <VRow>
      <VCol>
        <VSelect
          label="Country"
          :items="[
            'Vietnam',
            'Thailand',
            'Singapore',
            'Philippines',
            'Malaysia',
          ]"
          hide-details="auto"
          v-model="country"
          :error="!!errors.country"
          :error-messages="errors.country"
        />
      </VCol>
    </VRow>

    <VRow>
      <VCol>
        <VTextarea
          label="Description..."
          hide-details="auto"
          v-model="description"
        />
      </VCol>
    </VRow>
  </VForm>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import http from "../../../services/http";
import { useRoute, useRouter } from "vue-router";
import { customerValidationSchema } from "../types";

const router = useRouter();
const route = useRoute();

const customerId = route.params.id;

const visible = ref({
  password: false,
  confirmPassword: false,
});

const fetchCustomer = async () => {
  const response = await http.get(`/customers/${customerId}`);
  if (response && response.status === 200) {
    resetForm({
      values: response.data,
    });
  }
};

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: customerValidationSchema,
  initialValues: {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    checkbox: [],
    gender: "Male",
    country: "",
    description: "",
  },
});

const { value: email } = useField("email");
const { value: firstName } = useField("firstName");
const { value: lastName } = useField("lastName");
const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirmPassword");
const { value: checkbox } = useField("checkbox");
const { value: gender } = useField("gender");
const { value: country } = useField("country");
const { value: description } = useField("description");

const onSubmit = handleSubmit(async (values) => {
  customerId
    ? await http.put(`/customers/${customerId}`, values)
    : await http.post("/customers/", values);
  router.push("/customers");
});

customerId && fetchCustomer();
</script>
