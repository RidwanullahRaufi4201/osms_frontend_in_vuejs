<template>
    
              <!-- <form action="" @submit.prevent="handleSubmit">
                
                <div>
                   <div>
                    <label for="">Email</label>
                    <input type="text" v-model="user.email">
                   </div>
                   <div>
                    <label for="">Password</label>
                    <input type="password" v-model="user.password">
                   </div>
                   <div>
                    
                   <button type="submit">submit</button>
                   </div>
              </div>
              </form> -->
              <section class=" gradient-form" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 justify-content-center">

                <div class="text-center">
                  <img  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style="width: 170px;margin:auto" alt="logo">
                  <h4 class="h4 text-bold-500">Customer's Happiness is Our Aim</h4>
                </div>

                <form action="" @submit.prevent="handleSubmit">

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example11">Email</label>
                    <input type="email" id="form2Example11" v-model="user.email" class="form-control"
                      placeholder="email address" />
                    
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example22">Password</label>

                    <input type="password" id="form2Example22" placeholder="password" v-model="user.password" class="form-control" />
                  </div>
                  <div class="form-outline mb-4" v-if="loginError">
                        <p class="text-danger" v-for="err in loginError.email" :key="err" >{{ err}}</p>
                  </div>
                 
                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                      in</button>
                    <!-- <a class="text-muted" href="#!">Forgot password?</a> -->
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <router-link to="/regiser" class="btn btn-outline-danger">Create new</router-link>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4 h4 fw-bolder">We are more than just a company</h4>
                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
</template>

<script setup>
import { useAuthStore } from '../../store/auth'
import { reactive,ref} from 'vue';
import { useRouter } from 'vue-router';
  const router=useRouter()
   const store= useAuthStore()
   const user=reactive({
      email:"",
      password:""
   })
     const loginError=ref(null)
const handleSubmit=async()=>{
       console.log("submitted")
     try{
      await store.handleLogin(user)
      router.push('/dashboard')
     }catch(error){
      loginError.value=error.response.data.errors
           
     }

}
</script>
 
<style scoped>
.gradient-custom-2 {
/* fallback for old browsers */
background: #fccb90;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}

@media (min-width: 768px) {
.gradient-form {
height: 100vh !important;
}
}
@media (min-width: 769px) {
.gradient-custom-2 {
border-top-right-radius: .3rem;
border-bottom-right-radius: .3rem;
}
}
</style>