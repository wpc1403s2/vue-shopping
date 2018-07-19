import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Routers from './router.js';
import App from './app.vue';
import './style.css';
import product_data from './product';

Vue.use(VueRouter);
Vue.use(Vuex);

const RouterConfig = {
  mode: 'history',
  rouoter: Routers
};

const router = new VueRouter(RouterConfig);
router.beforeEach((to,from,next)=>{
  window.document.title = to.meta.title;
  next();
})

router.afterEach((to, from, next) => {
  window.srcollTo(0, 0);
});

const store = new Vuex.Store({
  state: {
    productList: [],
    cartList: []
  },
  getter: {},
  mutations: {
    setProductList(state, data) {
      console.log('dispatch》》actions：getProductList》》mutations:setProductList');
      state.productList = data;
    }
  },
  actions: {
    getProductList(context) {
      console.log('dispatch》》actions：getProductList');
      setTimeout(() => {
        context.commit('setProductList', product_data);
      }, 500);
    }
  }
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => {
    return h(App);
  }
});
