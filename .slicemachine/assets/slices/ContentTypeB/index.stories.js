import MyComponent from '../../../../slices/ContentTypeB';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContentTypeB'
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
      mock: {"variation":"default","name":"Default","slice_type":"content_type_b","items":[],"primary":{"contentA":[{"type":"paragraph","text":"Cillum sunt irure proident. Adipisicing veniam aliqua consequat velit ex esse proident.","spans":[]}],"contentB":[{"type":"paragraph","text":"Non nisi aliqua irure qui consequat amet deserunt non dolore magna aliquip. Cillum duis non non mollit anim consequat elit ut qui ex Lorem velit officia cupidatat.","spans":[]}],"imageA":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"imageB":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
