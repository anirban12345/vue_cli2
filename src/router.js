import {createRouter,createWebHashHistory} from 'vue-router'
import AppHome from './components/AppHome'
import AppAbout from './components/AppAbout'


const routes = [
    { path: '/', component: AppHome },
    { path: '/about', component: AppAbout },
  ]

  
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router;