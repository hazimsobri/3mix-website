import MyComponent from '../../../../slices/CustomGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CustomGrid'
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
      mock: {"variation":"default","name":"Default","slice_type":"custom_grid","items":[],"primary":{"title":[{"type":"heading1","text":"Morph interactive synergies","spans":[]}],"description":[{"type":"paragraph","text":"Exercitation exercitation ut labore veniam occaecat. Nulla fugiat velit ex sunt do nulla non laboris ex ut id.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
