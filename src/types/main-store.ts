import type {IProduct} from "@/types/product";

export interface IMainStoreState {
    products: IProduct[],
    categories: string[]
}

export type TMainStoreGetters = {}

export interface IMainStoreActions {
    getProducts: () => void;
    getProductsByCategory: (category: string) => void;
    getCategories: () => void;
    init: () => void;
}