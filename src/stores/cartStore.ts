import {defineStore} from 'pinia'
import type {ICartStoreActions, ICartStoreState, TCartStoreGetters} from "@/types/cart-store";
import type {IProduct} from "@/types/product";

export const useCartStore = defineStore<
    'cart-store',
    ICartStoreState,
    TCartStoreGetters,
    ICartStoreActions
    >({
    id: 'cart-store',
    state: () => {
        return {
            products: [],
        }
    },
    getters: {
         totalCost(state: ICartStoreState) {
            return state.products
                .reduce((acc, product) => acc + (product.count * product.price), 0)
        }
    },
    actions: {
         addProduct(product: IProduct) {
            const candidateProduct = this.products.find(cartProduct => cartProduct.id === product.id);
            if (candidateProduct) {
                candidateProduct.count++
                return
            }
            this.products.push({...product, count: 1})
        },
        removeProduct(id: number) {
             const product = this.products.find(cartProduct => cartProduct.id === id)
            if (!product) {
                return
            }
            if (product.count === 1) {
                this.products = this.products.filter(cartProduct => cartProduct.id !== id)
            } else {
                product.count--
            }
        }
    }
})