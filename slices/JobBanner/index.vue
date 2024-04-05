<template>
<page-section id="career">
         <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full career__image--bg">
            <elements-app-img 
                aspect-ratio="40:21"
                :url="slice.primary.background.url"
            />
         </div>
         <div class="lg:mx-20 px-4 z-10 py-24 relative xl:grid xl:grid-cols-12">
             <div class="bg-white lg:p-24 p-4 lg:col-start-3 lg:col-end-11">
                 <div class="career__image--inner">
                    <elements-app-img 
                        aspect-ratio="40:21"
                        :url="slice.primary.image.url"
                    />  
                 </div>
                 <div class="flex flex-col justify-between mt-5">
                     <div class=" xl:text-7xl md:text-4xl text-2xl flex flex-col">
                        <span class="title-text" >Unlock full potential and do extraordinary things</span>
                     </div>
                     <nuxt-link to="/work-environment" class="items-end flex pt-5 ml-auto text-link">
                        <div class="link__button link__anim">
                            <span class="mr-1 lg:text-2xl md:text-lg text-xs link__anim-item --main">Enviroment</span>
                            <span class="mr-1 lg:text-2xl md:text-lg text-xs link__anim-item --hover">Enviroment</span>  
                            <div class="relative">
                                <span class="career__arrow link__anim-arrow --main"><SvgArrow /></span>
                                <span class="career__arrow link__anim-arrow --hover"><SvgArrow /></span>
                            </div>
                        </div>
                     </nuxt-link>
                 </div>
             </div>
         </div>
</page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import PageSection from '~/components/structure/PageSection.vue';

export default {
  components: { PageSection },
  name: "JobBanner",
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
    // &::before{
    //     content: "";
    //     background-color: rgb(0, 0, 0, 0.4);
    //     position: absolute;
    //     height: 100%;
    //     width: 100%;
    //     top: 0;
    //     left: 0;
    //     z-index: 1;

    // }
}
  .link__button{
    display: inline-flex !important;
  }
  .career__arrow{
        svg{
            stroke: #8a5b89;
        }
  }
</style>

