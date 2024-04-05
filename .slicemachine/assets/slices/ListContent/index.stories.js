import MyComponent from '../../../../slices/ListContent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ListContent'
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
      mock: {"variation":"default","name":"Default","slice_type":"list_content","items":[{"title":[{"type":"heading4","text":"Recontextualize plug-and-play infrastructures","spans":[]}],"description":[{"type":"paragraph","text":"Est veniam aliqua est ipsum Lorem ex reprehenderit esse. Consequat dolore laborum culpa nostrud cupidatat qui do amet aute proident.","spans":[]}]},{"title":[{"type":"heading4","text":"Monetize granular partnerships","spans":[]}],"description":[{"type":"paragraph","text":"Tempor nostrud in ex sit reprehenderit officia fugiat ea adipisicing adipisicing in excepteur. Proident laborum Lorem mollit.","spans":[]}]},{"title":[{"type":"heading4","text":"Facilitate synergistic bandwidth","spans":[]}],"description":[{"type":"paragraph","text":"Laboris ullamco laborum fugiat do eiusmod mollit sint. Elit eu dolor anim esse minim ex elit et est sunt occaecat elit. Laborum eu ullamco id.","spans":[]}]},{"title":[{"type":"heading4","text":"Repurpose collaborative interfaces","spans":[]}],"description":[{"type":"paragraph","text":"Incididunt magna magna consectetur exercitation nisi id mollit non deserunt commodo. Culpa exercitation in dolore velit.","spans":[]}]}],"primary":{"titleA":[{"type":"paragraph","text":"Ipsum proident enim nulla qui Lorem sunt do ut pariatur elit.","spans":[]}],"titleB":[{"type":"paragraph","text":"Cupidatat cupidatat est reprehenderit laborum ex est eiusmod exercitation non. Quis ex fugiat pariatur dolore fugiat.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
