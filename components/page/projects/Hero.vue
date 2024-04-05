<template>
<page-section>
   <div class="relative product-hero h-screen overflow-hidden bg-violet">
       <div class="md:grid md:grid-cols-2 relative h-full flex flex-col justify-center items-center">
            <div class="relative flex flex-col md:pl-20 z-10">
                    <div class=" h-full relative md:mr-20 mb-5" >
                        <div class="md:text-7xl text-4xl flex flex-col md:text-black text-white mt-10 product-text">
                            <span class="title-text " >Anhsin</span>
                            <span class="text-italic" >Products</span>
                        </div>
                    </div>
            </div>
            <div class="md:relative h-full w-full absolute top-0 left-0 " >
                    <elements-app-img 
                        aspect-ratio="1:1"
                        class="full__image "
                        url="https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    />
            </div>
       </div>
   </div>
</page-section>
</template>

<script>
import PageSection from '~/components/structure/PageSection.vue';
export default {
  components: { PageSection },
}
</script>

<style lang="scss" scoped>
.project__video{
    &::before{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        padding-bottom: 14rem;
    }
}
.product-text{
    background-color: f8f3f8;
    .title-text{
        @media (max-width:768px){
            color:#fff !important;
        }
    }
}
</style>