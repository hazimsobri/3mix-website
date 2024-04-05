<template>
<page-section>
    <div class=" text-5xl flex flex-col pt-20 lg:pb-0 md:pb-32 pb-10 content" >
       <span class="title-text animate__text-view--3d" data-scroll><PrismicRichText class="nobottom_margin" :field="slice.primary.titleA" /></span>
       <span class="text-italic animate__text-view--3d" data-scroll><PrismicRichText class="nobottom_margin"  :field="slice.primary.titleB" /></span>
    </div>
  <div class="content md:py-20 py-10">
      <div class="md:grid md:grid-cols-12 gap-5 md:py-10 py-5 list__wrapper relative" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
          <div class="col-start-2 col-end-5">
             <div class="flex items-center mb-8">
                <span class="mr-5 "><SvgRoundedTick /></span> <span ><PrismicRichText class="lg:text-4xl text-2xl title-text"  :field="item.title" /></span>
              </div> 
          </div>
          <div class="col-start-8 col-end-11">
               <PrismicRichText class="list lg:text-2xl text-base" :field="item.description" />
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
  name: "ListContent",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style>
.list ul{
  list-style-type: circle;
}
.list ul li{
 margin-bottom: 1rem ;
}
.list__wrapper::before{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #0B0A10;
}
</style>
