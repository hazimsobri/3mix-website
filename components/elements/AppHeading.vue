<template>
    <component class="heading" :is="el" :class="{[`-${size}`]: size, [`-${option}`]: option }">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        props: {
            el: {
                type: String,
                default: 'p'
            },
            size: {
                type: String
            },
            option: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
.heading {
  &.-h1 {
      font-size: 4rem;

      @media (max-width: 999px) {

      } 

      @media (min-width: 1000px) and (max-width: 1199px) {

      }

      @media (min-width: 1200px) {

      }
  }

  &.-h2 {
      font-size: 2.25rem;
  }

  &.-h3 {
      font-size: 24px;
  }

  &.-h5,
  &.-h6 {
      font-size: 1rem;
  }

  &:is(p) {
      font-weight: var(--regular);
  }

  &.-nomargin {
      margin-bottom: 0;
  }
}
</style>