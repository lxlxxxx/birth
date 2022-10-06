import Vue from "vue"
import VueRouter from "vue-router";
Vue.use(VueRouter)
import Timeline from "@/pages/Timeline"
import Home from "@/pages/Home"
export default new VueRouter({
    routes:[
        {
          path:'/home',
          component:Home
        },
        {
            path:'/timeline',
            component:Timeline
        },
        {
            path:'*',
            redirect:"Home",
        }
        
    ]
})