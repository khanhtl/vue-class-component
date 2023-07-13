import axios from "axios";
import type {IProduct} from "@/types/product";

export class ProductsService {
    static async getAllProducts():Promise<IProduct[]> {
        try {
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
            return response.data
        } catch (e) {
            console.error(e)
            return []
        }
    }

    static async getOneProduct(id: string):Promise<IProduct | null> {
        try {
            const response = await axios.get<IProduct>(`https://fakestoreapi.com/products/${id}`)
            return response.data
        } catch (e) {
            console.error(e)
            return null
        }
    }

    static async getProductsByCategory(category: string): Promise<IProduct[]> {
        try {
            const response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products/category/${category}`)
            return response.data
        } catch (e) {
            return []
        }
    }

    static async getCategories(): Promise<string[]> {
        try {
            const response = await axios.get<string[]>('https://fakestoreapi.com/products/categories')
            return response.data
        } catch (e) {
            return []
        }
    }
}