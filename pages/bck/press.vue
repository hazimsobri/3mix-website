<template>
    <LocomotiveScroll ref="scroller" :getted-options="{ smooth: true, getDirection: true,}">
        
        <div class="career__page inner__page">
            <page-section data-scroll-section>
                <PagePressHero  />
            </page-section>
            <page-section data-scroll-section>
               <PagePressList :blogs="blogs"  />
            </page-section>
            <page-section data-scroll-section>

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
    computed:{},
    mounted () {
        const locomotive = this.$refs.scroller.locomotive
        locomotive.on('scroll', (instance) => {
        document.documentElement.setAttribute('data-direction', instance.direction)
        })
    },
    methods: {}, 
  async asyncData({ $prismic,  error }) {
    try{
      const press = await $prismic.api.query(
        $prismic.predicates.at("document.type", "blog"),
        { orderings : '[my.blog.date desc]' }
      )
      return {
        blogs: press.results,  
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
