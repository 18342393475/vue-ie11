import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    // 动态路径参数 以冒号开头
    routes: [
        {path: '/', component: ()=> import('@/views/index.vue') },
        {path: '/home', component: ()=> import('@/views/home.vue') },
        {path: '/Account/Login', component: ()=> import('@/views/Account/Login.vue') },
    ]
})
export default router