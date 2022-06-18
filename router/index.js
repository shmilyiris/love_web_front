import { createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView'
import CheckInView from '../views/CheckInView'
import PhotoAlbumView from '../views/PhotoAlbumView'
import NotFoundView from '../views/NotFoundView'

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
        path: '/johnson_iris/404',
        name: '404',
        component: NotFoundView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router
  