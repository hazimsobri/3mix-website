import MyComponent from '../../../../slices/Menu';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Menu'
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
      mock: {"variation":"default","name":"Default","slice_type":"menu","items":[{"title":[{"type":"paragraph","text":"Laborum qui dolor aute sunt id consequat labore labore.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},{"title":[{"type":"paragraph","text":"Culpa consequat commodo nostrud voluptate ut tempor nisi amet sunt.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"}},{"title":[{"type":"paragraph","text":"Dolor ex adipisicing id et adipisicing veniam adipisicing id veniam duis culpa pariatur pariatur labore dolore. Consequat minim ipsum ex non et velit commodo cillum sunt quis. Do ad ipsum ex ipsum excepteur.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"title":[{"type":"paragraph","text":"Deserunt nulla cupidatat do proident commodo ex.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"title":[{"type":"paragraph","text":"Do laboris amet ullamco quis commodo minim nulla nostrud in cupidatat irure. Ullamco ut non magna amet enim veniam consequat cupidatat sit aliquip. Commodo est minim cillum in et nostrud.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"heading1","text":"Extend real-time ROI","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
