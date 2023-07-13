import type {IProduct} from "@/types/product";

export interface IProductStoreState {
    product: IProduct | null,
    isLoading: boolean;
}

export type TProductStoreGetters = {}

export interface IProductStoreActions {
    getProduct: (id: string) => void;
}