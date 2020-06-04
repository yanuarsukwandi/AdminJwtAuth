
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Posts from './views/posts/index.vue';
import Post from './views/posts/post.vue';
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
    {
        path: '/admin/post/:id?',
        component: Post,
        meta: {
            requireAuth: true
        }
    },



]
