<script setup lang="ts">

defineProps<{
    items: string[]
}>()

</script>

<template>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
</template>

<style scoped>
</style>
