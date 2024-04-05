<template>
<page-section>
    <div class="relative">
        <div class="relative">
            <div class="relative w-full h-full ">
                <elements-app-img 
                    aspect-ratio="40:15"
                    class="md:h-full h-40"
                    :url="slice.primary.contactImage.url"
                />
            </div> 
            <aside class="absolute w-full h-full top-0 left-0">
                <div class="content flex flex-col w-full h-full">
                     <div class=" xl:text-5xl md:text-4xl text-2xl flex flex-col md:mt-16 mt-4 z-10 text-white">
                        <span class="animate__text-view--3d" data-scroll><span class="text-italic">Ideas</span><span class="title-text"> are meant</span></span> 
                        <span class="title-text animate__text-view--3d" data-scroll>to be turned</span>
                        <span class="title-text animate__text-view--3d" data-scroll>into reality</span> 
                     </div>
                    <nuxt-link to="/contact" class="z-10 md:mb-16 mb-4 xl:w-80 link__anim mt-20">
                        <div class="bg-white p-5 lg:block flex">                       
                            <div class="xl:text-3xl lg:text-2xl flex flex-col title-text">
                                <span>Let's get your </span>
                                <span>project done</span>
                            </div>
                            <div class="">
                                <div class="project__arrow --2 mt-10  relative inline-block">
                                    <div class="relative inline-block">
                                    <span class="link__anim-arrow --main"><SvgArrow /></span>
                                    <span class="link__anim-arrow --hover"><SvgArrow /></span>
                                    </div>
                                </div>
                            </div> 
                        </div>  
                    </nuxt-link>
                </div> 
            </aside>
        </div>

    </div>
</page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import PageSection from '~/components/structure/PageSection.vue';

export default {
  components: { PageSection },
  name: "CombinedBanner",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" scoped>
.career__image--bg{
    figure{
        padding-top: 0;
        height: 100%;
        width: 100%;
    }
    &::before{
        content: "";
        background-color: rgb(0, 0, 0, 0.4);
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1;

    }
}
    .project__arrow{
        svg{
            @media (min-width:1024px){
            width: 16px;
            height: 16px;
            }
        }
    }

    
    .project__arrow.--2{
        svg{
            stroke: #214EFF;
        }
    }

</style>