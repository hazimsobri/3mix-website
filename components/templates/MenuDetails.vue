<template>
        <div class="py-1 mobile__menu--item relative" @click="toggle()" >
            <div class="flex items-center" >
                <span @click.native='closeMenu()'>{{model.menu}}</span>
            </div> 
        </div>
</template>

<script>
export default {
    data()  {
        return{
            open: false,
        }
    },

    props: [
        'model',
        'activeItem',
        'index'
    ],
    methods:{
      closeMenu() {
          this.$store.dispatch("app/SET_STATE", {
              menuOpen: false,
          });
      },
        toggle () {
        this.open = !this.open
        }
    }
}
</script>

<style lang="scss" scoped>
.mobile__menu--icon{
    transform: rotate(90deg);
}
.mobile__menu--item{
    padding: 0.8rem 0.7rem;
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #000;
        opacity: .2;
        z-index: 1;
        pointer-events: none;
    }
}
</style>