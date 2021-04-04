import {createRouter, createWebHistory} from 'vue-router'
import DcHero from './pages/DcHero.vue'
import Calendar from './pages/Calendar.vue'
import Home from './pages/Home.vue'
import Markdown from './pages/Markdown.vue'
import Slider from './pages/Slider.vue'
import Calculator from './pages/Calculator.vue'
import ReusableModal from './pages/ReusableModal.vue'
import Chat from './pages/Chat.vue'
import store from './store/index.js'
import UserCrud from './pages/UserCrud.vue'
import Tenserflow from './pages/Tenserflow.vue'

const routes = [
    {path: "/", component:Home},
    {path: "/dc-heros", component:DcHero, meta: {middleware:"auth"}},
    {path: "/calendar", component:Calendar},
    {path: "/markdown", component:Markdown},
    {path: "/slider", component:Slider},
    {path: "/user-crud", component:UserCrud},
    {path: "/calculator", component:Calculator, meta: {middleware:"auth"}},
    {path: "/reusable-modal", component:ReusableModal},
    {path: "/tenserflow", component:Tenserflow},
    {path: "/chat", 
        component:Chat, 
        meta: {middleware:"auth"},
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, _, next)=>{
    if (to.meta.middleware){
        const middleware = require(`./middleware/${to.meta.middleware}`);
        if(middleware){
            middleware.default(next, store);
        } else {
            next();    
        }
    } else {
        next();
    }
})
export default router;