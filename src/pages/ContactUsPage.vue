<template>
    <div>
    

    <NavbarUI/>
  <!-- contact section -->

  <section class="contact_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="form_container">
            <div class="heading_container">
              <h2>
                Contact Us
              </h2>
            </div>
            <form action="">
              <div>
                <input type="text" placeholder="Full Name " v-model="contactUs.name" />
              </div>
              <div>
                <input type="email" placeholder="Email" v-model="contactUs.email"/>
              </div>
              <div>
                <input type="text" placeholder="Phone number" v-model="contactUs.number" />
              </div>
              <div>
                <input type="text" class="message-box" v-model="contactUs.message" placeholder="Message" />
              </div>
              <div class="d-flex ">
                <button @click.prevent="submitContactUs">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-7">
          <div class="img-box">
            <img src="../assets/images/contact-img.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end contact section -->


  <!-- info section -->

  <section class="info_section ">
    <div class="info_container ">
      <div class="container">
        <div class="info_contact ">
          <a href="#" class="link-box">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span>
              Location
            </span>
          </a>
          <a href="#" class="link-box">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>
              Call +01 1234567890
            </span>
          </a>
          <a href="#" class="link-box">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span>
              demo@gmail.com
            </span>
          </a>
        </div>
        <div class="social_container">
          <div class="heading_container heading_center">
            <h2>
              Follow Us
            </h2>
            <p class="col-md-6 col-lg-5 mx-auto px-0">
              Aliquam, aut. Quam adipisci error nulla repellendus nihil asperiores, deserunt sed veritatis. Dolores magnam aperiam omnis! Architecto odit consectetur maxime consequatur ipsum.
            </p>
          </div>
          <div class="social-box">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end info section -->


  <!-- footer section -->
  <footer class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </footer>
  <!-- footer section -->
    </div>
</template>

<script setup>
import {reactive} from "vue"
import NavbarUI from '../components/NavbarUI.vue';
import api from "../http/api";

const contactUs=reactive({
    "name":"",
    "email":"",
    "number":"",
    "message":""
})

const submitContactUs=async()=>{
      try{
          await api.post(`api/contactus`,contactUs)
          contactUs.name=""
          contactUs.email=""
          contactUs.number=""
          contactUs.message=""
       }catch(error)
      {
        console.log(error)
      }
}


</script>

<style scoped>

</style>