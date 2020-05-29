
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Posts from './views/posts/index.vue'
export const routes =
[
    {
        path : '/admin/login',
        component : Login,
    },
    {
        path : '/admin/home',
        component : Home,
        meta: {
            requireAuth: true
        }
    },
    {
        path : '/admin/posts',
        component : Posts,
        meta: {
            requireAuth: true
        }
    },


]
