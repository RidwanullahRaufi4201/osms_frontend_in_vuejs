import LoginPage from '../pages/AuthUI/LoginPage.vue'
import RegiserPage from '../pages/AuthUI/RegisterPage.vue'
import HomePage from '../pages/HomePage.vue'
import ServicesPage from '../pages/ServicePage.vue'
import NotFound from '../pages/errors/NotFound.vue'
import RequestStatus from '../pages/Dashboard/RequestStatus.vue'
import SubmitRequest from '../pages/Dashboard/SubmitRequest.vue'
import ProfilePage from '../pages/Dashboard/ProfilePage.vue'
import ChangePassword from '../pages/Dashboard/ChangePassword.vue'
import Dashboard from '../pages/Dashboard/DashboardPage.vue'
import RequestsPage from '../pages/Dashboard/RequestsPage.vue'
import TechnicainPage from '../pages/Dashboard/TechinicainPage.vue'
import WorkOrderPage from '../pages/Dashboard/WorkOrderPage.vue'
import AboutUs from '../pages/AboutUs.vue'
import TeamPage from '../pages/TeamPage.vue'
import ContactUs from '../pages/ContactUsPage.vue'
import RequestersPage from '../pages/Dashboard/RequestersPage.vue'
import ContactusDashoard from '../pages/Dashboard/ContactUsDashboard.vue'

const routes=[
    {
        path:"/login",
        component:LoginPage,
        name:'login',
        meta:{
            guest:true
        }
    },
    {
        path:"/regiser",
        component:RegiserPage,
        name:'regiser',
        meta:{
            guest:true
        }
    },
    {
        path:"/",
        component:HomePage,
        name:'home',
        meta:{
            authRequired:false
        }
        
    },
    {
        path:"/aboutus",
        component:AboutUs,
        name:'aboutus',
        meta:{
            authRequired:false
        }
        
    },
    {
        path:"/service",
        component:ServicesPage,
        name:'service',
        meta:{
            authRequired:true
        }
    },
    {
        path:"/team",
        component:TeamPage,
        name:'team',
        meta:{
            authRequired:true
        }
    },
    {
        path:"/contactus",
        component:ContactUs,
        name:'contactus',
        meta:{
            authRequired:true
        }
    },
    {
        path:"/contactusdashboard",
        component:ContactusDashoard,
        name:'contactusdashboard',
        meta:{
            authRequired:true
        }
    },
    {
        path:"/profile",
        component:ProfilePage,
        name:'profile',
        meta:{
            authRequired:true,
           
        }
    },
    {
        path:"/dashboard",
        component:Dashboard,
        name:'dashboard',
        meta:{
            authRequired:true,
           
        }
    },
  
    {
        path:"/submitrequest",
        component:SubmitRequest,
        name:'submitreqest',
        meta:{
            authRequired:true,
           
        }
    },
    {
        path:"/requeststatus",
        component:RequestStatus,
        name:'requeststatus',
        meta:{
            authRequired:true,
           
        }
    },
    {
        path:"/changepassword",
        component:ChangePassword,
        name:'changepassword',
        meta:{
            authRequired:true,
           
        }
    },
    {
        path:"/requests",
        component:RequestsPage,
        name:'requests',
        meta:{
            authRequired:true,
           
        }
    },
    {
        path:"/technicains",
        component:TechnicainPage,
        name:'technicains',
        meta:{
            authRequired:true,
           
        }
    },
    {
        path:"/workorder",
        component:WorkOrderPage,
        name:'workorder',
        meta:{
            authRequired:true,
           
        }
    },
    {
        path:"/requesters",
        component:RequestersPage,
        name:'requesters',
        meta:{
            authRequired:true,
           
        }
    },
    

 
    {
        path:"/:notFound(.*)",
        component:NotFound,
        name:'notfound'
    }
]

export default routes