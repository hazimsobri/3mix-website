<template>
  <!-- <section class="section">
    <PrismicRichText :field="slice.primary.title" class="title" />
    <PrismicRichText :field="slice.primary.description" />
  </section> -->
      <nav class=" py-2 md:px-9 px-4 flex items-center ">
        <nuxt-link to="/" class="nav__logo"><SvgLogo /></nuxt-link>
          <ul role="menu" class="nav__menu lg:flex items-center ml-auto relative hidden">
              <li class="pl-4"  
                  v-for="(item, index) in slice.items" :key="index"
                  @mouseover="selectIndex(index);" 
                  @mouseout="ItemIndex = null;"
                  :class='{"has-children" : ItemIndex == index}'
              >
                <div class="relative">
                    <button class="nav__item flex items-center"> 
                      <span class="pr-2"><PrismicRichText :field="item.primary.title" /></span>
                      <span class="nav__item--arrow rotate-90">
                        <SvgArrow-3 />
                      </span> 
                    </button>
                </div>
                <div class="nav__submenu px-4" v-show="ItemIndex == index" :class='{"is-active" : ItemIndex == index}'>
                    <ul class="nav__subitems" >
                      <li v-for="(child, index2) in item.children" :key="index2">
                        <nuxt-link :to="child.url" class="relative flex flex-col link__anim text-lg"> 
                            <span class="link__anim-item --main" ><PrismicRichText :field="child.title" /></span>
                            <span class="link__anim-item --hover">
                              <PrismicLink :field="child.link">
                                    <PrismicRichText :field="child.title" />
                              </PrismicLink></span>  
                        </nuxt-link>
                      </li>
                    </ul>
                </div>
            </li>
          </ul>
        <div class="lg:flex pl-10 hidden">
            <app-button class="" to="contact">
              <span class="relative">Contact Us</span>
            </app-button>
        </div>
        <div class="flex lg:hidden ml-auto" @click="toggleMenu()">
          <span :class="{menuOpen}"></span>
           <TemplatesHamburger />
        </div>
      </nav>
</template>
<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import AppButton from '../../components/elements/AppButton.vue';
export default {
  name: "Menu",
  components: {AppButton},
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
data: () => ({ ItemIndex: null }),
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

 nav{ background: #fff;}
.nav__submenu{
    background: #fff;
    position: absolute;
    left: 0;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.nav__menu li{
  .nav__item--arrow{
        transition:transform .3s cubic-bezier(.215,.61,.355,1);
  }
  &.has-children{
     .nav__item--arrow{
        transform: rotate(-90deg);
        transition:transform .3s cubic-bezier(.215,.61,.355,1);
     }

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
