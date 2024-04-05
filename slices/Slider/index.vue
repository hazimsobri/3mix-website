<template>
<div class="lg:grid lg:grid-cols-12" id="solutions">
    <div class="col-span-4 md:text-5xl text-4xl flex flex-col pt-10 lg:pb-0 pb-32 content" >
       <span class="title-text animate__text-view--3d" data-scroll><PrismicRichText class="nobottom_margin" :field="slice.primary.titleA" /></span>
       <span class="text-italic animate__text-view--3d" data-scroll><PrismicRichText class="nobottom_margin"  :field="slice.primary.titleB" /></span>
    </div>
    <div class="col-span-8 bg-grey md:p-24 py-10 pr-0">
        <hooper :settings="hooperSettings" class="">
            <slide 
                v-for="(item, index) in slice.items" :key="index"
            >
            <div class="mx-3 flex flex-col h-full service__card link__anim">
                 <div class="overflow-hidden" >
                    <elements-app-img 
                      aspect-ratio="1:1"
                      class="service__card--img"
                      :url= "item.image.url"
                    />
                    <!-- <PrismicImage class="service__card--img" :field="item.image" /> -->
                 </div>
                 <div class="title-text">
                    <PrismicRichText class="text-3xl" :field="item.title" />
                 </div>
                 <div class="service__card--sub mt-auto">
                    <div class="relative inline-block">
                      <span class="link__anim-arrow --main"><SvgArrow /></span>
                      <span class="link__anim-arrow --hover"><SvgArrow /></span>
                    </div>
                 </div>
              </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  name: "Slider",
  components: {
      Hooper,
      Slide,
      HooperNavigation,
    },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
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
  background-color: #842583 !important;
  transform: translateY(70%) !important;
}
.hooper-next::before, .hooper-prev::before{
  content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #8a5b89;
    z-index: -1;
    transform: scaleX(0);
    transition: transform .3s cubic-bezier(.215,.61,.355,1);
}
.hooper-next:hover:before, .hooper-prev:hover:before{
  transform: scaleX(1);
}
.hooper-next:hover, .hooper-prev:hover svg{
  fill: #fff;
}
.hooper-next::before{
  transform-origin: center left;
}
.hooper-prev::before{
  transform-origin: center right;
}
.hooper-next, .hooper-prev svg{
 fill: #fff;
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
            stroke:#8a5b89;
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