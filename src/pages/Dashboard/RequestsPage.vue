<template>
    <body id="page-top">

<!-- Page Wrapper -->
<div id="wrapper">

    <!-- Sidebar -->
    <ul style="background:#ff5722;" class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <router-link to="/dashboard" class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">{{ store.user.name }}</div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">
        <li class="nav-item">
            <router-link to="/dashboard" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Dasbhoard</span>
            </router-link>
        
        </li>
    <div v-if="store.user.privilege==1">
      
             <!-- Nav Item - Pages Collapse Menu -->
             <li class="nav-item">
            <router-link to="/workorder" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Work Order</span>
            </router-link>
        
        </li>
           <!-- Nav Item - Pages Collapse Menu -->
           <li class="nav-item">
            <router-link to="/requests" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Requests</span>
            </router-link>
        
        </li>
  
      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
            <router-link to="/" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Assets</span>
            </router-link>
        
        </li>
            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
            <router-link to="/technicains" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Technician</span>
            </router-link>
        
        </li>
  
       <!-- Nav Item - Pages Collapse Menu -->
       <li class="nav-item">
            <router-link to="/requesters" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Requester</span>
            </router-link>
        
        </li>
             <!-- Nav Item - Pages Collapse Menu -->
             <li class="nav-item">
            <router-link to="/contactusdashboard" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Contact Us</span>
            </router-link>
        
        </li>
             <!-- Nav Item - Pages Collapse Menu -->
             <li class="nav-item">
            <router-link to="/" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Sell Report</span>
            </router-link>
        
        </li>
             <!-- Nav Item - Pages Collapse Menu -->
             <li class="nav-item">
            <router-link to="/" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Work Report</span>
            </router-link>
        
        </li>
             <!-- Nav Item - Pages Collapse Menu -->
             <li class="nav-item">
            <router-link to="/" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Change Password</span>
            </router-link>
        
        </li>
  
    </div>
  <div v-else>
  
  
        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <router-link to="/profile" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Profile</span>
            </router-link>
        
        </li>
        
                <!-- Nav Item - Pages Collapse Menu -->
                <li class="nav-item">
            <router-link to="/submitrequest" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Submit Request</span>
            </router-link>
        
        </li>
                <!-- Nav Item - Pages Collapse Menu -->
                <li class="nav-item">
            <router-link to="/requeststatus" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Service Status</span>
            </router-link>
        
        </li>
              <!-- Nav Item - Pages Collapse Menu -->
              <li class="nav-item">
            <router-link to="/changepassword" class="nav-link collapsed" >
                <i class="fas fa-fw fa-cog"></i>
                <span>Change Password</span>
            </router-link>
        
        </li>


     
    </div>



    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

            <!-- Topbar -->
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                <!-- Sidebar Toggle (Topbar) -->
                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>

           

                <!-- Topbar Navbar -->
                <ul class="navbar-nav ml-auto">

                    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                    <li class="nav-item dropdown no-arrow d-sm-none">
                        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-search fa-fw"></i>
                        </a>
                        <!-- Dropdown - Messages -->
                        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form class="form-inline mr-auto w-100 navbar-search">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">
                                            <i class="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <!-- Nav Item - Alerts -->
                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-bell fa-fw"></i>
                            <!-- Counter - Alerts -->
                            <span class="badge badge-danger badge-counter">3+</span>
                        </a>
                        <!-- Dropdown - Alerts -->
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="alertsDropdown">
                            <h6 class="dropdown-header">
                                Alerts Center
                            </h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-primary">
                                        <i class="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 12, 2019</div>
                                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-success">
                                        <i class="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-warning">
                                        <i class="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </a>
                            <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                    </li>

                    <!-- Nav Item - Messages -->
                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-envelope fa-fw"></i>
                            <!-- Counter - Messages -->
                            <span class="badge badge-danger badge-counter">7</span>
                        </a>
                        <!-- Dropdown - Messages -->
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="messagesDropdown">
                            <h6 class="dropdown-header">
                                Message Center
                            </h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                        alt="...">
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div class="font-weight-bold">
                                    <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                        problem I've been having.</div>
                                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                        alt="...">
                                    <div class="status-indicator"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">I have the photos that you ordered last month, how
                                        would you like them sent to you?</div>
                                    <div class="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                        alt="...">
                                    <div class="status-indicator bg-warning"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">Last month's report looks great, I am very happy with
                                        the progress so far, keep up the good work!</div>
                                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                        alt="...">
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                        told me that people say this to all dogs, even if they aren't good...</div>
                                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                            </a>
                            <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                        </div>
                    </li>

                    <div class="topbar-divider d-none d-sm-block"></div>

                              <!-- Nav Item - User Information -->
                              <li  class="nav-item dropdown no-arrow">
                        <a  @click="handleLogout" class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="mr-2 d-none d-lg-inline text-white small p-2 rounded"  style="background:#ff5722;" >Logout</span>
                        
                        </a>
                     
                    </li>


                </ul>

            </nav>
            <!-- End of Topbar -->

            <!-- Begin Page Content -->
            <div class="container-fluid ">

                <!-- Page Heading -->
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Requests</h1>
                    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>

            
             <div class="row" >
                <div class="col-md-4" >
                    <div class="card" v-for="request in allRequestsformusers" :key="request.id">
  <div class="card-header  text-white" style="  background: rgb(255, 87, 34);" >
   Request ID {{ request.id }}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p> <strong>{{ request.requestInfo }} </strong> </p>
      <footer class="blockquote-footer">
        {{ request.description }}
      </footer>
      <p > <small>Request Date</small>  {{ request.date }}</p>
      <div>
          <a href="" class="btn btn-danger mt-2 btn-sm" @click.prevent="assignwork(request.id)">View</a>
          <a href="" class="btn btn-secondary ms-1 btn-sm mt-2">Close</a>
      </div>
    </blockquote>
  </div>
