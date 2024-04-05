<template>
  <main role="main">
    <SharedIntroLoader :key="introLoader" v-if="introLoader" />
    <!-- <TemplatesHeader  /> -->
    <TemplatesFullScreenMenu  v-if="menuOpen"/>
        <nuxt class="page" ref="page"   />
  </main>
</template>
<script>
import { mapState } from 'vuex'
export default {

  data: () => ({}),
  computed:{
      ...mapState('app', [
        'introLoader',
        'pageTransition',
        'menuOpen',
      ]),
  },
  created(){},
  mounted(){},
  methods:{},
}
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    z-index: 998;
    top: 0;
    left: 0;
}
</style>