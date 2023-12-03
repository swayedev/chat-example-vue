// stores/counter.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        name: "Tony",
        username: "tmeister",
        note: "Shopping",
        activity: "playing destiny 2",
        status: "online",
        picture: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
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