<template>
  <figure :class="classFigure" :style="aspectRatioStyle">
    <nuxt-img
      provider="prismic"
      :data-src=" url"
      :src="url"
      :class="classImg"
      :alt="alt"
      :loading="loading"
      :decoding="decoding"
      :draggable="draggable"
      format="webp"
    />
  </figure>
</template>

<script>
export default {
  props: {
   loading: {
      type: String,
      default: 'lazy'
    },
    decoding:{
      type: String,
      default: 'async'
    },
    aspectRatio: {
      type: String,
      required: true
    },
    classFigure: {
      type: String,
      default: 'relative block overflow-hidden'
    },
    classImg: {
      type: String,
      default: 'absolute top-0 left-0 w-full h-full object-cover'
    },
    alt: {
      type: String,
      default: 'AppImage'
    },
    draggable: {
      type: String,
      validator: val => ['true', 'false'].includes(val),
      default: 'false'
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      width: null,
      height: null
    }
  },
  computed: {
    aspectRatioStyle() {
      return {
        'padding-top': (this.height / this.width) * 100 + '%'
      }
    },
  },
  created() {
    const [width, height] = this.aspectRatio
      .split(':')
      .map(val => parseInt(val))
    this.width = width
    this.height = height
  },
  mounted() {
    const images = document.querySelectorAll('img')
    setTimeout(() => {
      images.forEach((image) => {
        image.onload = () => {
          this.$nuxt.$emit('update-locomotive')
        }
        image.src = image.dataset.src
      })
    },)
  },
}
</script>
