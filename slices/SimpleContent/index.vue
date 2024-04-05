<template>
  <section class="mb-10">
      <div class="md:grid md:grid-cols-12">
        <div class="lg:col-span-6 col-span-8">
          <div class="pt-20">
             <div class="lg:p-5 ">
                <p class="content md:text-2xl">
                At our core, we are driven by a passion for 
                innovation and a relentless pursuit of 
                advancing the frontiers of 
                artificial intelligence.
              </p>
             </div>
          </div>
        </div>
      </div>
      <div class="md:grid md:grid-cols-12">
        <div class="md:col-span-8">
          <div class="lg:p-5 ">
              <div class="lg:flex content gap-4">
                <span class="w-full h-full md:mb-0 mb-10 block">
                <elements-app-img class="md:h-full w-full image-content"
                      data-scroll
                      aspect-ratio="40:21"
                      :url="slice.primary.image.url"
                  /> 
              </span>
              <span >
                  <p > 
                    Our R&D team plays a pivotal role in shaping 
                    the future of AI by pushing the boundaries of 
                    what is possible and exploring new horizons.
                  </p>
              </span>
              </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SimpleContent",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
.image-content{
  padding-top: 110% !important ;
}
</style>
