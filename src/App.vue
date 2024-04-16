<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
    drawer: true
});

</script>

<template>
    <v-app>
        <v-navigation-drawer v-model="state.drawer">
            <v-list>
                <v-list-item title="Navigation drawer"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar density="compact">
            <v-app-bar-nav-icon
                @click="state.drawer = !state.drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
        <v-main style="min-height: 300px;">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
