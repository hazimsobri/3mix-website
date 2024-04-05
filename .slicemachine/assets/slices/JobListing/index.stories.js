import MyComponent from '../../../../slices/JobListing';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/JobListing'
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
      mock: {"variation":"default","name":"Default","slice_type":"job_listing","items":[{"joblist":{"link_type":"Web","url":"https://prismic.io"},"title":[{"type":"paragraph","text":"Ea laborum consectetur exercitation elit duis sunt occaecat veniam magna laborum culpa consequat quis amet. Nulla laborum commodo magna ipsum commodo aliqua tempor minim id proident amet.","spans":[]}],"date":"2012-02-29"},{"joblist":{"link_type":"Web","url":"https://prismic.io"},"title":[{"type":"paragraph","text":"Consequat ut sit voluptate duis irure in ad. Duis ipsum anim velit eiusmod ipsum exercitation ea tempor. Ad sint do sunt est veniam aliqua excepteur fugiat aute non adipisicing aute sint ea.","spans":[]}],"date":"2016-10-22"},{"joblist":{"link_type":"Web","url":"https://slicemachine.dev"},"title":[{"type":"paragraph","text":"Nostrud voluptate esse non do reprehenderit occaecat ipsum. Do et cillum consectetur exercitation aliquip adipisicing reprehenderit occaecat proident magna tempor.","spans":[]}],"date":"2016-10-04"},{"joblist":{"link_type":"Web","url":"http://twitter.com"},"title":[{"type":"paragraph","text":"Veniam ex anim Lorem aliquip proident ad ad do sit mollit. Tempor irure commodo magna ipsum voluptate esse Lorem.","spans":[]}],"date":"2017-12-05"},{"joblist":{"link_type":"Web","url":"http://google.com"},"title":[{"type":"paragraph","text":"Labore aliquip laborum qui labore ipsum eu elit exercitation elit magna anim enim ad mollit. Ut et eu quis officia.","spans":[]}],"date":"2020-01-31"},{"joblist":{"link_type":"Web","url":"https://prismic.io"},"title":[{"type":"paragraph","text":"Adipisicing eiusmod cupidatat est veniam adipisicing occaecat.","spans":[]}],"date":"2018-07-27"},{"joblist":{"link_type":"Web","url":"https://prismic.io"},"title":[{"type":"paragraph","text":"Et sint Lorem cillum Lorem dolore enim minim aute aute id minim. Sint Lorem reprehenderit sint tempor ipsum est non fugiat ut consequat id ipsum et fugiat.","spans":[]}],"date":"2020-11-15"}],"primary":{"title":[{"type":"paragraph","text":"Fugiat Lorem ad dolore veniam consectetur amet sunt cillum non officia sint tempor. Consequat id eiusmod irure proident ullamco voluptate laborum.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
