<template>
  <LeniScroll>
    <LocomotiveScroll ref="scroller" :getted-options="{ smooth: false, getDirection: true,}"> 
      <TemplatesHeader class="header" ref="navhead"  />     
        <div class="product__page inner__page">
            <page-section >
                <PageProjectsHero />
            </page-section>
            <page-section >
                <PageProjectsProject :project="project" />
            </page-section>
            <TemplatesFooter  />
        </div>
    </LocomotiveScroll>
  </LeniScroll>
</template>

<script>
import {components} from "~/slices";
import PageSection from '~/components/structure/PageSection.vue';
import LeniScroll from '@/components/LeniScroll.vue'
export default {
    components: { PageSection, LeniScroll },
    
    data(){
        return {components, slices: null};  
    },
    methods: {},
    mounted () {}, 
  async asyncData({ $prismic, error }) {
    try{
      const work = await $prismic.api.query(
        $prismic.predicates.at("document.type", "projects"),
        { orderings : '[my.projects.date desc]' }
      )
      return {
        project: work.results,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

}
</script>
<style lang="scss" scoped>

</style>