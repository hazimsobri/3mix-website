<template>
  <div v-if="loading" class="page__loader">
      <div class="" :class="['page__loader--bg', {'anim-in': animIn}, {'anim-out': animOut}]" ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    loading: false,
    animIn: false,
    animOut: false
    };
  },
  mounted(){},
methods:{
    start () {
      let mainBody = document.querySelector('body')
      mainBody.classList.remove('page-Loaded')
      this.loading = true
      this.animIn = true
      
    },
    finish () {
      setTimeout(() => {
        this.animIn = false
        this.animOut = true
      }, 1200)
      setTimeout(() => {
        this.loading = false
        this.animOut = false
        let mainBody = document.querySelector('body')
        mainBody.classList.add('page-Loaded')
        this.$nuxt.$emit('update-locomotive')
      }, 2000)

    }
}
}
</script>

<style lang="scss" scoped>
.page__loader{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99999;
}
.page__loader--bg.anim-in {
  animation: 800ms cubic-bezier(0.535, 0, 0, 1) heightUp;
  animation-fill-mode: forwards;
}

.page__loader--bg.anim-out {
  bottom: auto;
    top: 0;
    animation: 800ms cubic-bezier(0.535, 0, 0, 1) heightDown;
}

.page__loader--bg {
  position: absolute;
  bottom: 0;
  top: auto;
  left: 0;
  width: 100%;
  height: 0;
  background: #0B0A10;
}


@keyframes heightUp {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}

@keyframes heightDown {
  from {
    height: 100%;
  }
  to {
    height: 0;
  }
}

</style>