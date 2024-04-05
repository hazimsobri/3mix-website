import MyComponent from '../../../../slices/JobBanner';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/JobBanner'
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
      mock: {"variation":"default","name":"Default","slice_type":"job_banner","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
