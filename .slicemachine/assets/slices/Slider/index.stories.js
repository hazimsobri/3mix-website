import MyComponent from '../../../../slices/Slider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Slider'
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
      mock: {"variation":"default","name":"Default","slice_type":"slider","items":[{"title":[{"type":"paragraph","text":"Do laborum ut consequat. Occaecat ut exercitation eu dolor aliqua.","spans":[]}],"description":[{"type":"paragraph","text":"Ipsum sunt labore elit id laboris excepteur.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"title":[{"type":"paragraph","text":"Dolore nulla et exercitation occaecat labore qui qui cupidatat id est non. Laboris Lorem labore sit non nostrud mollit qui reprehenderit pariatur officia nulla do tempor. Consequat dolor adipisicing laboris mollit sunt.","spans":[]}],"description":[{"type":"paragraph","text":"Labore proident fugiat minim in. Ipsum duis ad commodo amet cillum magna deserunt. Consectetur ipsum sunt aliqua dolore sunt proident est pariatur.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}},{"title":[{"type":"paragraph","text":"Mollit eu dolore non dolor duis enim ea nulla laborum. Nulla aliquip nulla eiusmod ipsum.","spans":[]}],"description":[{"type":"paragraph","text":"Minim consectetur veniam excepteur tempor in ea aliquip anim voluptate laborum est.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"title":[{"type":"paragraph","text":"Nostrud veniam excepteur sit eu et ex qui irure velit tempor exercitation incididunt adipisicing. Aliqua deserunt ad officia ex id tempor cillum veniam. Dolore exercitation magna enim ad elit Lorem labore quis ipsum anim cillum quis commodo incididunt.","spans":[]}],"description":[{"type":"paragraph","text":"Esse est deserunt et mollit laboris nisi aliquip deserunt exercitation commodo consequat mollit. Do adipisicing magna incididunt nostrud reprehenderit amet officia velit elit nisi sint velit.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"titleA":[{"type":"paragraph","text":"Ea amet labore eiusmod dolore qui. Tempor voluptate adipisicing minim duis sit consequat reprehenderit esse.","spans":[]}],"titleB":[{"type":"paragraph","text":"Exercitation occaecat minim consectetur voluptate ipsum exercitation cupidatat deserunt minim veniam cillum officia quis id aute. Ipsum elit Lorem nulla quis ut dolor ea est tempor eu anim cupidatat consequat consequat.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
