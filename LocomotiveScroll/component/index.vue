<template>
  <div v-locomotive="{ options }" class="main-scroll">
      <slot />
  </div>
</template>

<script>
export default {
  name: 'LocomotiveScroll',
  directives: {
    locomotive: {
      inserted(el, binding, vnode) {
        vnode.context.locomotive = new vnode.context.LocomotiveScroll({
          el,
          ...binding.value.options,
        })
        vnode.context.locomotive.on('scroll', (e) => {
          vnode.context.onScroll(e)
          vnode.context.$emit('scroll')
        })
        vnode.context.$emit('init')
      },
      unbind(el, binding, vnode) {
        vnode.context.locomotive.destroy()
        vnode.context.locomotive = undefined
      },
    },
  },
  props: {
    gettedOptions: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    locomotive: undefined,
    defaultOptions: {
      smooth: true,
      getDirection: true,
    },
  }),
  computed: {
    options() {
      return { ...this.defaultOptions, ...this.gettedOptions }
    },
  },
    watch: {
    locomotive: {
      handler() {
        this.locomotive.on('scroll', this.$ScrollTrigger.update)
        const locomotive = this.locomotive
        this.$ScrollTrigger.scrollerProxy(locomotive.el, {
          scrollTop(value) {
            return arguments.length
              ? locomotive.scrollTo(value, 0, 0)
              : locomotive.scroll.instance.scroll.y
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          },

        })
      },
    },
  },
  /**
   *  You can remove mounted hook if you don't needs custom updates
   *  Call this.$nuxt.$emit('update-locomotive') wherever you want
   */
  mounted() {
    this.$nuxt.$on('update-locomotive', () => {
      this?.locomotive?.update()
    })
    this.$nuxt.$on('stop-locomotive', () => {
      this?.locomotive?.stop()
    })
    this.$nuxt.$on('start-locomotive', () => {
      this?.locomotive?.start()
    })
  },

  methods: {
    onScroll(e) {
      if (typeof this.$store._mutations['scroll/setScroll'] !== 'undefined') {
        this.$store.commit('scroll/setScroll', {
          isScrolling: this.locomotive.scroll.isScrolling,
          limit: { ...e.limit },
          ...e.scroll, // x, y
        })
      }
    },
  },
}
</script>