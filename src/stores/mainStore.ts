import {defineStore} from 'pinia'
import type {IMainStoreActions, IMainStoreState, TMainStoreGetters} from "@/types/main-store";
import {ProductsService} from "@/services/ProductsService";

export const useMainStore = defineStore<
    'main-store',
    IMainStoreState,
    TMainStoreGetters,
    IMainStoreActions
    >({
    id: 'main-store',
    state: () => {
        return {
            products: [],
            categories: []
        }
    },
    actions: {
        async getProducts() {
            const data = await ProductsService.getAllProducts()
            if (data) {
                this.products = data
            }
        },
        async getProductsByCategory(category: string) {
            const data = await ProductsService.getProductsByCategory(category)
            if (data) {
                this.products = data
            }
        },
        async getCategories() {
            this.categories = await ProductsService.getCategories()
        },
        async init() {
            await this.getProducts();
            await this.getCategories();
        }
    }
})
