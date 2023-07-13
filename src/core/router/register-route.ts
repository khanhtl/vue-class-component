import productRouter from "@/modules/products/product-router";
import type { Router } from "vue-router";
export function registerRoute(router: Router)  {
    router.addRoute(productRouter);
}