<template>
  <page-section class="bg-gray-200">
    <div class="lg:grid lg:grid-cols-12">
      <div class="col-span-8">
        <div class="lg:p-5">
          <div class="content md:text-5xl text-4xl pt-20 mb-10 "  >
              <div class="title-text animate_elext-view--3d" data-scroll><PrismicRichText class="nobottom_margin" :field="slice.primary.titleA" /></div>
              <div class="title-text animate_elext-view--3d" data-scroll><PrismicRichText class="text-italic nobottom-margin" :field="slice.primary.titleB" /></div>
          </div>
          <div class="mb-20 content">
              <div
                v-for="(item, index) in slice.items"
                :key="index"
                class="accordion__item py-10"
                @click="toggleAccordion(index)"
                :class='{"active" : active === index}'
              >
                  <div class='accordion_elitle flex justify-between items-center '>
                      <div class="relative">
                              <div class="accordion__header">
                                  <div class="md:text-2xl text-xl" >
                                    <prismic-rich-text :field="item.title" class="title nobottom_margin" />
                                  </div>
                              </div>
                      </div>
                      <div class="accordion__icon">
                          <span ></span>
                      </div>
                  </div>
                  <!-- <transition mode="out-in" name="accordion-fade" 
                          v-on:before-enter="beforeEnterAccordion"
                          v-on:enter="enterAccordion"
                          v-on:leave="leaveAccordion"
                          v-bind:css="false"
                  > -->
                      <div ref='accordionWrapper'  v-show="active === index" class='accordion__description--wrapper overflow-hidden'>
                          <div class="pt-1 mx-3 overflow-hidden" >
                              <div class="accordion__content overflow-hidden" >
                                  <prismic-rich-text  :field="item.description" class="accordion__content--inner overflow-hidden nobottom_margin pt-10" :class='{"open" : active === index}' /> 
                              </div>
                          </div>
                      </div>
                <!-- </transition> -->
              </div>
          </div>
        </div>

      </div>
    </div>
  </page-section>
</template>

<script>
import PageSection from '~/components/structure/PageSection.vue'
export default {
  components: { PageSection },
  name: "Accordion",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      active: null,
    }
  },
  mounted() {
  },

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
.accordion__item {
    cursor: pointer;
    transition: .4s;
    position: relative;
    margin-top: -1px;
    &::before{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #0B0A10;
    }
    &.active{
     .accordion__icon{
        span{
            &::before{
                transform: scaleY(0);
            }
        }

    }       
    }


    .accordion__icon{
        position: relative;
        width: 1.875rem;
        height: 1.875rem;
        span{
            &::before{
                content: "";
                top: 0;
                right: 0.9375rem;
                height: 100%;
                width: 2px;
                position: absolute;
                background-color: #0B0A10;
                transition: transform .3s cubic-bezier(.215,.61,.355,1);
                margin-right: -1px;
            }
            &::after{
                content: "";
                top: .9375rem;
                left: 0;
                width: 100%;
                height: 2px;
                margin-top: -1px;
                position: absolute;
                background-color: #0B0A10;
            }
        }

    }

    .small-margin {
        margin-top: .125rem;
    }
}
</style>
<!-- <style >
.accordion__item .accordion__content--inner p{
      transition: transform .6s cubic-bezier(0.23, 1, 0.32, 1);
      transform: translateY(100px);
}
.accordion__item .accordion__content--inner.open p{
      transition-delay: .5s;
      transform: translateY(0);
}
</style> -->