<template>
  <div ref="container">
    <div ref="content">
      <slot />
    </div>
  </div>
</template>

<script>
import Lenis from '@studio-freight/lenis'
export default {
 
mounted() {
    const lenis = new Lenis()
    lenis.on('scroll', this.$ScrollTrigger.update)

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)  
  }
}
</script>
