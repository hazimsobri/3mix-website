import MyComponent from '../../../../slices/NoLinkSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/NoLinkSlider'
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
      mock: {"variation":"default","name":"Default","slice_type":"no_link_slider","items":[{"title":[{"type":"heading5","text":"Deploy sticky synergies","spans":[]}],"description":[{"type":"paragraph","text":"Do pariatur ullamco qui ex ullamco dolore exercitation culpa reprehenderit amet.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"}},{"title":[{"type":"heading5","text":"Embrace clicks-and-mortar applications","spans":[]}],"description":[{"type":"paragraph","text":"Labore tempor ea non.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"}},{"title":[{"type":"heading5","text":"Whiteboard cross-media e-tailers","spans":[]}],"description":[{"type":"paragraph","text":"Elit sint ea mollit ut ad velit velit magna anim nisi dolore ad proident. Officia minim culpa Lorem minim dolore laboris Lorem non consectetur eu fugiat nisi.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"}},{"title":[{"type":"heading5","text":"Facilitate cross-media blockchains","spans":[]}],"description":[{"type":"paragraph","text":"Anim culpa id sint labore sunt ea est. Anim ex duis laboris ut. Esse ex qui non consectetur velit.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"}}],"primary":{"titleA":[{"type":"paragraph","text":"Reprehenderit mollit in qui consectetur occaecat labore commodo ut.","spans":[]}],"titleB":[{"type":"paragraph","text":"Ipsum pariatur irure laboris eiusmod qui enim pariatur.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
