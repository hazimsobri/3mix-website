import MyComponent from '../../../../slices/FullImageHero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FullImageHero'
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
      mock: {"variation":"default","name":"Default","slice_type":"full_image_hero","items":[],"primary":{"titleA":[{"type":"heading1","text":"Transform killer functionalities","spans":[]}],"titleB":[{"type":"heading1","text":"Incubate revolutionary ROI","spans":[]}],"titleC":[{"type":"heading1","text":"Synergize vertical content","spans":[]}],"description":[{"type":"paragraph","text":"Laboris voluptate voluptate culpa do ea adipisicing enim veniam nulla cupidatat qui. Labore eu minim exercitation culpa deserunt anim officia. Nulla adipisicing magna sint culpa velit sit nisi dolore adipisicing ipsum proident aliquip sunt occaecat.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
