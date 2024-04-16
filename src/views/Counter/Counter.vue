<script setup lang="ts">
import useAppStore from "../../store/appStore";
import Breadcrumbs from "../../components/Breadcrumbs.vue";

defineProps<{}>()

const appStore = useAppStore();

const onClick = () => {
    appStore.increment()
}
</script>

<template>
    <Breadcrumbs :items="['Counter']" />
    <div class="pa-3">
        <div class="mb-3">Counter: {{ appStore.count }}</div>
        <v-btn @click="onClick">Increase</v-btn>
    </div>
</template>

<style scoped>
</style>
