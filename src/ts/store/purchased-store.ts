import {defineStore} from "pinia"

export const usePurchasedStore
    = defineStore({
    id: 'purchased',
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage,
                paths: [
                    'data'
                ]
            }
        ]
    },
    state: () => {
        return {
            data: [{
                thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
                id: 0,
                name: '产品1',
                description: "这是描述",
                price: '2.00',
                purchasedTime: '2023/10/11 8:43:00',
                income: +1145.14
            },{
                thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
                id: 2,
                name: '产品2',
                description: "这是描述",
                price: '2.00',
                purchasedTime: '2023/10/11 9:43:00',
                income: +1919.81
            }]
        }
    }
})