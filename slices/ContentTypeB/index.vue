<template>
<page-section>
  <div class="lg:grid lg:grid-cols-2 grid-cols-1 lg:flex-none flex flex-col grid__content">
      <div class="content mx-auto bg-grey flex items-center justify-center grid__content--text">
          <div class="2xl:px-40 lg:px-16 md:py-40 px-3 py-10">
            <PrismicRichText class="text-2xl" :field="slice.primary.contentA" />
          </div>
      </div>
      <div class="lg:p-20 grid__content--image">
        <elements-app-img 
            aspect-ratio="40:30"
            class="md:h-full h-40 overflow-hidden"
            :url="slice.primary.imageA.url"
        />
      </div>
  </div>
  <div class="lg:grid lg:grid-cols-2 grid-cols-1 grid__content">
      <div class="lg:p-20 grid__content--image">
        <elements-app-img 
            aspect-ratio="40:30"
            class="md:h-full h-40 overflow-hidden"
            :url="slice.primary.imageB.url"
        />
      </div>
      <div class="content mx-auto bg-grey flex items-center justify-center grid__content--text">
          <div class="2xl:px-40 lg:px-16 md:py-40 px-3 py-10">
            <PrismicRichText class="text-2xl" :field="slice.primary.contentB" />
          </div>
      </div>
  </div>
</page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import PageSection from '~/components/structure/PageSection.vue';

export default {
  components: { PageSection },
  name: "ContentTypeB",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" scoped>
 .grid__content{
   &:nth-child(1){
     .grid__content--image{
          @media (max-width:1024px){
             order: 1;
          }
     }
     .grid__content--text{
          @media (max-width:1024px){
             order: 2;
          }
     }
   }
 }
</style>