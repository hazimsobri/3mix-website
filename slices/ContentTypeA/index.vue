<template>
<page-section>
        <div class="relative w-full h-full" id="about">
            <div class="lg:grid lg:grid-cols-2 grid-cols-1">
                <article class="2xl:px-40 md:p-20 py-10 px-3 flex flex-col justify-between">
                    <div class="mb-20">
                        <p class="md:text-2xl text-lg text-black">
                            Our company is a dynamic and 
                            innovative technology company
                            that specialize in developing AI-powered 
                            product for businesses. Our mission is
                            to help companies improve their
                            customer experience by providing 
                            personalized and efficient support 
                            through our solutions.
                        </p>
                    </div>
                    <div class="md:w-1/2 w-9/12 ml-auto">
                        <p class="text-sm">
                            We are looking for highly skilled and 
                            motivated individuals to join our team 
                            of AI product developers. As part of our 
                            team, you will have the opportunity to 
                            work on cutting-edge technologies and 
                            develop solutions that make a real 
                            difference for our clients.
                        </p>
                    </div>
                </article>
                <article class="2xl:p-40 md:p-20 py-10 px-3 lg:h-full h-72 overflow-hidden bg-violet">
                    <div class="text-3xl text-6Axl md:text-4xl flex flex-col text-black" >
                        <span class="title-text animate__text-view--3d" data-scroll>About</span>
                        <span class="text-italic animate__text-view--3d" data-scroll>AI solutions</span>
                    </div>
                    <div class="h-80">
                        <div class="squares relative transform xl:translate-x-72 lg:translate-x-0 md:translate-x-96 lg:translate-y-60 md:translate-y-0 translate-y-12 translate-x-9">
                            <div class="box--a transform relative rotate-12 lg:translate-x-16"></div>
                            <div class="box--b transform absolute h-full w-full top-0 left-0 -rotate-12"></div>
                        </div>                 
                    </div>
                </article>

            </div>
        </div>  
        <!-- <div class="about-external ">
            <aside class="lg:grid grid-cols-2 md:mx-20 md:p-20 p-10">
                <div>
                    <img src="/img/image-1.jpg" />
                </div>
                <div class="bg-white p-10">
                    <p>
                        We offer a comprehensive suite of AI solutions
                        tailored to meet the unique needs of our clients. 
                        Whether you're looking to automate processes, 
                        enhance customer experiences, optimize 
                        operations, or unlock valuable insights from 
                        data, our AI solutions can help you achieve 
                        your goals. We leverage state-of-the-art 
                        technologies, including machine learning, 
                        natural language processing, computer vision, 
                        and deep learning, to develop robust and scalable 
                        solutions that drive tangible results.
                    </p>
                </div>
            </aside>
        </div>       -->
</page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import PageSection from '~/components/structure/PageSection.vue';

export default {
  components: { PageSection },
  name: "ContentTypeA",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>


<style lang="scss" scoped>
    .about-external{
        background-color: #E1E1E1;
        padding: 2rem;
    }
    .box--a{
        background-color: #A078A0;
        z-index: 1;
    }
    .box--b{
        background-color: #E2D9D6;
    }
    .box--a, .box--b{
        @media (min-width:1024px){
            width: 600px;
            height: 600px;
        }
            border-radius: 4rem;
             width: 400px;
            height: 400px;
    }
    .office__arrow{
            svg{
                width: 16px;
                height: 16px;
            }
    }
</style>