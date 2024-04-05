<template>
  <div ref="menu" class="mobile__menu fixed w-full h-full pb-8 overflow-hidden top-0 left-0">
    <div class="fixed w-full h-full top-0 left-0 bottom-0 overflow-y-scroll"> 
      <div class="">
        <div class="w-full pt-16 pb-1 header-text text-lg mobile__menu--items">
          <div class="mt-10 mobile__menu--contact">
              <div class="py-1 mobile__menu--item relative">
                <div class=" text-xl mb-2 title-text">Details</div>
                  <div class="flex items-center" >
                      <ul class=" mb-5">
                        <li class="mb-2"><nuxt-link to="/about" @click.native='closeMenu()' >Company</nuxt-link></li>
                        <li class="mb-2"><nuxt-link to="/randd" @click.native='closeMenu()' >R&amp;D</nuxt-link></li>
                        <li class="mb-2"><nuxt-link to="/products" @click.native='closeMenu()' >Products</nuxt-link></li>
                        <li class="mb-2"><nuxt-link to="/work-environment" @click.native='closeMenu()' >Environment</nuxt-link></li>
                      </ul>
                  </div> 
              </div>
              <div class=" text-xl mb-2 title-text">Address</div>
              <pre class=" mb-5">
                Unit No. 31-7, 7th Floor,
                The Boulevard Mid Valley,
                Lingkaran Syed Putra, Mid Valley City,
                59200, Kuala Lumpur.
              </pre>
              <div class=" mb-5">
                <div class=" text-xl mb-2 title-text">Contact</div>
                  <div class="mb-2">
                      <a href="mailto:enquiry@anhsin.io" class="text-lg underline"> enquiry@anhsin.io</a>
                  </div>
                  <div>
                      <a href="" class="text-lg underline"></a>
                  </div>
              </div>
            <div class="mt-10">
                <nuxt-link to="/contact" @click.native='closeMenu()'>
                    <button class="relative button bg-blue px-7 py-3.5">
                        <span class="relative">Contact Us</span>
                    </button>
                </nuxt-link>
            </div>
              <!-- <div class="mt-10">
                <div class=" text-xl header-text mb-2">Social</div>
                  <ul class="lg:flex items-center">
                      <li class="pr-8 pb-2 "><a href="https://www.facebook.com/AeroJellycom" target="_blank" rel="noreferrer">Facebook</a> </li>
                      <li class="pr-8 pb-2 "><a href="https://www.linkedin.com/company/aerojelly/" target="_blank"  rel="noreferrer">LinkedIn</a> </li>
                  </ul>
              </div> -->
              <div class="my-10">
                <p class="copyright">  <span>&copy; <span id="copyright-year">2023</span> Anhsin Technology Sdn Bhd. All Rights Reserved.</span> </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'
export default {
name: "fullscreenmenu",
    mounted() {
            if (this.$refs.menu) {
                let target = this.$refs.menu;
                disableBodyScroll(target);
            }
    },

    beforeDestroy() {
        if (this.$refs.menu) {
            let target = this.$refs.menu;
            enableBodyScroll(target);
        }
    },
    data()  {
       return {}   
    },
    props:[],
    methods:{
      closeMenu() {
          this.$store.dispatch("app/SET_STATE", {
              menuOpen: false,
          });
      },
    },
    mounted(){
          document.querySelector('#copyright-year').innerText = new Date().getFullYear();
    },
    computed:{}
}
</script>

<style lang="scss" scoped>
.mobile__menu{
  z-index: 997;
  background: #fff;
} 


.mobile__menu--contact{
    padding: 0.8rem 0.7rem;    
}
.mobile__menu--icon{
    transform: rotate(90deg);
}

</style>