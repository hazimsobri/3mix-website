import MyComponent from '../../../../slices/ServiceIntro';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ServiceIntro'
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
      mock: {"variation":"default","name":"Default","slice_type":"service_intro","items":[],"primary":{"titleA":[{"type":"paragraph","text":"Laboris non magna culpa occaecat minim occaecat sunt. Cupidatat ea proident in proident ad labore dolore et dolor laboris amet nulla.","spans":[]}],"titleB":[{"type":"paragraph","text":"Incididunt dolore labore ad cupidatat ex.","spans":[]}],"description":[{"type":"paragraph","text":"Enim velit incididunt mollit laborum anim esse Lorem amet elit dolore quis voluptate. Elit ea et voluptate cupidatat duis dolor dolor. Quis labore aliquip commodo nostrud ipsum fugiat laborum ex commodo dolore dolore.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
