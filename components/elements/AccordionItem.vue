<template>
      <div class='accordion__item py-10' @click='toggleActive(model)' :class='{"active" : isVisible}'>
        <div class='accordion__title flex justify-between items-center '>
            <div class="relative">
                    <div class="accordion__header">
                        <div class="text-2xl" >{{model.headTitle}}</div>
                    </div>
            </div>
            <div class="accordion__icon">
                <span ></span>
            </div>
        </div>
        <div ref='contentWrapper' v-show='expanded' class='content__wrapper'>
            <div class="pt-1 mx-3" ref='content'>
                <div class="accordion__content overflow-hidden" >
                    <p class="accordion__content--inner pt-4">{{model.message}} </p> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Collapse from '@/mixins/collapse' 
export default {
    name: 'accordion-item',
    mixins:[
        Collapse,
    ],
    props: [
        'model',
        'activeItem',
        'index'
    ],
}
</script>

<style lang="scss" scoped>
.accordion__item {
    cursor: pointer;
    transition: .4s;
    position: relative;
    margin-top: -1px;
    &::before{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #0B0A10;
    }
    &.active{
     .accordion__icon{
        span{
            &::before{
                transform: scaleY(0);
            }
        }

    }       
    }


    .accordion__icon{
        position: relative;
        width: 1.875rem;
        height: 1.875rem;
        span{
            &::before{
                content: "";
                top: 0;
                right: 0.9375rem;
                height: 100%;
                width: 2px;
                position: absolute;
                background-color: #0B0A10;
                transition: transform .3s cubic-bezier(.215,.61,.355,1);
                margin-right: -1px;
            }
            &::after{
                content: "";
                top: .9375rem;
                left: 0;
                width: 100%;
                height: 2px;
                margin-top: -1px;
                position: absolute;
                background-color: #0B0A10;
            }
        }

    }

    .small-margin {
        margin-top: .125rem;
    }
}
</style>