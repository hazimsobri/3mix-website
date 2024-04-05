<template>
<page-section>
    <div class="lg:grid lg:grid-cols-2 grid-cols-1 w-full h-full overflow-hidden">
        <div class="overflow-hidden lg:h-full h-72">
            <div class="content md:text-5xl text-4xl lg:pt-40 pt-10 mb-10 text-black"  >
                <div class="title-text animate__text-view--3d" data-scroll><PrismicRichText class="nobottom_margin" :field="slice.primary.titleA" /></div>
                <div class="title-text animate__text-view--3d" data-scroll><PrismicRichText class="text-italic nobottom-margin" :field="slice.primary.titleB" /></div>
            </div>
            <div class="squares relative transform lg:-translate-x-56 lg:translate-y-60 translate-y-12 -translate-x-24">
                <div class="box--a transform relative  rotate-12"></div>
                <div class="box--b transform absolute h-full w-full top-0 left-0 -rotate-12"></div>
            </div>
        </div>
        <div>
              <div class="bg-black 2xl:p-40 md:p-20 py-10 px-3 flex items-center h-full">
                <PrismicRichText class="md:text-2xl text-lg text-white" :field="slice.primary.description"  />
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
  name: "ServiceIntro",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
<style>
  .nobottom_margin p{
    margin-bottom: 0;
  }
</style>
<style lang="scss" scoped>
    .box--a{
        background-color: #00FFEC;
        z-index: 1;
    }
    .box--b{
        background-color: #214EFF;
    }
    .box--a, .box--b{
        @media (min-width:1024px){
            width: 600px;
            height: 600px;
        }
            border-radius: 4rem;
             width: 400px;
            height: 400px;
    }

</style>
