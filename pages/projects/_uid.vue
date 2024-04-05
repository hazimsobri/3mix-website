<template>
    <LeniScroll>
      <LocomotiveScroll ref="scroller" :getted-options="{ smooth: false, getDirection: true,}">
        <TemplatesHeader class="header" ref="navhead"  />  
            <page-section class="project__page">  
                <div class="lg:h-screen bg-violet">
                    <div class="lg:grid lg:grid-cols-2 grid-cols-1 w-full h-full">
                        <div class="hero__block--text bg-violet product-hero--text">
                                <div class="content flex flex-col lg:justify-between h-full">
                                <div>
                                    <div class="md:text-7xl text-4xl flex flex-col text-black mt-10">
                                        <span class="title-text " >{{ $prismic.asText(projects.data.maintitlea) }}</span>
                                        <span class="text-italic" >{{ $prismic.asText(projects.data.maintitleb) }}</span>
                                    </div>
                                </div>
                                <div class="mb-10 lg:pt-0 pt-14">
                                    <div class="flex justify-end" >
                                        <span class="md:text-2xl text-lg mr-5">{{ $prismic.asText(projects.data.mainsubtitle) }}</span>
                                    </div >
                                </div>
                                </div>
                        </div>
                        <div class="hero__block--image relative overflow-hidden">
                            <div class="overflow-hidden relative h-full w-full " data-scroll >
                                <elements-app-img class="md:h-full w-full h-0 overflow-hidden home__hero--image animate__image--scale--opacity parallax-section"
                                    data-scroll
                                    aspect-ratio="40:21"
                                    :url="projects.data.image.url"
                                /> 
                            </div>
                        </div>
                    </div>
                    </div>           
                   <div class="relative h-full w-full">
                        <div class="relative">
                          <div class="lg:grid lg:grid-cols-2">
                            <article class=" h-full flex justify-center items-center">
                                  <div class=" md:p-20 py-10 p-5 flex">
                                    {{ $prismic.asText(projects.data.seccontent) }}
                                  </div>
                              </article>
                              <article class="flex flex-col lg:p-20 p-5 bg-violet">
                                    <div class="text-3xl text-6Axl md:text-4xl flex flex-col justify-between h-full" >
                                            <aside>
                                                <span  class="title-text" >
                                                Dive into the 
                                                </span> 
                                                <span  class="text-italic" >
                                                    Anhsin Universe
                                                </span> 
                                            </aside>
                                            <span class="md:w-1/2 w-9/12 ml-auto mt-20">
                                                <p class="md:text-base text-sm">
                                                    Where Fantasy Becomes Your Brand’s Reality!
                                                </p>
                                            </span>
                                    </div>
                              </article>
                          </div>                           
                        </div>
                        <div class="relative bg-violet">
                            <div class="relative overflow-hidden"> 
                                <div class="lg:mx-20 px-4 z-10 lg:py-15 relative xl:grid xl:grid-cols-12">
                                    <div class="bg-white my-20 lg:col-start-3 lg:col-end-11">
                                        <div class="h-full">
                                            <elements-app-img class="md:h-full w-full h-0 overflow-hidden home__hero--image animate__image--scale--opacity parallax-section"
                                                data-scroll
                                             aspect-ratio="40:21"
                                             :url="projects.data.secimage.url"                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                          <div>
                            <SliceZone :slices="slices" :components="components" />
                          </div>
                   </div>
            </page-section>
            <TemplatesFooter />
    </LocomotiveScroll>
    </LeniScroll>
</template>

<script>
import { components } from "~/slices";
import PageSection from '~/components/structure/PageSection.vue';
import LeniScroll from '@/components/LeniScroll.vue'
export default {
    data() {
    return { components };
  },
  components: { PageSection, LeniScroll },
    mounted() {

    },
  async asyncData({ $prismic, params, error }) {
    try{
      const projects = await $prismic.api.getByUID('projects', params.uid)
      return {
          slices: projects.data.slices,
          projects,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  methods:{}
}
</script>
<style lang="scss" scoped>
.product-hero--text{
    padding-top: 4.125rem;
}
</style>