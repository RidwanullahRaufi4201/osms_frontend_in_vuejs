<template>
    <!-- <div class="container">
                 <router-link class="bg-red-500" to="/">Home</router-link>
                 <router-link v-if="store.Islogin" to="/service">Services</router-link>
                 <router-link  v-if="!store.Islogin" to="/login">Login</router-link>
                 <a href="#" v-if="store.Islogin" @click="handleLogout">Logout</a>
                 <router-link  v-if="!store.Islogin" to="/regiser">Regiser</router-link>
    </div> -->
       <!-- header section strats -->
       <header class="header_section ">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container px-0">
          <a class="navbar-brand" href="index.html">
            <span>
              OSMS
            </span>
          </a>
          <div class="contact_nav" id="">
            <a class="nav-link " href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              
            </a>
            <a class="nav-link d-flex align-items-center" href="">
             <img class="__icon" src="../assets/images/call_icon.png" alt="">
              <span class="font__weight">Call : + 01 1234567890</span>
            </a>
            <a class="nav-link d-flex align-items-center" href="">
              <img class="__icon" src="../assets/images/images.png" alt="">
              <span  class="font__weight">   demo@gmail.com</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
    <div class="custom_nav2 ">
        <div class="container">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class=" navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex  flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link  class="nav-link"  to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link  class="nav-link"  to="/aboutus">About Us</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link  class="nav-link" v-if="store.Islogin" to="/service">Services</router-link>
                  </li>
               
                  <li class="nav-item">
                    <router-link  class="nav-link"  to="/team">Team</router-link>
                  </li>
              
                  
                  <li class="nav-item">
                    <router-link  class="nav-link"  to="/contactus">Contact Us</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link  class="nav-link" v-if="!store.Islogin" to="/login">Login</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link  class="nav-link" v-if="!store.Islogin" to="/regiser">Regiser</router-link>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link" v-if="store.Islogin" @click="handleLogout">Logout</a>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
 
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';

    const store=useAuthStore()
    const router=useRouter()

   const handleLogout=async()=>{
         await store.handleLogout()
         router.push("/login")
   }
</script>

<style scoped>
   
.__icon{
  width: 30px;
  margin-right: 4px;
  border-radius: 15x;
}

.font__weight{
  font-weight: bold;
}
</style>