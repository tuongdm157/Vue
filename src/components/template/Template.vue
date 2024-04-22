<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
    drawer: true,
    rail: false
});

</script>

<template>
    <v-app>
        <v-navigation-drawer v-model="state.drawer" :rail="state.rail" permanent @click="state.rail = false">
            <v-list-item height="48px" title="Logo" nav>
                <template v-slot:append>
                    <v-app-bar-nav-icon @click.stop="state.rail = !state.rail"
                        class="nav_icon_bar"></v-app-bar-nav-icon>
                </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/home"></v-list-item>
                <v-list-item prepend-icon="mdi-account" title="Customer" value="Customer" to="/customer"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar density="compact">
        </v-app-bar>
        <v-main style="min-height: 300px;">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
<style scoped>
.v-list-item__append .nav_icon_bar.v-btn--icon {
    border-radius: unset;
    min-width: unset;
    padding: unset;
}
.v-list-item__append .nav_icon_bar.v-btn--variant-elevated  {
    box-shadow: unset;
    background: unset;
}
.v-list-item__append .nav_icon_bar.v-btn--icon.v-btn--density-default {
    width: 40px;
    height: 40px;
}
</style>
