<template>
<page-section>
    <div class="lg:grid lg:grid-cols-2 grid-cols-1 lg:flex-none flex flex-col grid__content">
      <div class="content mx-auto bg-black text-white flex items-center justify-center grid__content--text">
          <div class="2xl:px-40 lg:px-16 md:py-10 px-3 py-10">
            <!-- <PrismicRichText class="text-2xl" :field="slice.primary.contentA" /> -->
              <div class="text-2xl  md:text-4xl flex flex-col ">
                      Technology stack our PWA team use for progressive 
                      web application development includes but not limited to
              </div>
          </div>
      </div>
      <div class="lg:p-20 p-5 grid__content--logos">
          <div class="grid grid-cols-3">
              <div v-for="(item, index) in slice.items" :key="index">    
                    <elements-app-img 
                        aspect-ratio="1:1"
                        :url="item.image.url"
                    /> 
              </div>
          </div>
      </div>
  </div>
</page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import PageSection from '~/components/structure/PageSection.vue';
import AppMarquee from '~/components/elements/AppMarquee.vue'
import 'hooper/dist/hooper.css';
export default {
  components: {  AppMarquee, PageSection, },
  name: "ContentAutoSlider",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),


   data: () => ({

   }),
}
</script>

<style scoped>



</style>
