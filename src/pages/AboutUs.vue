<template>

<NavbarUI/>
  <!-- about section -->

  <section class="about_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="img-box ">
            <img src="../assets/images/about-img.jpg" class="box_img" alt="about img">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="detail-box pr-md-2">
            <div class="heading_container">
              <h2 class="">
                About Us
              </h2>
            </div>
            <p class="detail_p_mt">
              Facere corporis quis non quas assumenda repudiandae rem, at fugit rerum fugiat deserunt sequi necessitatibus accusantium doloribus veniam quo consequatur cumque illum nostrum consectetur nobis impedit deleniti.
            </p>
            <p>
              Nisi quod sequi minima? Saepe cupiditate, voluptates temporibus vel magni id laborum odio quis dicta quaerat tempora nemo. Atque ratione numquam fugit ullam eos illo adipisci dicta dignissimos cumque quasi!
            </p>
            <a href="about.html" class="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- about section ends -->
  <!-- info section -->

  <section class="info_section ">
    <div class="info_container ">
      <div class="container">
        <div class="info_contact">
          <a href="#" class="link-box">
            <span>
              Location
            </span>
          </a>
          <a class="nav-link d-flex align-items-center" href="">
             <img class="__icon rounded" src="../assets/images/call_icon.png" alt="">
              <span class="font__weight">Call : + 01 1234567890</span>
            </a>
            <a class="nav-link d-flex align-items-center" href="">
              <img class="__icon" src="../assets/images/images.png" alt="">
              <span  class="font__weight">   demo@gmail.com</span>
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
 
</template>

<script setup>
import NavbarUI from '../components/NavbarUI.vue'
</script>

<style scoped>
.__icon{
  width: 30px;
  margin-right: 4px;
  border-radius: 15x;
}

</style>