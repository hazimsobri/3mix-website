import MyComponent from '../../../../slices/CustomBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CustomBlock'
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
      mock: {"variation":"default","name":"Default","slice_type":"custom_block","items":[{"title":[{"type":"paragraph","text":"Velit proident ad do tempor non sunt sit non non. Lorem fugiat cupidatat laborum. Ea duis occaecat excepteur non exercitation.","spans":[]}],"desc":[{"type":"paragraph","text":"Est consequat enim duis deserunt ex commodo non ullamco sunt consequat tempor. Excepteur do mollit adipisicing mollit laborum ex cillum magna laborum do. Exercitation voluptate do incididunt do in Lorem nisi sit cillum veniam ut velit Lorem adipisicing velit.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"}},{"title":[{"type":"paragraph","text":"Minim non consectetur consequat laboris.","spans":[]}],"desc":[{"type":"paragraph","text":"Laborum Lorem Lorem sunt voluptate proident in est ut sunt est officia occaecat officia aliquip. Incididunt non reprehenderit proident nostrud eiusmod adipisicing exercitation.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"}},{"title":[{"type":"paragraph","text":"Sint do anim occaecat labore.","spans":[]}],"desc":[{"type":"paragraph","text":"Velit sit ut reprehenderit tempor fugiat. Officia ad proident eiusmod velit aliquip ea consequat consectetur incididunt non.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"}}],"primary":{},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
