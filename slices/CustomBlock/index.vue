<template>
<page-section>
  <div class="lg:grid lg:grid-cols-2 grid-cols-1 lg:flex-none flex flex-col block__content" v-for="(item, index) in slice.items" :key="index">
      <div class="lg:p-20 block__content--image">
        <elements-app-img 
            aspect-ratio="40:30"
            class="md:h-full h-40 overflow-hidden"
            :url="item.image.url"
        />
      </div>
      <div class="content mx-auto bg-grey flex items-center justify-center block__content--text">
          <div class="md:text-2xl text-lg 2xl:px-40 lg:px-16 md:py-40 px-3 py-10">
             <PrismicRichText :field="item.desc" />
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
  name: "CustomBlock",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" scoped>
.block__content{
  &--text{
    @media (min-width:768px){
        order: 1;
    }
  }
  &--image{
    @media (min-width:768px){
        order: 2;
    }
  }
}
</style>
