<template>
    <LocomotiveScroll ref="scroller" :getted-options="{ smooth: true, getDirection: true,}">
      
        <div class="bnd__page inner__page">      
            <page-section class="bnd__hero" data-scroll-section >
                <PageServicesBndHero  />
            </page-section>
            <page-section class="bnd__content"  data-scroll-section >
                <PageServicesBndContent  />
            </page-section>
            <page-section class="pwa__accordion"  data-scroll-section >
                <PageServicesBndAccordion />
            </page-section>
            <page-section class="pwa__slider"  data-scroll-section >
                <PageServicesBndSlider />
            </page-section>
            <page-section class="bnd__career"  data-scroll-section >
                <SharedContactCareer/>
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
    methods: {
        
    },

}
</script>

<style>

</style>