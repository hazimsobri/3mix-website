<template>
<page-section>
  <div class="content lg:py-20 py-5 bg-grey">
        <div class="text-left md:text-5xl text-4xl flex flex-col pb-20" >
          <span class="title-text animate__text-view--3d" data-scroll><PrismicRichText :field="slice.primary['title-A']" /></span>
          <span class="text-italic animate__text-view--3d" data-scroll><PrismicRichText :field="slice.primary['title-B']" /></span>
        </div>
      <div class="lg:grid lg:grid-cols-3 grid-cols-1 gap-4 lg:flex-none flex flex-col block__content md:w-3/4 lg:p-20 p-5 bg-white mx-auto" >
        <div class="flex flex-col gap-3 p-4 mx-auto" v-for="(item, index) in slice.items" :key="index">
          <div class="text-left ">
            <PrismicRichText :field="item.tag" class="logo__tag" />
          </div>
          <div class=" md:w-44">
            <elements-app-img 
                aspect-ratio="40:30"
                class="md:h-full h-40 overflow-hidden"
                :url="item.image.url"
            />
          </div>
          <div class="text-left text-2xl">
                <PrismicRichText :field="item.caption" class="title-text" />
          </div>
        </div>
      </div>
   </div>
</page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import PageSection from '~/components/structure/PageSection.vue';
export default {
  components:{
      PageSection,
  },
  name: "GridLogos",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style>
.logo__tag p{
  margin-bottom: 0px;
}
.logo__tag{
  display: inline-block;
  border: 1px solid rgb(172, 172, 172);
  padding: 0.3rem 2.5rem;
  border-radius: 35px;
  color:rgb(172, 172, 172);
  font-size: 14px;
}
</style>
