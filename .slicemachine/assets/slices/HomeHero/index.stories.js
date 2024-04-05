import MyComponent from '../../../../slices/HomeHero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeHero'
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
      mock: {"variation":"default","name":"Default","slice_type":"home_hero","items":[],"primary":{"description":[{"type":"paragraph","text":"Voluptate enim adipisicing labore reprehenderit culpa aliquip culpa nostrud non culpa officia. Minim non occaecat ipsum et consequat aliqua qui occaecat culpa non cupidatat aliqua.","spans":[]}],"title-b":[{"type":"paragraph","text":"Ipsum amet aliqua officia consectetur voluptate. Commodo consequat mollit sit laboris ea duis dolore velit irure.","spans":[]}],"title-a":[{"type":"paragraph","text":"Pariatur aute ex nisi. Culpa enim esse est occaecat amet id exercitation ea ea id sunt esse id. Enim aliquip culpa dolor incididunt.","spans":[]}],"title-c":[{"type":"paragraph","text":"Sint nostrud qui in proident tempor laboris laboris ea adipisicing. Pariatur proident nulla sint reprehenderit fugiat sunt dolor duis exercitation elit.","spans":[]}],"hero-image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
