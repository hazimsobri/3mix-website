<template>
    <div class="lg:grid lg:grid-cols-2 grid-cols-1 grid-flow-row w-full h-full overflow-hidden">
        <div class="overflow-hidden lg:h-full h-72">
            <div class="content text-3xl text-6Axl lg:pt-40 md:text-4xl pt-10 mb-10"  >
                <div class="title-text animate__text-view--3d" data-scroll>We make <span class="text-italic">progress</span></div>
                <div class="title-text animate__text-view--3d" data-scroll>Through <span class="text-italic">innovations</span></div>
            </div>
            <div class="squares relative transform lg:-translate-x-56 lg:translate-y-60 translate-y-12 -translate-x-24">
                <div class="box--a transform relative  rotate-12"></div>
                <div class="box--b transform absolute h-full w-full top-0 left-0 -rotate-12"></div>
            </div>
        </div>

        <div class="grid grid-rows-3">
            <nuxt-link to='/' class="project__item bg-grey link__anim border-b border-gray-300">
                <div class="project__content py-14 flex flex-col justify-between h-full">
                        <div class="md:text-5xl text-3xl title-text mb-4 relative overflow-hidden">
                            <div class="overflow-hidden md:px-24 px-4"> 
                                <div class=" overflow-hidden project__item--title">
                                    Coffee Wallet
                                </div>
                            </div>
                            <app-marquee :groups="10" class="marq__main"> 
                                <div class="marq__item">Coffee Wallet</div>
                            </app-marquee>
                        </div>
                    <aside>
                        <div class="md:px-24 px-4">
                            <p class="project__item--detail ">
                                Looking for a one-stop solution for your business needs? 
                                Explore Coffee Wallet now, a hybrid wallet management suite.
                            </p>
                        </div>
                        <div class="project__arrow mt-10 md:px-16 px-4 relative inline-block">
                            <div class="relative inline-block">
                            <span class="link__anim-arrow --main"><SvgArrow /></span>
                            <span class="link__anim-arrow --hover"><SvgArrow /></span>
                            </div>
                        </div>
                    </aside>
                </div>
            </nuxt-link>

            <nuxt-link to='/' class="project__item bg-grey link__anim">
                <div class="project__content py-14 flex flex-col justify-between h-full">

                    <div class="md:text-5xl text-3xl title-text mb-4 relative overflow-hidden">
                        <div class="overflow-hidden md:px-24 px-4"> 
                            <div class=" overflow-hidden project__item--title">
                                Blockchain Node Rental 
                            </div>
                        </div>
                        <app-marquee :groups="10" class="marq__main"> 
                            <div class="marq__item">Blockchain Node Rental</div>
                        </app-marquee>
                    </div>

                    <aside>
                        <div class="md:px-24 px-4">
                            <p class="project__item--detail ">
                                Power your apps efficiently and affordably 
                                with our Blockchain Node Rental.
                            </p>
                        </div>
                        <div class="project__arrow mt-10 md:px-16 px-4 relative inline-block">
                            <div class="relative inline-block">
                            <span class="link__anim-arrow --main"><SvgArrow /></span>
                            <span class="link__anim-arrow --hover"><SvgArrow /></span>
                            </div>
                        </div>
                    </aside>
                </div>
            </nuxt-link>

            <nuxt-link to='/' class="button relative bg-blue link__anim">
                <div class="relative lg:py-24 py-14 h-full">
                    <div class="md:px-24 px-4">
                        <div class="md:text-4xl text-2xl title-text  flex flex-col mb-2">
                            <span class=""><span class="text-italic">Explore</span> Our</span>
                            <span>Products</span>
                        </div>
                    </div>

                    <div class="project__arrow mt-10 md:px-16 px-4 relative inline-block">
                        <div class="relative">
                          <span class="link__anim-arrow --main"><SvgArrow /></span>
                          <span class="link__anim-arrow --hover"><SvgArrow /></span>
                        </div>
                    </div>
                </div>
            </nuxt-link>   
        </div>
    </div> 
</template>

<script>

import AppMarquee from '~/components/elements/AppMarquee.vue'
export default {
    components:{ AppMarquee },
    mounted(){

    },
    methods:{


    }
}
</script>

<style lang="scss" scoped>
    .box--a{
        background-color: #00FFEC;
        z-index: 1;
    }
    .box--b{
        background-color: #214EFF;
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

    .project__arrow{
        svg{
            width: 16px;
            height: 16px;
        }
    }

    .project__item{
        position: relative;    
        .project__arrow{
            svg{
                stroke: #214EFF;
            }
    }
}

.project__content{
    position: relative;
}
.project__item{
    &--detail{
        width: 20rem;
    }
    .marq__main, .project__item--title{
        transition: transform 400ms cubic-bezier(0.2, 0.2, 0, 1);
    }
    .marq__main{
        transform: translateY(100%);
    }
    &:hover{
        .project__item--title{
            transform: translateY(-100%);
        }
       .marq__main{
            transform: translateY(0);
       } 
    }
}
.marq__main{
    position: absolute;
    top: 0;
    left: 0;
    inset: 0;
    overflow: hidden;
}

</style>