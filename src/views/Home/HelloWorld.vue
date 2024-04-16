<script setup lang="ts">
import router from "../../router/router";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import BButton from "../../components/BButton.vue";

defineProps<{}>();

const goToCounterPage = () => {
  router.push("/counter");
};
</script>

<template>
  <div>
    <Breadcrumbs :items="['Home']" />
    <div class="pa-3">
      <div class="mb-3">Hello World</div>
      <BButton variant="primary" />
      <BButton variant="secondary" />
      <BButton variant="success" />
      <BButton variant="info" />
      <BButton variant="warning" />
      <BButton variant="danger" />
      <BButton variant="dark" />
      <BButton variant="light" />
      <BButton variant="outline-primary" />
      <BButton variant="outline-secondary" />
      <BButton variant="outline-success" />
      <BButton variant="outline-info" />
      <BButton variant="outline-warning" />
      <BButton variant="outline-danger" />
      <BButton variant="outline-dark" />
      <BButton variant="outline-light" />
    </div>
  </div>
</template>

<style scoped></style>
