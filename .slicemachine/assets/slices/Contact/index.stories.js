import MyComponent from '../../../../slices/Contact';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Contact'
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
      mock: {"variation":"default","name":"Default","slice_type":"contact","items":[],"primary":{"title":[{"type":"heading1","text":"Engineer interactive solutions","spans":[]}],"description":[{"type":"paragraph","text":"Est irure incididunt enim consectetur tempor qui ullamco exercitation exercitation proident adipisicing magna.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
