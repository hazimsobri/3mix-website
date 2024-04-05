<template>
    <LocomotiveScroll ref="scroller" :getted-options="{ smooth: false, getDirection: true,}">
      <TemplatesHeader class="header" ref="navhead"  />
        <div class="content__page inner__page">
            <SliceZone :slices="slices" :components="components" data-scroll-section />
        </div>
        <TemplatesFooter data-scroll-section />
    </LocomotiveScroll>
</template>
<script>
import { components } from "~/slices";

export default {
  data() {
    return { components };
  },
  async asyncData({ $prismic, params }) {
    const page = await $prismic.api.getByUID("page", params.uid); 
      return {
        slices: page.data.slices,
        page,
      }
  },
  mounted () {
      let locomotive = this.$refs.scroller.locomotive
      locomotive.on('scroll', (instance) => {
      document.documentElement.setAttribute('data-direction', instance.direction)
      })
  },
        head() {
            return {
            title: this.$prismic.asText(this.page.data.metaTitle),
            meta: [
                {
                hid: "description",
                name: "description",
                content: this.$prismic.asText(this.page.data.metaDescription),
                }
            ]
            }
        }
};
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    z-index: 998;
    top: 0;
    left: 0;
}
</style>