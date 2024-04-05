<template>
  <div :class="classVideoWrapper">
    <video
        ref="video"
        :autoplay="true"
        :loop="true"
        :muted="true"
        :playsinline="true"
         preload="none"
        :class="video"
    >
        <source   
            :src="src"
            :type="type"  
        >
    </video>
  </div>
</template>

<script>
export default {
    props:{
        lazy: {
            type: Boolean,
            default: true
        },
        classVideoWrapper: {
            type: String,
            default: 'relative block overflow-hidden'
        },
        classVideo:{
            type:String,
            default:'absolute top-0 left-0 h-full w-full object-cover '
        },
        src: {
            type: String,
            required: true
        },
        type:{
            type:String,
            default: "video/mp4"
        },
    },
  computed: {
    lazyClass() {
      return this.lazy ? ' lazyload' : ''
    }
  },
  mounted() {
    const videos = document.querySelectorAll('video')
    setTimeout(() => {
      videos.forEach((video) => {
        video.onload = () => {
          this.$nuxt.$emit('update-locomotive')
        }
        video.src = video.dataset.src
      })
    },)
  },
}
</script>

<style >

</style>