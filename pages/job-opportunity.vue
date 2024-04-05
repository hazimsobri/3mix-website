<template>
    <LocomotiveScroll ref="scroller" :getted-options="{ smooth: true, getDirection: true,}">     
        <div class="career__page inner__page">
            <page-section data-scroll-section>
                <PageJoblistingHero />
            </page-section>
            <page-section data-scroll-section>
                <PageJoblistingJobs :jobs="jobs" />
            </page-section>
            <TemplatesFooter data-scroll-section />
        </div>
    </LocomotiveScroll>
</template>

<script>
import PageSection from '~/components/structure/PageSection.vue'
export default {
    components: { PageSection },
    props:[],
    data: () => ({}),
    computed:{
 
    },

    mounted () {
        const locomotive = this.$refs.scroller.locomotive
        locomotive.on('scroll', (instance) => {
        document.documentElement.setAttribute('data-direction', instance.direction)
        })
    },
    methods: {

    }, 
  async asyncData({ $prismic, error }) {
    try{
      const jobPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post"),
        { orderings : '[my.post.date desc]' }
      )
      return {
        jobs: jobPosts.results,
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
