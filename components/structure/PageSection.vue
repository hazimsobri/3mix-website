<template>
    <component class="section" :is="el" :class="{ [`-${option}`]: option }" :id="id && id">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        props: {
            el: {
                type: String,
                default: 'section'
            },
            option: {
                type: String
            },
            id: {
                type: String
            }
        }
    }
</script>

<style>

</style>