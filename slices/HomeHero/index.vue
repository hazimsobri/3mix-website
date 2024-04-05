<template>
<page-section>
    <div class="lg:h-screen bg-violet">
      <div class="lg:grid lg:grid-cols-2 grid-cols-1 w-full h-full">
          <div class="hero__block--text bg-violet hero__main">
                <div class="content flex flex-col lg:justify-between h-full">
                  <div>
                    <div class="text-5xl text-3Axl flex flex-col text-black mt-10">
                        <span class="title-text animate__text--3d" data-scroll><PrismicRichText :field="slice.primary['title-a']" class="main__hero--title" /></span>
                        <span class="text-italic animate__text--3d" data-scroll><PrismicRichText :field="slice.primary['title-b']" class="main__hero--title" /></span>
                        <span class="title-text animate__text--3d" data-scroll><PrismicRichText :field="slice.primary['title-c']" class="main__hero--title" /></span>
                    </div>
                    <div class="flex justify-end">
                      <p class="mt-16 flex flex-col animate__text--opacity --delay05" data-scroll>
                          <span >Let’s create waves in the business world </span> 
                          <span>by embracing technology in the digital era.</span>
                          <span>Business digitalization can be simple with us.</span>
                      </p>
                    </div>
                  </div>
                  <div class="mb-10 lg:pt-0 pt-14">
                    <a href="#about" data-scroll-to class=" link__button link__anim animate__text--opacity --delay06 text-link" data-scroll>
                        <span class="md:text-2xl text-lg mr-5 link__anim-item --main">Let's Explore</span>
                        <span class="md:text-2xl text-lg mr-5 link__anim-item --hover">Let's Explore</span>
                        <div class="relative">
                            <span class="link__anim-arrow --main"><SvgArrow /></span>
                            <span class="link__anim-arrow --hover"><SvgArrow /></span>
                        </div>
                    </a >
                  </div>
                </div>
          </div>
          <div class="hero__block--image relative overflow-hidden">
            <div class="overflow-hidden relative h-full w-full " data-scroll >
                <elements-app-img class="md:h-full w-full h-0 overflow-hidden home__hero--image animate__image--scale--opacity parallax-section"
                    data-scroll
                    aspect-ratio="40:21"
                    :url="slice.primary['hero-image'].url"
                /> 
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
  name: "HomeHero",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  methods:{

  },
  mounted(){

  }

}
</script>

<style lang="scss" scoped>
  .link__button{
    display: inline-flex !important;
  }
  .hero__block--text{
     position: relative;
     z-index: 10;
  }
  .hero__main{
    padding-top: 4.125rem;
  }
</style>
<style>
.main__hero--title p{margin-bottom: 0px}
</style>