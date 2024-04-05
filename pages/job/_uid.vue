<template>
      <LocomotiveScroll ref="scroller" :getted-options="{ smooth: true, getDirection: true,}">
        
        <page-section class="job__hero bg-grey" data-scroll-section >
            <div class="grid grid-cols-12 ">
              <div class="md:col-span-4 md:col-start-5 col-span-10 col-start-2 py-20 mx-auto">
                <div class="pt-20">
                  <div class="lg:text-6xl md:text-4xl text-3xl title-text">{{ $prismic.asText(post.title) }}</div>
                  <div class="text-italic text-2xl">
                    {{ $prismic.asText(post.location) }}
                  </div>
                </div>

                 <article class="py-14">

                    <div class="">
                      <div class="mb-10">
                        <div class="title-text text-2xl mb-4">Description</div>
                            <prismic-rich-text class="job__desc" :field="post.desc" :htmlSerializer="htmlSerializer" />
                      </div>
                    </div>
                    <div class="">
                      <div class="mb-10">
                        <div class="title-text text-2xl mb-4">Responsibility</div>
                            <prismic-rich-text class="job__desc" :field="post.resp" :htmlSerializer="htmlSerializer" />
                      </div>
                    </div>
                    <div class="mt-10">
                        <div class="title-text text-2xl mb-4">Requirements</div>
                            <div>
                                <prismic-rich-text class="job__requirements" :field="post.req"  />
                            </div>
                        </div>
                     <div class="job__application mt-20">
                       <div class="title-text text-2xl mb-4 inline-block">Apply for this job</div>
                          <form autocomplete="off"  @click.prevent="send">
                              <div class="form__item flex flex-col">
                                  <label for="name" class="mb-3 title-text" >Name</label>
                                  <input class="inline-block w-full outline-none p-3" id="name" placeholder="David Amstrong" required type="text" v-model="name">
                              </div>
                              <div class="form__item flex flex-col mt-5">
                                  <label for="email" class="mb-3 title-text" >Email</label>
                                  <input class="inline-block w-full outline-none p-3" id="email" placeholder="david@hashcodebook.com" required type="email" v-model="email">
                              </div>
                              <div class="form__item flex flex-col mt-5">
                                  <label for="phone" class="mb-3 title-text" >Phone</label>
                                  <input class="inline-block w-full outline-none  p-3" placeholder="+(60) 12 232 0650" type="tel" id="phone" required name="phone" v-model="phone">
                              </div>
                              <div class="w-full my-10">
                                <button class="w-full py-3.5 relative button bg-blue px-7"  type="submit">
                                  <span class="relative py-4">Apply Job </span>
                                </button>
                              </div>
                          </form>
                     </div>
                 </article>
              </div>
            </div>
        </page-section>
        <TemplatesFooter data-scroll-section />
    </LocomotiveScroll>
</template>

<script>
import PageSection from '~/components/structure/PageSection.vue'
import AppButton from '~/components/elements/AppButton.vue';

export default {
    components: { PageSection, AppButton },
      mounted () {
        const locomotive = this.$refs.scroller.locomotive
        locomotive.on('scroll', (instance) => {
        document.documentElement.setAttribute('data-direction', instance.direction)
        })
    },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const post = (await $prismic.api.getByUID('post', params.uid)).data
      // Returns data to be used in template
      const title = $prismic.asText(post.title)
      return {
       post, title
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data: () => ({
        email: '',
        name: '',
        phone: '',
    }),
    methods:{
        send(e) {
            this.sendEmail()
            e.preventDefault();
        },
        async sendEmail() {
            const ip = await this.$axios.$post('http://172.104.162.16:8000/carrer', { 
                email: this.email,
                name: this.name,
                phone: this.phone,
                title: this.title
            })
        },

       htmlSerializer(type, element, content, children) {
          // If element is a list item,
            if (type === "list-item") {
              // return some customized HTML.
              return `<li >${children.join("")}</li>`;
            }
            /// Otherwise, return null.
            return null;
        }
    },
}
</script>
<style  >
  .job__requirements ul li{  
      position: relative;
      padding: 1rem 0rem;
  }
  .job__desc p{
    margin-bottom: 0px;
  }
  .job__desc li{
      list-style: disc;
  }
  .job__requirements ul li::before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        background: black;
        width: 100%;
    }
</style>
<style lang="scss" scoped>
  .job__requirements{
    ul li{
      position: relative;
      &::before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        background: black;
        width: 100%;
      }
    }
  }
.job__form{
  height: 400px;
}
.form__item{
    input, select, textarea{
        background: transparent;
        border: 1px solid #0B0A10;
    }
}
</style>