<template>
<page-section id="rd">
   <div class="content py-10 home__steps"> 
      <div class="">
          <div >
              <div class="text-3xl text-6Axl md:text-4xl flex flex-col lg:py-0 md:py-20 py-5">
                  <span class="title-text">Every<span class="text-italic"> step</span> in the</span>
                  <span class="title-text">development</span>
                  <span class="title-text"><span class="text-italic">Process</span> is vital!</span>
              </div>
          </div>
      </div>
      <article class="lg:pt-20 mb-40 py-5 mx-5">
        <div class="lg:grid lg:grid-cols-5 lg:gap-x-2">
          <div class="flex flex-col gap-y-2 step__item mb-10" v-for="(item, index) in slice.items"
            :key="index" data-scroll
          >
              <span>
                <elements-app-img
                    data-scroll
                    aspect-ratio="40:21"
                    :url="item.image.url"
                /> 
              </span>
              <span class="text-grey"><PrismicRichText :field="item.step" class="nobottom_margin" /></span>
              <h3 class="text-xl title-text "><PrismicRichText :field="item.title" class="nobottom_margin" /></h3>
              <span><PrismicRichText :field="item.desc" class="overflow-hidden nobottom_margin pt-3" /></span>
          </div>
        </div>
      </article>
   </div>
</page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import PageSection from '~/components/structure/PageSection.vue'
import AppMarquee from '~/components/elements/AppMarquee.vue'
export default {
  components: { 
    PageSection, 
    AppMarquee, 
  },
  name: "StickyCard",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
   data: () => ({
     active: null,
   }),
  methods: {
    toggleAccordion(item) {
            if (item === this.active) {
                this.active = null
                this.$nuxt.$emit('update-locomotive')
            } else {
                this.active = item
                this.$nuxt.$emit('update-locomotive')
            }
    },
    beforeEnterAccordion: function (el) {
          el.style.display = 'block'
          el.style.maxHeight = null
          el.myHeight = el.offsetHeight
          el.style.maxHeight = 0
          el.style.display = null
          this.$nuxt.$emit('update-locomotive')
    },
    enterAccordion:function(el, done){
        this.$nuxt.$emit('update-locomotive')
        this.tl = this.$gsap.timeline({})
            this.tl.to(el, {
                duration:.6,
                maxHeight: el.myHeight + 'px',
                ease: 'Power4.inOut',
                onComplete:()=>{
                  el.style.maxHeight = "auto";
                  this.$nuxt.$emit('update-locomotive');
                  done();
                }
            })
    },
    leaveAccordion:function(el, done){
            this.$gsap.to(el, {
                duration:.6,
                maxHeight: 0,
                ease: 'Power4.inOut',
                onComplete:()=>{
                  this.$nuxt.$emit('update-locomotive');
                  done();
                }
            })
    }

  },
}
</script>

<style lang="scss" scoped>
.step__item {
  &:nth-child(2){
     transform: translateY(3rem);
  }
  &:nth-child(3){
     transform: translateY(6rem);
  }
  &:nth-child(4){
     transform: translateY(9rem);
  }
  &:nth-child(5){
     transform: translateY(12rem);
  }
}
.home__steps{
  background-image: url('/img/wall.png');
}
</style>