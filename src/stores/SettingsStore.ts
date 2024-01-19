import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
    state: () => {
        return {
            baseUrl: '',
            token:''
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
        },
    },
})
