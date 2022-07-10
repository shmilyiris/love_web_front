import { createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView'
import CheckInView from '../views/CheckInView'
import PhotoAlbumView from '../views/PhotoAlbumView'
import NotFoundView from '../views/NotFoundView'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'
import PhotoPostView from '../views/PhotoPostView'
import CheckInEditView from '../views/CheckInEditView'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/johnson_iris',
        name: 'home',
        component: HomeView
    },
    {
        path: '/johnson_iris/album',
        name: 'album',
        component: PhotoAlbumView
    },
    {
        path: '/johnson_iris/checkin',
        name: 'checkin',
        component: CheckInView
    },
    {
        path: '/johnson_iris/login',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/johnson_iris/register',
        name: 'register',
        component: RegisterView,
    },
    {
        path: '/johnson_iris/404',
        name: '404',
        component: NotFoundView,
    },
    {
        path: '/johnson_iris/photopost',
        name: 'photo-post',
        component: PhotoPostView,
    },
    {
        path: '/johnson_iris/checkin-edit/:eventid/',
        name: 'checkin-edit',
        component: CheckInEditView,
    },
    {
        path: '/johnson_iris/:catchAll(.*)',
        name: '404',
        component: NotFoundView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router
  