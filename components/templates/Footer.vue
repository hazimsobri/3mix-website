<template>
  <footer class="bg-black overflow-hidden bg-black" id="colophon" data-scroll-section>
      <div class="lg:grid lg:grid-cols-12 lg:flex-none flex flex-col" data-scroll data-scroll-direction="vertical" data-scroll-speed="-8" data-scroll-target="#colophon" data-scroll-position="bottom">
          <div class="lg:col-span-3 footer__left">
                <div class="text-white h-full flex flex-col justify-between">
                    <div class="flex flex-col content h-full justify-center my-2">
                        <div class="text-4xl flex flex-col title-text --light">
                            <span>NEED PROJECTS</span> 
                            <span>TO BE DONE</span>
                        </div>
                        <div class="mt-6 footer__form">
                            <nuxt-link to="/contact">
                                <button class="relative button bg-blue px-7 py-3.5">
                                    <span class="relative">Contact Us</span>
                                </button>
                            </nuxt-link>
                        </div> 
                    </div>
                    <div class="py-10 footer__copyright">
                        <div class="content flex flex-col">
                             <span>Anhsin Technology Sdn Bhd. </span>
                             <span>20301008098 (1502019-X)</span>
                             <span class="text-sm">&copy; <span id="copyright-year">2023</span> Anhsin Technology. All Rights Reserved.</span> 
                        </div>
                    </div>
                </div>
          </div>
          <div class="lg:col-span-9 lg:py-32 py-20 footer__right relative overflow-hidden">
              <div class="content lg:flex z-10 relative">
                  <div>
                       <div class="footer__logo">
                           <SvgLogoWhite />
                       </div>
                  </div>
                  <div class="xl:ml-28 lg:ml-10">
                      <div class="md:mt-0 mt-10">
                        <span class="title-text --light text-white text-2xl">Details</span>
                        <ul class="text-grey mt-3 footer__items">
                            <li>
                                <nuxt-link to="/about" class="inline-flex link__anim relative">
                                    <span class="mr-5 link__anim-item --main">Company</span>
                                    <span class="mr-5 link__anim-item --hover">Company</span>
                                    <div class="relative">
                                        <span class="link__anim-arrow --main"><SvgArrow /></span>
                                        <span class="link__anim-arrow --hover"><SvgArrow /></span>
                                    </div>
                                </nuxt-link>
                            </li>                       
                            <li>
                                <nuxt-link to="/randd" class="inline-flex link__anim relative">
                                    <span class="mr-5 link__anim-item --main">R&amp;D</span>
                                    <span class="mr-5 link__anim-item --hover">R&amp;D</span>
                                    <div class="relative">
                                        <span class="link__anim-arrow --main"><SvgArrow /></span>
                                        <span class="link__anim-arrow --hover"><SvgArrow /></span>
                                    </div>
                                </nuxt-link>
                            </li> 
                            <li>
                                <nuxt-link to="/products" class="inline-flex link__anim relative">
                                    <span class="mr-5 link__anim-item --main">Products</span>
                                    <span class="mr-5 link__anim-item --hover">Products</span>
                                    <div class="relative">
                                        <span class="link__anim-arrow --main"><SvgArrow /></span>
                                        <span class="link__anim-arrow --hover"><SvgArrow /></span>
                                    </div>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/work-environment" class="inline-flex link__anim relative">
                                    <span class="mr-5 link__anim-item --main">Environment</span>
                                    <span class="mr-5 link__anim-item --hover">Environment</span>
                                    <div class="relative">
                                        <span class="link__anim-arrow --main"><SvgArrow /></span>
                                        <span class="link__anim-arrow --hover"><SvgArrow /></span>
                                    </div>
                                </nuxt-link>
                            </li> 
                        </ul>                          
                      </div>
                  </div>
              </div>
              <div class="absolute top-0 left-0 right-0 ">
                  <div class="footer__box ml-auto transform rotate-12 md:translate-y-72 translate-x-52"></div>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    mounted(){
            document.querySelector('#copyright-year').innerText = new Date().getFullYear();
    }
}
</script>

<style lang="scss" scoped>
 .footer__items{
     display: flex;
     flex-direction: column;
     grid-gap: 10px
 }
 .footer__right{
    @media (max-width:768px){
        order: 1;
    }
 }
 .footer__left{
     @media (max-width:768px){
         order: 2;
     }
     border-right: 1px solid #343434;
 }
 .footer__copyright{
    
     border-top: 1px solid #343434;
 }
 .footer__form{
     input{
         background: transparent;
         border-bottom: 1px solid #414141;
         &:focus{
             outline: transparent;
         }
     }
 }
 .footer__box{
    background-color: #1A1A1F;
    border-radius: 4rem;
    width: 600px;
    height: 600px;
 }
 .footer__logo{
         width: 6rem;
         fill: #fff;
 }
</style>