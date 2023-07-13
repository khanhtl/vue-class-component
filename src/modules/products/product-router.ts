const ProductModule = () => import("./product-module.vue");
import ProductList from './views/product-list.vue'
import ProductDetail from './views/product-detail.vue'
const route = {
  path: "/products",
  component: ProductModule,
  children: [
    {
      path: "",
      component: ProductList
    },

    {
      path: ":id",
      component: () => import("./views/product-detail.vue")
    }
  ]
};

export default route;