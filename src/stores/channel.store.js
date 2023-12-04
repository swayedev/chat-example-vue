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
                },
                {
                    id: 3,
                    name: "Charl",
                    username: "charlieboi",
                    note: "Trolling",
                    activity: "Playing destiny 2",
                    status: "online",
                    avatar: "https://media.tenor.com/_bTaLmoLSc4AAAAd/troll-pilled.gif"
                },
                {
                    id: 4,
                    name: "Troll",
                    username: "4chan",
                    note: "Trolling",
                    activity: "Playing destiny 2",
                    status: "online",
                    avatar: "https://media4.giphy.com/media/98pZs1ZVaWb1C/giphy.gif"
                }
            ],
            messages: [
                {
                    id: 1,
                    author: 2,
                    content: "Hello, How are you?"
                },
                {
                    id: 2,
                    author: 1,
                    content: "I'm fine, thanks!"
                },
                {
                    id: 3,
                    author: 2,
                    content: "Ready for destiny 2?"
                },
                {
                    id:4,
                    author: 1,
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\n 🥹 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    id:5,
                    author: 3,
                    content: "ollie ollie, ollie, oooooo"
                },
                {
                    id:6,
                    author: 4,
                    content: "ollie ollie ollie, oooooohhhhhhhh"
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
