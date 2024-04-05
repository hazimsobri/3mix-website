import MyComponent from '../../../../slices/GridLogos';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/GridLogos'
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
      mock: {"variation":"default","name":"Default","slice_type":"grid_logos","items":[{"caption":[{"type":"paragraph","text":"Voluptate cupidatat laborum consequat enim irure irure dolor et do ut ea excepteur tempor ullamco excepteur.","spans":[]}],"tag":[{"type":"paragraph","text":"Cillum sint eu Lorem excepteur qui eiusmod nostrud Lorem ullamco.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"}},{"caption":[{"type":"paragraph","text":"Ad est consectetur magna ex in cillum ullamco adipisicing occaecat eiusmod. Ut nulla et ex labore veniam voluptate dolor aute excepteur consequat. Occaecat id dolor cillum.","spans":[]}],"tag":[{"type":"paragraph","text":"Quis culpa quis deserunt quis anim irure exercitation quis ipsum in occaecat consequat commodo id cupidatat.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"}},{"caption":[{"type":"paragraph","text":"Dolore in magna pariatur ad Lorem nisi ex sunt fugiat et Lorem minim ea laboris. Enim do sint et aliquip ullamco minim ea ullamco.","spans":[]}],"tag":[{"type":"paragraph","text":"Officia cupidatat culpa enim culpa. Sit ad cupidatat fugiat veniam Lorem laboris consequat id magna velit est do adipisicing et magna. Pariatur sunt ad in ut consequat Lorem.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"}},{"caption":[{"type":"paragraph","text":"Laboris eiusmod eu non aliqua amet est qui non deserunt laborum nisi sunt incididunt. Laboris officia est deserunt tempor ipsum id enim sit magna proident laborum velit cillum in. Est ex veniam tempor in cillum elit commodo nulla magna adipisicing reprehenderit ex.","spans":[]}],"tag":[{"type":"paragraph","text":"Pariatur commodo laboris adipisicing eu esse ex reprehenderit enim laborum occaecat qui aliquip. Veniam tempor duis ullamco veniam et. Ut eiusmod anim anim officia magna exercitation cupidatat adipisicing adipisicing minim magna.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"}},{"caption":[{"type":"paragraph","text":"Ex qui esse proident ex Lorem nostrud quis cillum occaecat labore nostrud. Excepteur laborum do deserunt ullamco. Officia aliquip reprehenderit magna mollit dolor incididunt dolore tempor ipsum.","spans":[]}],"tag":[{"type":"paragraph","text":"Ex exercitation esse dolor enim irure anim fugiat adipisicing occaecat mollit eiusmod exercitation cillum.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"}}],"primary":{"title-A":[{"type":"paragraph","text":"Dolore ut veniam occaecat ea est voluptate occaecat deserunt incididunt reprehenderit laborum reprehenderit eu aliquip adipisicing. Sit ad sint labore elit do nostrud aliqua nisi exercitation. Aliqua proident et veniam officia magna deserunt ullamco velit velit sit.","spans":[]}],"title-B":[{"type":"paragraph","text":"Do fugiat id et irure veniam aliquip sunt aliquip fugiat in excepteur laborum. Incididunt sunt cupidatat duis sint et cillum. Sunt amet deserunt sit non sunt fugiat officia fugiat commodo non.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
