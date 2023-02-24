import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            name: 'yeweizheng',
            age: 26,
            sex: 'man',
            items: [
                { name: 'shoes', quantity: 1 }
            ],
            hasChanged: false
        }
    },
    getters: {
        getAddAge: (state) => {
            return (num: number) => state.age + num
        },
        getNameAndAge(): string {
            return this.name + this.age;
        }
    },
    actions: {
        saveName(name: string) {
            this.name = name;
        },
    },
})