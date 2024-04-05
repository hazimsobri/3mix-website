<template>
  <div class="accordion">
      <ElementsAccordionItem 
          :activeItem.sync="activeItem"
          v-for="(item, index) in items" 
          :key="index" 
          :model="item"
          :item="item"
          :index="index"    
      />
  </div>
</template>

<script>
import AccordionItem from '~/components/elements/AccordionItem.vue'
export default {
  name: 'accordion',
  components: { AccordionItem },
    data()  {
       return {
          activeItem:null,
          items:[
            {   
              id:1,
              headTitle: 'Blockchain solutions' ,
              message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              
            },
            {   
              id:2,
              headTitle: 'Blockchain Platform',
              message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
            {   
              id:3,
              headTitle: 'Blockchain resources',
              message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
          ],
        }   
    },

    mixins: [],
    components: {},
    props: [ 
      'model',
    ],
    created(){},
    mounted(){},
    computed: {
    },
    methods: {},
}
</script>

<style lang="scss" scoped>

</style>