<template>
    <header class="header" ref="navhead">
        <TemplatesNavigation  />
    </header>
</template>

<script>
export default {
    mounted(){
        const header = document.querySelector('.header')
        
        this.$ScrollTrigger.create({
            scroller: this.$refs.scroller,
            start: 'top -70',
            end: '99999',
            toggleClass: {className: 'header--scrolled', targets: '.header'}
        });      
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
    .header{
        background-color: transparent;
    }
    header{
        position: fixed;
        width: 100%;
        z-index: 998;
        height: 4.5rem;
        &::before{
            content: '';
            height: 100%;
            display: flex;
            align-items: center;
            background-color: #ffffff;
            height: 4.5rem;
        }
    }

</style>