<template>
<transition 
            v-on:enter="enter"
            v-on:before-enter="beforeEnter"
            v-on:after-enter="afterEnter"
            v-on:leave="leave"
            :mode='mode'
            v-bind:css="false">
   <slot></slot>
</transition>

</template>

<script>
export default {
    name: 'customTransition',
    data: () => ({
    }),

    computed: {
        delay() {
            return this.pageTransition ? this.dl : 0
        },
        dur(){
            return this.$store.getters['app/getState']("instantTransition") && this.pageTransition ? 0 : this.duration
        }
    },

    props: { 
      dl: {
        default:.2
      },
      noAdditionalClasses: !1,
      mode: !1,
      duration:{
        default:.6
      }

    },

    methods: {
        afterEnter: function(el, done)  {},
        beforeEnter(el, done)  {},

        enter(el, done)  {
            this.tl = this.$gsap.timeline({
                onComplete: function() {
                    this.pageTransition && setTimeout((function() {
                        this.$emit("update:loading", false)
                    }
                    ), 400),
                    done()
                }
            })

            this.tl.fromTo(el, {
                duration: this.dur,
                opacity: 0,
            }, {
                opacity: 1,
                delay: this.delay,
            })
        },

        leave(el, done)  {
            if(this.pageTransition, !this.noAdditionalClasses && this.mode != "out-in"){
                let cls = this.pageTransition ? ['transitioning-out'] : ['transitioning-out'] 
                el.classList.add(...cls);
            }

            let d = this.pageTransition ? this.dur / 2 : this.dur

            gsap.to(el, {
                duration: d,
                opacity: 0,
                delay: .05,
                onComplete: () => {

                    if(this.pageTransition){
                        window.scrollTo(0, 0)
                        this.$store.dispatch('app/SET_STATE', {
                            scrollTop: 0,
                            instantTransition: false,
                            menuOpen: false 
                        })
                    }

                    this.$nextTick(done)
                }
            })

        }
    }
}

</script>

<style scoped="">
</style>
