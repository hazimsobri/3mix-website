<template>
<page-section>
     <div class="relative overflow-hidden" >
        <div class="relative overflow-hidden bg-black h-full w-full md:mt-0 mt-16 hero__image" >
          <!-- <PrismicImage class="md:h-full h-40 animate__image--scale--opacity" data-scroll :field="slice.primary.image" /> -->
            <elements-app-img 
                aspect-ratio="40:15"
                class="md:h-full h-20 animate__image--scale--opacity"
                data-scroll
                :url="slice.primary.image.url"
            />
        </div>
        <div class="absolute bottom-8 left-0 ">
            <div class="content flex flex-col md:text-7xl  text-4xl text-white " >
                <span class="title-text animate__text--3d" data-scroll><PrismicRichText class="main__pages--title" :field="slice.primary.title" /></span>
                <span class="text-italic animate__text--3d" data-scroll><PrismicRichText class="main__pages--title" :field="slice.primary.subtitle" /></span>
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
  name: "Hero",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style>
.main__pages--title p{margin-bottom: 0px}
</style>
<style lang="scss" scoped>
.hero__image{
  // &::after{
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  //   background: #000;
  //   opacity: 0.2;
  // }
}
.title-text{
  color: #A078A0;
}
</style>