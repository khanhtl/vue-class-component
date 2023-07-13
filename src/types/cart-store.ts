import type {IProduct} from "@/types/product";

export interface ICartProduct extends IProduct {
    count: number;
};

export interface ICartStoreState {
    products: ICartProduct[]
};

export type TCartStoreGetters = {
    totalCost: (state: ICartStoreState) => number
}

export interface ICartStoreActions {
 addProduct: (product: IProduct) => void;
 removeProduct: (id: number) => void;
}