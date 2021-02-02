import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                { 
                    id: 'm1',
                    img: 'https://i.ibb.co/XDVTk21/mountain.jpg',
                    title: 'Un viaggio in montagna',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                { 
                    id: 'm2',
                    img: 'https://i.ibb.co/dggy6jy/surf.jpg',
                    title: 'Andare a fare Surf',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                { 
                    id: 'm3',
                    img: 'https://i.ibb.co/742hMy4/snowboard.jpg',
                    title: 'Snowboard in Trentino',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
            ],
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find((memory) => memory.id === memoryId);
            };
        }
    }
});

export default store;