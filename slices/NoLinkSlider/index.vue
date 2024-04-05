<template>
<page-section>
  <div class="lg:grid lg:grid-cols-12">
    <div class="col-span-4 md:text-5xl text-4xl flex flex-col pt-20 lg:pb-0 pb-32 content" >
       <span class="title-text animate__text-view--3d" data-scroll><PrismicRichText class="nobottom_margin" :field="slice.primary.titleA" /></span>
       <span class="text-italic animate__text-view--3d" data-scroll><PrismicRichText class="nobottom_margin"  :field="slice.primary.titleB" /></span>
    </div>
    <div class="col-span-8 bg-grey md:p-24 py-10 pr-0">
        <hooper :settings="hooperSettings" >
            <slide  v-for="(item, index) in slice.items" :key="index">
              <div class="mx-3 flex flex-col service__card link__anim">
                 <div class="overflow-hidden" >
                    <elements-app-img 
                      aspect-ratio="1:1"
                      class="service__card--img"
                      :url= "item.image.url"
                    />
                 </div>
                 <div>
                    <PrismicRichText class="text-3xl mb-3" :field="item.title" />
                    <PrismicRichText :field="item.description" />
                 </div>
              </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
    </div>
  </div>
</page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import PageSection from '~/components/structure/PageSection.vue';
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  components: { 
    PageSection,
    Hooper,
    Slide,
    HooperNavigation, 
  },
  name: "NoLinkSlider",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),


   data: () => ({
      hooperSettings: {
        centerMode: false,
        infiniteScroll:true,
        wheelControl:false,
                    breakpoints: {
                        2400: {
                            itemsToShow: 2.5
                        },
                        1800: {
                            itemsToShow: 2.5
                        },
                        1500: {
                            itemsToShow: 2.5
                        },
                        1100: {
                            itemsToShow: 2.5
                        },
                        1024:{
                          itemsToShow: 2.6
                        },
                        768:{
                          itemsToShow: 2
                        },
                        568:{
                          itemsToShow: 2
                        },
                        0: {
                            itemsToShow: 1.3
                        }
        }
      }
   }),
}
</script>

<style>
.hooper{
  height: 100% !important;
}
.hooper-navigation{
    position: absolute;
    width: 13rem;
    
}
@media (min-width:768px) {
  .hooper-navigation{
    transform: translate(-100%,-100%);
  }
  
}
@media (max-width:768px) {
  .hooper-navigation{
    transform: none ;
    top: -12rem;
    left: 0;
  }
  
}
.hooper-next, .hooper-prev{
  background-color: #214EFF !important;
  transform: translateY(70%) !important;
}
.hooper-next::before, .hooper-prev::before{
  content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00ffec;
    z-index: -1;
    transform: scaleX(0);
    transition: transform .3s cubic-bezier(.215,.61,.355,1);
}
.hooper-next:hover:before, .hooper-prev:hover:before{
  transform: scaleX(1);
}
.hooper-next:hover, .hooper-prev:hover svg{
  fill: #214EFF;
}
.hooper-next::before{
  transform-origin: center left;
}
.hooper-prev::before{
  transform-origin: center right;
}
.hooper-next, .hooper-prev svg{
 fill: #00ffec;
}
.hooper-next{
    right: 6rem !important;
}
.service__card{
  grid-gap: 15px 0;
}
.service__card--sub svg{
    width: 1rem;
    height: 1rem;
}
  .nobottom_margin p{
    margin-bottom: 0;
  }
</style>

<style lang="scss" scoped>

  .service__card--sub{
        svg{
            stroke:#214EFF;
        }
    }
  .service__card{
    overflow: hidden;
    &:hover{
      .service__card--img{
          transform: scale(1.05);
      }
    }

  }
  .service__card--img{
      transition: transform .6s cubic-bezier(.215,.61,.355,1);
  }
</style>
