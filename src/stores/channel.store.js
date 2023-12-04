import { defineStore } from 'pinia'

export const useChannelStore = defineStore('channel', {
    state: () => ({
        joined: [{
            id: 1,
            members: [
                {
                    id: 1,
                    name: "Tony",
                    username: "tmeister",
                    note: "Shopping",
                    activity: "Playing destiny 2",
                    status: "online",
                    avatar: "https://i.pinimg.com/564x/17/aa/48/17aa484b520a96167baf5f3f4627cca3.jpg"
                },
                {
                    id: 2,
                    name: "Derp",
                    username: "dstar",
                    note: "Coding",
                    activity: "Playing destiny 2",
                    status: "online",
                    avatar: "https://media.tenor.com/E05AfL5sZ08AAAAC/goku-lol.gif"
                }
            ]
        }],
        available: [],
        current: 1
    }),
    getters: {
        activeChannel: state => {
            return state.joined.find(channel => channel.id === state.current)
        },
    },
    actions: {
        findMemberById(channel, id) {
            return channel.members.find(member => member.id === id);
        },
    },
})

// function findChannelMember(channel, id) {
//     return channel.members.find(member => member.id === id);
// }