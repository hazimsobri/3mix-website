<template>
<page-section>
 <div class="lg:grid lg:grid-cols-2">
      <div class="content mx-auto bg-black text-white flex items-center justify-center grid__content--text">
          <div class="2xl:px-40 lg:px-16 md:py-10 px-3 py-20">
            <!-- <PrismicRichText class="text-2xl" :field="slice.primary.contentA" /> -->
              <div class="md:text-5xl text-4xl flex flex-col ">
                  Why choose Hash Code Book as your DevOps service provider?
              </div>
          </div>
      </div>
      <div class="py-10 flex flex-col">
        <div class="content py-10">
            <h4 class="text-3xl title-text mb-5">Extensive Knowledge of DevOps</h4>
            <p>
              Over the years, our DevOps team has accumulated a vast amount of knowledge and 
              experience in uniting development and operations using DevOps technologies as all 
              our projects adopt DevOps practices. Our DevOps team combines practical experience 
              with constant learning and persistence in getting the new tools and technology 
              available.
            </p>
        </div>
        <div class="content py-10">
            <h4 class="text-3xl title-text mb-5">Flexible Engagement Model</h4>
            <p>
              Our engagement model is not cast in stone but is adaptive to your business requirements.
            </p>
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
  name: "CustomGrid",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>

</style>
