import { defineStore } from 'pinia'

export const useChannelStore = defineStore('channel', {
    state: () => ({
        joined: [
            {
                id: 1,
                name: "The Group",
                picture: "https://i.pinimg.com/564x/17/aa/48/17aa484b520a96167baf5f3f4627cca3.jpg",
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
                    },
                    {
                        id: 7,
                        author: 4,
                        content: "https://www.youtube.com/watch?v=VX_FhT9RhH8"
                    },
                    {
                        id: 8,
                        author: 2,
                        content: "https://media.tenor.com/E05AfL5sZ08AAAAC/goku-lol.gif"
                    },
                    {
                        id: 8,
                        author: 3,
                        content: "https://media.tenor.com/sAqMHb0yzHgAAAAC/dancing-cat-jump-cat.gif"
                    }
                ]
            },
            {
                id: 2,
                name: "",
                picture: "",
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
                        content: "Nope, coding right now derpy!."
                    },
                    {
                        id:5,
                        author: 2,
                        content: "ollie ollie, ollie, oooooo"
                    },
                    {
                        id:6,
                        author: 1,
                        content: "ollie ollie ollie, oooooohhhhhhhh"
                    },
                    {
                        id: 7,
                        author: 2,
                        content: "https://www.youtube.com/watch?v=VX_FhT9RhH8"
                    },
                    {
                        id: 8,
                        author: 2,
                        content: "https://media.tenor.com/E05AfL5sZ08AAAAC/goku-lol.gif"
                    },
                    {
                        id: 8,
                        author: 1,
                        content: "https://media.tenor.com/sAqMHb0yzHgAAAAC/dancing-cat-jump-cat.gif"
                    }
                ]
            }
        ],
        available: [],
        current: 2
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
