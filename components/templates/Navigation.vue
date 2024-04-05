<template>
      <nav class="py-2 md:px-9 px-4 flex items-center nav" id="nav">
        <nuxt-link to="/" aria-label="Logo" class="nav__logo"><SvgLogo class="nav__logo--inner" /></nuxt-link>
          <ul class="nav__menu lg:flex items-center relative hidden">
              <li class="pl-6" > 
                <nuxt-link to="/about" class="inline-flex link__anim relative">
                    <span class="mr-5 link__anim-item --main">Company</span>
                    <span class="mr-5 link__anim-item --hover">Company</span>
                  </nuxt-link>      
              </li>
              <li  class="pl-6"> 
                  <nuxt-link to="/randd" class="inline-flex link__anim relative">
                      <span class="mr-5 link__anim-item --main">R&amp;D</span>
                      <span class="mr-5 link__anim-item --hover">R&amp;D</span>
                  </nuxt-link>  
              </li>
              <li  class="pl-6"> 
                  <nuxt-link to="/products" class="inline-flex link__anim relative">
                      <span class="mr-5 link__anim-item --main">Products</span>
                      <span class="mr-5 link__anim-item --hover">Products</span>
                  </nuxt-link>
              </li>
              <li  class="pl-6"> 
                  <nuxt-link to="/work-environment" class="inline-flex link__anim relative">
                      <span class="mr-5 link__anim-item --main">Environment</span>
                      <span class="mr-5 link__anim-item --hover">Environment</span>
                  </nuxt-link>  
              </li>
          </ul>
        <div class="lg:flex pl-10 hidden ml-auto">
          <nuxt-link to="/contact">
            <button class="relative button bg-blue px-7 py-3.5">
                  <span class="relative">Contact Us</span>
            </button>
            </nuxt-link>
        </div>
        <div class="flex lg:hidden ml-auto" @click="toggleMenu()">
          <span :class="{menuOpen}"></span>
           <TemplatesHamburger />
        </div>
      </nav>
</template>
<script>
import AppButton from '../elements/AppButton.vue';

export default {
components: {AppButton},
    data: () => ({
    }),

   mounted(){
   },

    computed:{
      menuOpen() {
          return this.$store.getters["app/getState"]("menuOpen");
      },
    },
    methods: {
        toggleMenu(state) {
            this.$store.dispatch("app/SET_STATE", {
                menuOpen: state === false ? false : !this.menuOpen
            });
                return true;
        },
        selectIndex(Index) {
          this.ItemIndex = Index;
        },      
    }
}
</script>

<style lang="scss" scoped>

  .nav__logo{
    width: 12rem;
    z-index: 1;
  }

 #nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 998;
  }


.nav__menu li{
  .nav__item--arrow{
        transition:transform .3s cubic-bezier(.215,.61,.355,1);
  }
  .nav__item{
      &.--main{
        transform: translateZ(0);
        transition: opacity .3s cubic-bezier(.215,.61,.355,1),transform .3s cubic-bezier(.215,.61,.355,1);
      }
      &.--hover{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
        transform: translate3d(0,101%,0) skewX(50deg);
        transition: opacity .3s cubic-bezier(.215,.61,.355,1),transform .3s cubic-bezier(.215,.61,.355,1);
      }
  }
  &:hover{
    .nav__item.--main{
        opacity: 0;
        transform: translate3d(0,-101%,0) skewX(-50deg);
    }
    .nav__item.--hover{
      opacity: 1;
      transform: translateZ(0);
    }
  }
}
.nav__subitems{
  margin-left: 1rem;
  font-size: 1.5rem;
  li{
    margin-bottom: 0.5rem;
    overflow: hidden;
  }
}

</style>
<style scoped>
.nav__logo svg{
 
}
</style>