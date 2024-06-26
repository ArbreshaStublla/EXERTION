import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectPage from "../pages/ProjectsPage";
import NewsPage from "../pages/NewsPage";
import ContactPage from "../pages/ContactPage"
import ErrorPage from "../pages/ErrorPage.vue";
import ProjectInfo from '@/pages/ProjectInfo.vue';
import NewsInfo from "../pages/NewsInfo";
import StockPage from "../pages/StocksPage.vue"


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectPage
  },
  {
    path: '/projectinfo',
    name: 'projectinfo',
    component: ProjectInfo
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage
  },
  {
    path: '/newsdetail',
    name: 'newsdetail',
    component: NewsInfo
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/stock',
    name: 'stock',
    component: StockPage
  },
 
  {
    path: "/:catchAll(.*)",
    name: 'error',
    component: ErrorPage,
    
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
