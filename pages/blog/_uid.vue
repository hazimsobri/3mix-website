<template>
      <LocomotiveScroll ref="scroller" :getted-options="{ smooth: true, getDirection: true,}">
        
        <page-section class="__hero bg-grey" data-scroll-section >
            <div class="grid grid-cols-12 py-20"> 
                <div class="md:col-span-6 md:col-start-4 col-span-10 col-start-2 pt-20 mx-auto">
                  <prismic-image :field="blog.image" /> 
                </div>
                <div class="md:col-span-4 md:col-start-5 col-span-10 col-start-2 py-20 mx-auto">
                    <div class=" title-text lg:text-5xl text-3xl mb-6">
                        {{ $prismic.asText(blog.title) }}
                    </div>
                    <div>
                        <prismic-rich-text :field="blog.desc" />
                    </div>
                </div>
            </div>
        </page-section>
        <TemplatesFooter data-scroll-section />
    </LocomotiveScroll>
</template>

<script>
import PageSection from '~/components/structure/PageSection.vue'
import AppButton from '~/components/elements/AppButton.vue';

export default {
    components: { PageSection, AppButton },
      mounted () {
        const locomotive = this.$refs.scroller.locomotive
        locomotive.on('scroll', (instance) => {
        document.documentElement.setAttribute('data-direction', instance.direction)
        })
    },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const blog = (await $prismic.api.getByUID('blog', params.uid)).data
      // Returns data to be used in template
      return {
       blog,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  methods:{}
}
</script>
<style lang="scss" scoped>
 
</style>