import {defineStore} from 'pinia'
import type {IProductStoreActions, IProductStoreState, TProductStoreGetters} from "@/types/productStore";
import {ProductsService} from "@/services/ProductsService";

export const useProductStore = defineStore<
    'product-store',
    IProductStoreState,
    TProductStoreGetters,
    IProductStoreActions
    >({
    id: 'product-store',
    state: () => {
        return {
            product: null,
            isLoading: false
        }
    },
    actions: {
        async getProduct(id: string) {
            this.isLoading = true;
            this.product = await ProductsService.getOneProduct(id)
            this.isLoading = false;
        }
    }
})