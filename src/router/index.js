import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import SearchPage from '@/SearchPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "Home"
            }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/search',
            name: 'SearchPage',
            component: SearchPage
        }
    ]
})
