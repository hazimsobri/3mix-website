<template>
  <div class="lg:grid lg:grid-cols-12">
      <aside class="col-span-4 text-5xl pt-20 text-white bg-black flex flex-col content lg:h-screen h-full" data-scroll data-scroll-sticky data-scroll-target="#filters" data-scroll-offset="0">
            <span class="title-text">Latest <span class="text-italic">Jobs</span> </span>
            <form  class="py-10">
                <div class="w-full h-full">
                    <div class="text-lg flex flex-wrap">
                        <div class="filter">
                            <label><input type="radio" v-model="selectedTag" value="All" checked="checked"/><span>All</span></label>
                            <label v-for="(tag, index) in tags" :key="index">
                                <input type="radio" v-model="selectedTag" :value="tag" :class="{'is-active': isActive}" >
                                <span>{{ tag }}</span>
                            </label>
                        </div>
                    </div>
                </div> 
            </form>
      </aside>
      <div class="col-span-8 pr-0" id="filters">
          <div class="content pb-20">
            <div class="py-20">
                <div class="title-text text-6xl flex flex-col " > 
                    <span class="animate__text-view--3d" >Find the best</span>
                    <span class="animate__text-view--3d" >postion for you</span>
                </div>
            </div>
            <div class="job__block job__link py-6 content" v-for="post in posts" :key="post.uid" v-bind:post="post">
                <nuxt-link class="link__anim relative" :to="getPostUrl(post.uid)">
                    <div class="flex justify-between mb-4">
                        <div class="flex">
                            <span class="uppercase text-xs flex items-center bg-grey-50 px-3 border border-grey-600 rounded-full mr-2 text-grey-600"><span class="mr-2 job__location"><SvgLocation /></span>{{ $prismic.asText(post.data.location) }}</span>
                            <span class="flex items-center text-xs bg-grey-50 px-3 border border-grey-500 rounded-full text-grey-600">{{ $prismic.asText(post.data.contract) }}</span>
                        </div> 
                        <span class="uppercase text-xs text-grey flex items-center">
                            <span class="mr-2"><SvgCalender /></span>
                            {{
                                Intl.DateTimeFormat('en-US').format(
                                new Date(post.first_publication_date)
                                )
                            }}
                        </span>
                    </div>
                    <div class="text-2xl">
                        <span class="title-text">{{ $prismic.asText(post.data.title) }}</span>
                    </div>
                    <div class="flex justify-end">                  
                        <div class="link__arrow mt-10 relative inline-block">
                            <div class="relative inline-block">
                            <span class="link__anim-arrow --main"><SvgArrow /></span>
                            <span class="link__anim-arrow --hover"><SvgArrow /></span>
                            </div>
                        </div>
                    </div>
                </nuxt-link>
            </div>
          </div>

        <!-- <div v-else class="">
            <p>No Posts published at this time.</p>
        </div>  -->
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isActive :false,
            tags: null,
            selectedTag: "All",
            page:1,
        }

     }, 
    props: [ 
        'jobs'
    ],
    created() {
        this.tags = this.getTags()
    },
    computed:{
        posts: function() {
                var self = this;
                var tag = self.selectedTag;
                if(tag === "All") {
                    return self.jobs;
                } else {
                    return self.jobs.filter(function(post) {
                        return post.tags.includes(tag);           
                    });
                }
        },
        slicedData: function() {
            return this.posts.slice(0, 6 * this.page)
        }
    },
    watch: {
        slicedData: function() {
            var e = this;
            this.$nextTick((function() {
                this.animatePost()
                e.$nuxt.$emit('update-locomotive')
            }
            ))
        },
        tag: function() {
            this.page = 1
        }
    },
    mounted(){},
    methods: {
        getPostUrl(uid) {
            return `/job/${uid}`;
        },
        getTags() {
            const unique = this.jobs.map(function(post){
                return post.tags;
            });
            const merged = [].concat.apply([], unique);
            const tags = merged.filter(function(item, index){
                return merged.indexOf(item) >= index;
            });
            return(tags)  
        },
        animatePost(){
            this.$gsap.set('.job__block',{
                yPercernt: 100,
                opacity:0,
            })
            this.$gsap.to('.job__block',{
                yPercernt: 0,
                opacity:1,
                duration:1,
                stagger:0.2,
                ease: 'expo.inOut',
            })

        }
    }
}
</script>

<style lang="scss" scoped>
.job__block{
    position: relative;
        &:nth-child(even){
            background-color: #F5F5F8;
        }
}
  .form__radio{
     background: #214EFF;
     padding: 0.5rem 1rem;
     border-radius: 50px;
  }

  .job__location{
      svg{
          fill: #2563eb;
      }
  }
    .link__arrow{
        svg{
            width: 16px;
            height: 16px;
        }
    }

    .link__arrow{
            svg{
                stroke: #214EFF;
            }
    }
    .filter span{
        margin: 5px 5px;
        padding: .4rem .8rem;
        border-radius: 50rem;
        line-height: 1;
        background: #214EFF;
        color: #fff;
        display: inline-block;
        cursor: pointer;
    }

    :checked + span {
        background-color: #00ffec;
        color: #000;
        font-weight: 500;
        cursor: pointer;
    }
    .filter label input {
         display: none;
    }
</style>