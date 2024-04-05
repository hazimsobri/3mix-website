<template>
    <div class="py-10 lg:px-20 px-5">
        <div class="md:grid xl:grid-cols-3 md:grid-cols-2 gap-4 project">
            <div class="project__card w-full " v-for="projects in project" :key="projects.uid" v-bind:projects="projects">
                <nuxt-link  class="h-full flex flex-col" :to="getProjectsUrl(projects.uid)">
                    <div class="relative h-full w-full">
                        <elements-app-img 
                            aspect-ratio="40:40"
                            class="mb-2 h-full"
                            :url="projects.data.image.url"  />
                    </div>

                    <div class="my-5 lg:text-3xl text-xl h-full">
                        <div class="flex justify-between">
                            <span>{{ $prismic.asText(projects.data.title) }}</span>
                            <span class="uppercase text-xs text-grey flex items-center">
                                {{
                                    Intl.DateTimeFormat('en-US').format(
                                    new Date(projects.first_publication_date)
                                    )
                                }}
                            </span>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 
        'project'
    ],

   methods:{
        getProjectsUrl(uid) {
            return `/projects/${uid}`;
        },
   }
}
</script>

<style lang="scss" scoped>
.project__video{
    &::before{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        padding-bottom: 30rem;
    }
}
</style>