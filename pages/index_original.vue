<template>
    <LeniScroll>
         <LocomotiveScroll ref="scroller" :getted-options="{ smooth: false, getDirection: true,}"> 
        <TemplatesHeader class="header" ref="navhead"  />       
        <div class="home__page inner__page">
            <SliceZone :slices="slices" :components="components" />
        </div>
        <TemplatesFooter  />
         </LocomotiveScroll>
    </LeniScroll>
   
</template>

<script>
import {components} from "~/slices";
import PageSection from '~/components/structure/PageSection.vue';
import LeniScroll from '@/components/LeniScroll.vue'
export default {
    components: { PageSection, LeniScroll },
    props:[],
        data(){
        return {components, slices: null};  
        },
        async asyncData({ $prismic}){
            const homePage = await $prismic.api.getSingle("home-page");
            return{
                slices: homePage.data.slices,
                homePage,
            }
        },
        computed:{},
        mounted () {
        },
        methods: {},
        head() {
            return {
            title: this.$prismic.asText(this.homePage.data.metaTitle),
            meta: [
                {
                hid: "description",
                name: "description",
                content: this.$prismic.asText(this.homePage.data.metaDescription),
                }
            ]
            }
        }
}
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    z-index: 998;
    top: 0;
    left: 0;
}
</style>
