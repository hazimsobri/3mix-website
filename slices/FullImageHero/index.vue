<template>
<page-section>
   <div class="relative bg-black h-screen overflow-hidden flex items-center">
      <div class="h-full w-full absolute top-0 left-0 overflow-hidden ">
            <div class="relative h-full w-full hero-image" data-scroll data-scroll-speed="-2" >
                    <elements-app-img 
                        aspect-ratio="4:2"
                        data-scroll
                        class="full__image animate__image--scale--opacity"
                        :url="slice.primary.image.url"
                    />
            </div>
      </div>
      <div class="content py-40 ">
          <div class="2xl:text-8xl xl:text-7xl text-5xl text-white z-10 relative">
            <article class="flex flex-col">
                <PrismicRichText :field="slice.primary.titleA" class="title-text --light animate__text--3d" data-scroll />
                <PrismicRichText :field="slice.primary.titleB" class="text-italic animate__text--3d" data-scroll />
                <PrismicRichText :field="slice.primary.titleC" class="title-text animate__text--3d" data-scroll />
            </article>
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
  name: "FullImageHero",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style >

.full__image {
  height: 100%;
}
.full__image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
/* .full__image::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000;
    opacity: 0.5;
} */
</style>
