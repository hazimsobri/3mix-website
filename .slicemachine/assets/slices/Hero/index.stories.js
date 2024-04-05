import MyComponent from '../../../../slices/Hero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Hero'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"hero","items":[],"primary":{"title":[{"type":"paragraph","text":"Quis reprehenderit quis magna nostrud Lorem cillum sint proident ut proident aute consequat. Exercitation cupidatat nisi anim voluptate aliqua eu enim labore amet consectetur dolore excepteur dolor non id.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Ex nostrud dolor exercitation est commodo id excepteur irure magna est officia ex fugiat. Proident sunt quis dolor est.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
