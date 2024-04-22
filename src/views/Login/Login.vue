<template>
  <div class="d-flex justify-center align-center h-screen bg-white">
    <VForm @submit.prevent="onSubmit">
      <VCard
        class="mx-auto pa-12 pb-8 pt-6"
        elevation="8"
        width="448"
        rounded="lg"
      >
        <div class="text-center text-light-blue text-h6 mb-2">
          Welcome Back!
        </div>
        <div class="mb-8 text-center text text-teal">Sign in to continue.</div>

        <div class="text-body-2 text-grey-darken-4 mb-1">Username</div>

        <VTextField
          density="compact"
          placeholder="Enter username"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model="user.username"
        ></VTextField>

        <div
          class="text-body-2 text-grey-darken-4 d-flex align-center justify-space-between mb-1"
        >
          Password
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a
          >
        </div>

        <VTextField
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model="user.password"
        ></VTextField>

        <VBtn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          type="submit"
        >
          Log In
        </VBtn>

        <VCardText class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </VCardText>
      </VCard>
    </VForm>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import router from "../../router/router";

const visible = ref(false);
const user = reactive({
  username: "",
  password: "",
});

const onSubmit = () => {
  console.log("data", user);
  localStorage.setItem("LoggedIn", "loggedIn");
  router.push("/home");
};
</script>
