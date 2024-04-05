<template>
    <div>
      <h1>{{ post.title }}</h1>
      <img :src="getImageUrl(post.image)" v-if="post.image" alt="post Image" />
    </div>
  </template>
  
  <script>
  import { postQuery } from '@/graphql/query'
  export default {
    apollo: {
      post: {
        query: postQuery,
      },
    },
    computed: {
      post() {
        return this.$apollo.loading ? {} : this.$apollo.data.post.data.attributes
      },
    },
    methods: {
      getImageUrl(image) {
        if (image && image.data && image.data.attributes) {
          return `${process.env.API_URL}/${image.data.attributes.name}`
        }
        return null
      },
    },
  }
  </script>
  