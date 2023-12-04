import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        id: 1,
        name: "Tony",
        username: "tmeister",
        note: "Shopping",
        activity: "playing destiny 2",
        status: "online",
        avatar: "https://i.pinimg.com/564x/17/aa/48/17aa484b520a96167baf5f3f4627cca3.jpg"
    }),

    actions: {
        changeStatus(status) {
            this.status = checkStatus(status)
        },
    },
})

function checkStatus(number) {
    switch (number) {
        case 1:
            return "online"
        case 2:
            return "offline"
        case 3:
            return "busy"
        case 4:
            return "away"
        default:
            return "unknown"
    }
}