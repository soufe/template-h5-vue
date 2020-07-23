import VueRouter, { Route } from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    $api: any;
    $route: Route;
    $router: VueRouter;
  }
}
