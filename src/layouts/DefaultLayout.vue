<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  drawer: true,
});
</script>

<template>
  <VApp>
    <VNavigationDrawer v-model="state.drawer">
      <VList>
        <VListItem title="Navigation drawer"></VListItem>
      </VList>
    </VNavigationDrawer>
    <VAppBar density="compact">
      <VAppBarNavIcon @click="state.drawer = !state.drawer"></VAppBarNavIcon>
      <VToolbarTitle>Application</VToolbarTitle>
    </VAppBar>
    <VMain>
      <div class="bg-grey-lighten-2 w-100 h-100 pa-6">
        <div class="w-100 h-100 bg-white rounded-lg elevation-2 pa-6">
          <slot />
        </div>
      </div>
    </VMain>
  </VApp>
</template>
