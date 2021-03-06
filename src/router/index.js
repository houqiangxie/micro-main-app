import { createRouter, createWebHashHistory } from "vue-router";



const routes = [
    {
        path: '/index/:afterUser(.*)',
        name: 'Index',
        component:()=>import('../views/index.vue')
    }, {
        path: '/:pathMatch(.*)*',
        redirectTo:'Index'
    }
]


export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})