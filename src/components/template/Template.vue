<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  drawer: true,
  rail: false,
});
</script>

<template>
  <v-app>
    <v-navigation-drawer
      class="bg-green-darken-4"
      v-model="state.drawer"
      :rail="state.rail"
      permanent
      @click="state.rail = false"
    >
      <v-list-item height="56px" title="Logo" nav>
        <template v-slot:append>
          <v-app-bar-nav-icon
            @click.stop="state.rail = !state.rail"
            class="nav_icon_bar"
          ></v-app-bar-nav-icon>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Home"
          value="home"
          to="/home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="Customer"
          value="Customer"
          to="/customers"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar density="comfortable"></v-app-bar>
    <v-main style="min-height: 300px">
      <div class="w-100 h-100 pa-6">
        <div class="w-100 h-100 bg-white rounded-lg elevation-2 pa-6">
          <router-view></router-view>
        </div>
      </div>
    </v-main>
  </v-app>
</template>
<style scoped>
.v-navigation-drawer {
  background-color: #00338d;
}
.v-main {
  background-color: #f0f2f5;
}
.v-list-item__append .nav_icon_bar.v-btn--icon {
  border-radius: unset;
  min-width: unset;
  padding: unset;
}
.v-list-item__append .nav_icon_bar.v-btn--variant-elevated {
  box-shadow: unset;
  background: unset;
}
.v-list-item__append .nav_icon_bar.v-btn--icon.v-btn--density-default {
  width: 40px;
  height: 40px;
  color: white;
}
</style>
