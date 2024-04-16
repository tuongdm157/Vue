import { defineStore } from "pinia"

const useAppStore = defineStore("appStore", {
    state: () => ({
        count: 0,
        name: "v-dashboard"
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})

export default useAppStore