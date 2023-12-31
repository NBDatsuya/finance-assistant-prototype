import {createPinia} from 'pinia'
// @ts-ignore
import piniaPluginPersist from "pinia-plugin-persist";

const pinia = createPinia()

pinia.use(piniaPluginPersist)
export default pinia

export * from './store/risk-config-store'
export * from './store/fav-store'
export * from './store/purchased-store.ts'