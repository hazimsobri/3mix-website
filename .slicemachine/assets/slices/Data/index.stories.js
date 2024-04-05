import MyComponent from '../../../../slices/Data';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Data'
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
      mock: {"variation":"default","name":"Default","slice_type":"data","items":[],"primary":{"title":[{"type":"heading1","text":"Matrix cross-media schemas","spans":[]}],"description":[{"type":"paragraph","text":"Lorem consequat labore ad nostrud.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
