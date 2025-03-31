import { createRouter, createWebHistory } from 'vue-router';

import HomeFeed from '../views/HomeFeed.vue';
import VideoDetails from '../views/VideoDetails.vue';

const routes = [
     {
        path:'/',
        name: "Home",
        component: HomeFeed,
    },
    {
        path:'/video/:id',
        name: "VideoDetails",
        component: VideoDetails,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;