<script setup lang="ts">
import router from "../../router/router";
import Breadcrumbs from "../../components/Breadcrumbs.vue";

defineProps<{ }>()

const goToCounterPage = () => {
    router.push("/counter")
}
</script>

<template>
    <div>
        <Breadcrumbs :items="['Home']"/>
        <div class="pa-3">
            <div class="mb-3">Homepage</div>
            <v-btn @click="goToCounterPage">
                Go to counter page
            </v-btn>
        </div>
    </div>
</template>

<style scoped>
</style>
