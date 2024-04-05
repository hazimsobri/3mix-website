<template>
    <page-section>
       <div class="content">
        <div class="md:text-5xl text-4xl pt-20 mb-10"  >
            <div class="title-text">
              {{ $prismic.asText(slice.primary.title) }}
            </div>
        </div>
        <article class="flex w-100 flex-wrap" >
           <aside class="flex flex-col columns-3" v-for="(item, index) in slice.items" :key="index">
              <div class="title-text mb-2">{{ $prismic.asText(item.subtitle) }}</div>
              <div class="m-2 md:w-3/4"><p>{{ $prismic.asText(item.subdesc) }}</p></div>
           </aside>
        </article>
       </div>
    </page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TextCard",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
.columns-3 {
    @media (min-width: 992px) {
      width:calc(100% / 3);
    }
}
</style>
