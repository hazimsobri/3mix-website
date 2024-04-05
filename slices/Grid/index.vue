<template>
<page-section>
    <div class="lg:grid lg:grid-cols-12 team__grid">
      <aside class="bg-black text-white col-span-4 content lg:h-screen h-full py-20" >
          <div class="xl:w-96 w-full">
              <div class="title-text text-3xl text-6Axl md:text-4xl mb-5 ">
                    <PrismicRichText :field="slice.primary.title" class="animate__text--3d" data-scroll />
              </div>
                <div>
                    <PrismicRichText :field="slice.primary.description" />
                </div>
          </div>
      </aside> 
      <div class="col-span-8 pr-0 relative py-20">

            <hooper :settings="hooperSettings" class=" flex items-center justify-center"  ref="carousel" @slide="updateCarousel" >
                <slide  v-for="(item, index) in slice.items" :key="index">
                        <div class="content grid grid-cols-2 gap-4 items-center justify-center">
                            <div class="overflow-hidden bg-grey " >
                                <elements-app-img 
                                    aspect-ratio="40:40"
                                    class="h-100 team__profile--image"
                                    :url="item.image.url"
                                />
                            </div>
                            <div class="flex flex-col">
                                <div class="title-text team__profile--name md:text-2xl text-xl">
                                    <PrismicRichText :field="item.title" />
                                </div>
                                <div class="text-italic team__profile--position -mt-1">
                                    <PrismicRichText :field="item.desc" />
                                </div>
                                <div class="flex">
                                    <div class="team__profile--detail text-blue cursor-pointer" @click="toggleDetail(index)" :class='{"active" : active === index}'>
                                         Details <span class="btn__extra">+</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                </slide>
                <hooper-navigation class="lg:h-1/5" slot="hooper-addons"></hooper-navigation>
            </hooper>
            <div class="lg:grid grid-cols-7 gap-2 content team__small--profile hidden">
                    <div class="team__small--image overflow-hidden bg-grey relative cursor-pointer" v-for="(item, index) in slice.items" :key="index"  @click="goToSlide(index)" :class='{"showing" : showing === index}'>
                        <elements-app-img 
                            aspect-ratio="40:40"
                            class="h-100"
                            :url="item.image.url"
                        />
                    </div>
            </div>
      </div>
     </div>
    <div class="team__detail--expanded">
        <article v-for="(item, index) in slice.items" :key="index" :class='{"active" : active === index}' v-show="active === index" aria-hidden="false">
            <div class="team__profile--detail-expanded px-10 pt-20">
                <div class="btn__close text-blue cursor-pointer inline-block" @click="toggleDetail(index)">
                    Close
                </div>
                <div class="py-10 ">
                    <div class="title-text team__profile--name md:text-2xl text-xl">
                        <PrismicRichText :field="item.title" />
                    </div>
                    <div class="text-italic team__profile--position -mt-1">
                        <PrismicRichText :field="item.desc" />
                    </div> 
                    <PrismicRichText class="text-sm" :field="item.detail" />                  
                </div>
                
            </div>
        </article>
    </div>
</page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import PageSection from '~/components/structure/PageSection.vue';
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  components: { 
      PageSection,
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination
   },
  name: "Grid",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
    data() {
    return {
        active: null,
        showing: null,
        hooperSettings: {
            centerMode: false,
            infiniteScroll:false,
            wheelControl:false,
        } 
      }  
    },
  
    mounted(){},
    methods:{
         toggleDetail (item) { 
             let body = document.querySelector('.team__grid') 
             let expandedBody = document.querySelector('.team__detail--expanded')
            if (item === this.active) {
               
                let tl = this.$gsap.timeline()
                    tl.set(expandedBody,{
                        xPercent:0,
                    })
                    tl.fromTo(expandedBody,{
                        xPercent:0,
                    },{
                        duration:1,
                        xPercent:100,
                        ease: 'expo.inOut',
                        onComplete:() =>{
                             this.active = null
                             body.classList.remove('bg-overlay')
                        }
                    })
                this.$nuxt.$emit('start-locomotive')
                this.$nuxt.$emit('update-locomotive')
            } else {
                this.active = item
                let tl = this.$gsap.timeline()
                    tl.set(expandedBody,{
                        xPercent:100,
                    })
                    tl.fromTo(expandedBody,{
                        xPercent:100,
                    },{
                        duration:1,
                        xPercent:0,
                        ease: 'expo.inOut'
                    })
                body.classList.add('bg-overlay')
                this.$nuxt.$emit('stop-locomotive')
                this.$nuxt.$emit('update-locomotive')
                
            }     
        },
        goToSlide(index) {
            this.$refs.carousel.slideTo(index);
            this.showing = index
        },
        updateCarousel(payload) {
            this.myCarouselData = payload.currentSlide;
        }
    }
  
}
</script>

<style scoped>
.team__profile--linkedin a[href~="https://#"]{
    display: none;
}
.team__detail--expanded{
    max-width: 40rem;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    height: 100%;
    color: #fff;
    background: #0B0A10;
    overflow-y: scroll;
}
.team__small--profile{
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
}
.btn__close{
     background: #fff;
    padding: 0.5rem 1rem;
    border-radius: 50rem;
}
.team__small--image:not(.showing){
 filter: blur(2px);
}
</style>
