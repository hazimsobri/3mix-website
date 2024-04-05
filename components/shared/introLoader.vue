<template>
    <div class="loader__page" ref="intro-loader">
      <div class="main__loader w-full h-full bg-black" >
          <div class="loader__tape">
            <app-marquee :groups="10" :speed="50" class=" text-white overflow-hidden w-48"> 
                <div class="marq__item overflow-hidden">Loading  </div>
            </app-marquee>             
          </div>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import imagesLoaded from "imagesloaded";
import AppMarquee from '~/components/elements/AppMarquee.vue'
export default {
    components:{ AppMarquee },
    name:"introLoader",

          data: function(){
            return {
                  tl: this.$gsap.timeline(),
            }
          },
          watch: {
              introLoader: function(el) {
                  el || this.animeOut()
              }
          },
          computed:{
            ...mapState('app', [
              'introLoader'
            ]),
           },
            created() {},
            mounted() {                    
              this.$nextTick(() => { 
                    this.animOut()
                });   
              }, 
            
            methods:{
              animOut(){
                  let body = document.querySelector('body')
                  let loader = document.querySelectorAll('.main__loader')
                  let marq = document.querySelectorAll('.loader__tape')
                        this.tl.set(loader,{yPercent:0})
                        this.tl.set(marq,{opacity:0})
                        this.tl.to(marq,{duration:.5,opacity:1,ease: 'expo.inOut'})
                        this.tl.to(loader, {
                            duration: 2,
                            delay:2,  
                            yPercent:100,
                            ease: 'expo.inOut', 
                              onComplete: () => {
                                setTimeout(() => {
                                  
                                }, 200); 
                                this.tl.kill()
                                this.$gsap.set(this.$refs['intro-loader'], {
                                    autoAlpha: 0
                                }) 
                                body.classList.add('page-Loaded')
                                // this.$nuxt.$emit()    
                                  // this.$nextTick(() => { 

                                  //  });
                              }  
                            });
                        
              },
            },
}
</script>

<style lang="scss" scoped>
  .loader__page {
    will-change: transform;
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1003
  }
  .main__loader {
    position: relative;
  }
.loader__logo{
  position: absolute;
    top: 50%;  
    left: 50%; 
  svg{
    width: 100%;
    height: 100%;
  }
}
.loader__text span{
    transform-origin: center top;
    transform-style: preserve-3d;
    opacity: 0;
}
.loader__tape{
    opacity: 0;
    margin: 2.75rem;
    position: absolute;
    bottom: 0;
    right: 0;
}
.loader__para{
  opacity: 0;
}
</style>
