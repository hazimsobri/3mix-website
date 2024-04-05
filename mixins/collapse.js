var collapse = {
    data: () => ({
        expanded: false
    }),

    mixins: [],
    components: {},
    watch: {
        isVisible(visible) {
            let self = this

            if (visible) {
                this.expanded = true

                let bounds = this.$el.getBoundingClientRect()
                self.$emit('scrollTo', bounds.top, this.index)
                // self.$emit('setIndex')

                self.$nextTick(() => {
                    this.tl.timeScale(1)
                    this.tl.play()
                })
            } else {
                this.tl.timeScale(2)
                this.tl.reverse()
            }
        }
    },

    created(){},
    mounted() {
        this.initTimeline()
    },
    computed: {
        isVisible() {
            let isv =  this.open ? this.open 
                : this.active ? (this.active.id == this.item.id)
                : false
            return isv
        }
    },

    methods: {
        initTimeline(){
            let self = this
            this.tl = this.$gsap.timeline({
                onReverseComplete: () => {
                    self.expanded = false
                    self.$emit('setActiveHeight', 0)
                    this.$nuxt.$emit('update-locomotive')
                },
                onComplete: () => {
                    self.$emit('setActiveHeight', self.$refs.contentWrapper.getBoundingClientRect().height)
                    this.$nuxt.$emit('update-locomotive')
                },
                paused: true
            })

            this.tl.from(this.$refs.contentWrapper, {
                duration:.6,
                height: 0,
                clearProps: 'all',
                ease: 'Power4.inOut'
            })

            this.tl.from(this.$refs.content,{
                duration:.6,
                opacity: 0,
                delay: .5,
                clearProps: 'all'
            }, 0)
        },

        toggleActive(item) {
            let active = this.isVisible ? null : this.item
            this.$emit('update:active', active)
            this.$nuxt.$emit('update-locomotive')
        },

        openActive(item) {
            if (this.isVisible != item) {
                this.$emit('update:active', item)
                this.$nuxt.$emit('update-locomotive')
            }
        }
    },

}


export default collapse;