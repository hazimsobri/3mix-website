<template>
    <button ref="toggleBtn" class="hamburger" type="button" aria-label="Hamburger"  :class='{"is-active" : menuOpen || closeButton}' >
        <span class="hamburger-wrapper">
            <span class="line line--1" :class="{ menuOpen}"> </span>
            <span class="line line--2 my-2" :class="{ menuOpen}"> </span>
            <span class="line line--3" :class="{ menuOpen}"> </span>
        </span>
    </button>
</template>

<script>
export default {
    name: "hamburger",
    data: () => ({}),
    props: ["closeButton"],
    merthods:{},
    computed:{
        menuOpen() {
            return this.$store.getters["app/getState"]("menuOpen");
        },
    }
}
</script>

<style lang="scss" scoped="">
$line-h: 2px;
$h-width: 1.5rem;
$h-height: .5rem;
.hamburger {
    display: inline-block;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    padding: 1rem;
    padding-right: 0;
    padding-left: 0;
    overflow: visible;
}
.hamburger:focus {
    outline: none;
}
.hamburger-wrapper{
    position: relative;
    width: $h-width;
    height: $h-height;
    display: block;
    cursor: pointer;
    transition: transform .3s;
    .line {
        position: absolute;
        left: 0;
        display: block;
        background-color: currentColor;
        width: 100%;
        height: 0.14rem;
        transition: .4s;
        transform-origin: center;
        &--1 {
            top: 0;
        }
        &--2 {
            top: 50%;
        }
        &--3 {
            bottom: 0;
        }
        &.black {
            background-color: #000;
        }
    }
}
.is-active {
    .hamburger-wrapper {
        transform: rotate(90deg);
    }
    .line--1 {
        width: 100%;
        transform: translate3d(0, -50%, 0) rotate(45deg);
        top: 50%;
    }
    .line--2 {
        transition: .2s;
        opacity: 0;
    }
    .line--3 {
        width: 100%;
        transform: translate3d(0, 50%, 0) rotate(-45deg);
        bottom: 50%;
    }
}
</style>