</div>
                </div>
               
                <div class="col-md-8" v-if="allRequestsformusers">
                    <form action="" >
            <div class="col-md-10 mx-auto">
                   <div class="form-grup">
                              <label>Request Info</label>
                              <input type="text" placeholder="request info" v-model="getRequest.requestInfo" class="form-control">
                   </div>
                   <div class="form-grup">
                              <label>Description</label>
                              <textarea class="form-control" v-model="getRequest.description" ></textarea>
                   </div>
                   <div class="form-grup">
                              <label>Name</label>
                              <input type="text" class="form-control" v-model="getRequest.name"  readonly>
                   </div>
                   <div class="input-group my-3">
                    <span class="input-group-text">Address 1</span>           
  <input type="text" class="form-control" v-model="getRequest.addressOne"  placeholder="House No:123" aria-label="Username">
  <span class="input-group-text">Address 2</span>
  <input type="text" class="form-control"  v-model="getRequest.addressTwo" placeholder="sector" aria-label="Server">
</div>
                 <div class="row">
                    <div class="col-md-4">
                        <div class="form-grup">
         <label>City</label>
        <input type="text" v-model="getRequest.city" class="form-control">
</div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-grup">
         <label>State</label>
        <input type="text" v-model="getRequest.state"  class="form-control">
</div>

                    </div>
                    <div class="col-md-2">
                        <div class="form-grup">
         <label>zip  </label>
        <input type="text"  v-model="getRequest.zip" class="form-control">
</div>

                    </div>
                 </div>
                 <div class="row">
                    <div class="col-md-5">
                        <div class="form-grup">
         <label>Email</label>
        <input type="email"  v-model="getRequest.email" class="form-control">
</div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-grup">
         <label>Mobile</label>
        <input type="text" v-model="getRequest.mobile"  class="form-control">
</div>

                    </div>
                    
                
                 </div>
                 <div class="row">
                    <div class="col-md-8">
                        <div class="form-grup">
         <label>Assign to Technician</label>
          <select name="" v-if="allTechnicain" class="form-control" v-model="assignData.technicainid" id="">
              <option value="">Select Technicain</option>
              <option v-for="technicain in allTechnicain" :key="technicain.id"  :value="technicain.id">{{ technicain.name }}</option>
          </select>
