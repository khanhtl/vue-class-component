const route = {
  path: "/products",
  children: [
    {
      path: "",
      name: 'products',
      component: () => import('./views/product-list.vue')
    },
    {
      path: ":id",
      name: "product",
      component: () => import('./views/product-detail.vue')
    }
  ]
};

export default route;