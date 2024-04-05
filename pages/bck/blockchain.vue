<template>
    <LocomotiveScroll ref="scroller" :getted-options="{ smooth: true, getDirection: true,}">
      
        <div class="blockchain__page inner__page">      
            <page-section class="blockchain__hero" data-scroll-section >
                <PageBlockchainHero  />
            </page-section>
            <page-section class="blockchain__content"  data-scroll-section >
                <PageBlockchainContent  />
            </page-section>
            <page-section class="blockchain__slider"  data-scroll-section >
                <PageBlockchainSlider />
            </page-section>
            <page-section class="blockchain__resources"  data-scroll-section >
                <PageBlockchainResources />
            </page-section>
            <!-- <page-section class="blockchain__links"  data-scroll-section >
                <PageBlockchainLinks />
            </page-section> -->
            <page-section class="blockchain__career"  data-scroll-section >
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