</div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-grup">
         <label>Date</label>
        <input type="date" v-model="assignData.date" class="form-control">
</div>

                    </div>
                    
                
                 </div>
                
                 


<div>
              <button class="btn_update"  @click="assignToTechnicain" type="button">Assign</button>
              <button class="btn_update" @click="resetForm" type="button">Reset</button>
</div>
            </div>
           
          </form>

                </div>
             </div>
             <div  v-if="allRequestsformusers==null">
                     <h4 class="h4 text-center"> No Pending Request </h4>
             </div>


            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Your OSMS 2023</span>
                </div>
            </div>
        </footer>
        <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

</div>




</body>
</template>

<script setup>
import '../../assets/css/dashboard.css'
import '../../assets/js/jquery.min.js'
import '../../assets/js/bootstrap.js'
import '../../assets/js/easing.js'
import { useAuthStore } from '../../store/auth';
import { useRouter } from 'vue-router';
import {ref,onMounted, onUpdated} from 'vue'
import api from '../../http/api';
const store=useAuthStore()
const router=useRouter()

const handleLogout=async()=>{
         await store.handleLogout()
         router.push("/login")
   }


const allRequestsformusers=ref(null)
const getRequest=ref({
    requestInfo:"",
    description:"",
    name:"",
    addressOne:"",
    addressTwo:"",
    email:"",
    mobile:"",
    zip:"",
    state:"",
    city:"",
})
const assignData=ref({
    technicainid:"",
    date:""
})



const assignwork=async(id)=>{
     try{
       const data=await api.get(`api/checkrequeststatus/${id}`)
       getRequest.value=data.data.request
     }catch(error)
     {
        console.log(error)
        
        
     }
}


const getAllUsersRequests=async()=>{

       try{
       const data=await api.get(`api/getTotalRequest`)
       if(data.data.request.length){
     
          allRequestsformusers.value=data.data.request
        console.log( allRequestsformusers.value+"fdsaf")
        getAllUsersRequests()
       }else{
        allRequestsformusers.value=null
          console.log( allRequestsformusers.value)
          getAllUsersRequests()

       }

       }catch(error){
        console.log(error)
       }

}


const resetForm=()=>{
    getRequest.value={
    requestInfo:"",
    description:"",
    name:"",
    addressOne:"",
    addressTwo:"",
    email:"",
    mobile:"",
    zip:"",
    state:"",
    city:""
}
}




const assignToTechnicain=async()=>{
       
      try{
        const data=await api.post(`api/assignwork`,{
            requestInfo:getRequest.value.requestInfo,
            description:getRequest.value.description,
            name:getRequest.value.name,
            addressOne:getRequest.value.addressOne,
            addressTwo:getRequest.value.addressTwo,
            email:getRequest.value.email,
            mobile:getRequest.value.mobile,
            zip:getRequest.value.zip,
            state:getRequest.value.state,
            city:getRequest.value.city,
            date:assignData.value.date,
            technicainid:assignData.value.technicainid
 

        })
        await api.get(`api/changeStatus/${getRequest.value.id}`)
        resetForm()
      }catch(error){
        console.log(error)
      }
}


const allTechnicain=ref(null)
const getAllTechnicains=async()=>{
     try{
        const data=await api.get(`api/getTechnicains`)
        allTechnicain.value=data.data.technicains
     }catch(error){
        console.log(error)
     }
}

onMounted(()=>{
  
    getAllUsersRequests()
    getAllTechnicains()

})


</script>

<style scoped>


.router-link-active{
    font-weight: bolder;
    color: white;
    font-size: large;
}

.btn_update{
       background: rgb(255, 87, 34);
       padding: 5px;
       color: white;
       border-radius: 5px;
       margin-left: 3px;
       margin-top: 10px;
}
</style>