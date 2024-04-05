<template>
<page-section>
  <div class="lg:py-40 py-10">
      <div class="content">
        <div>
          <div class="lg:flex ">
            <article class="lg:w-5/12 h-full lg:mx-20">
                      <div class="relative h-full w-full md:mt-0 mt-16" data-scroll data-scroll-speed="1" >
                              <elements-app-img 
                                  aspect-ratio="1:1"
                                  data-scroll
                                  class="md:h-full"
                                  :url="slice.primary['image-1'].url" 
                              />
                      </div>
            </article>
            <div class="lg:w-5/12 ">          
            </div>
          </div>

          <div class="lg:flex py-5 ">
              <article class="lg:w-5/12 lg:mx-20">
                <div class="md:w-80 lg:ml-auto">
                    <div class=" flex flex-col title-text md:text-4xl text-2xl mb-5 ">
                        <span >Empathy &amp; </span>
                        <span>compassion</span>
                    </div>
                    <p>
                        The ability to understand and share 
                        the feelings of another and be sympathetic 
                        towards their situation and problem is what 
                        keeps us moving forward as a team and also as 
                        members of this society. 
                    </p>
                    <p class="py-5">
                        When we associate with our clients, partners, 
                        internal team members, or even the public. 
                        Two values we stand by always are Empathy 
                        and Compassion. 
                    </p>
                    <p>
                        We create a positive, lasting, and understanding 
                        relationship with the people in our circle. 
                    </p>
                </div>
              </article>
              <div class="lg:w-5/12 md:py-0 py-5">
                      <div class="relative lg:-translate-y-20 h-full md:w-80" data-scroll data-scroll-speed="3" >
                              <elements-app-img 
                                  aspect-ratio="30:15"
                                  data-scroll
                                  class="md:h-full"
                                  :url="slice.primary['image-2'].url"
                              />
                      </div>
              </div>
          </div>
        </div>    
        <div class="md:py-10 py-5">
          <div class="lg:flex ">
            <div class="lg:w-5/12"></div>
            <article class="lg:w-5/12 h-full lg:mx-20">
                      <div class="relative h-full w-full md:mt-0 mt-16" data-scroll data-scroll-speed="1" >
                              <elements-app-img 
                                  aspect-ratio="1:1"
                                  data-scroll
                                  class="md:h-full"
                                  :url="slice.primary['image-3'].url"
                              />
                      </div>
            </article>
          </div>

          <div class="lg:flex py-5 ">
              <div class="lg:w-5/12">
                      <div class="relative md:-translate-y-20 md:ml-auto h-full md:w-80" data-scroll data-scroll-speed="3" >
                              <elements-app-img 
                                  aspect-ratio="30:15"
                                  data-scroll
                                  class="md:h-full"
                                  :url="slice.primary['image-4'].url"
                              />
                      </div>
              </div>
              <article class="lg:w-5/12 lg:mx-20">
                <div class="md:w-80">
                    <div class="flex flex-col title-text md:text-4xl text-2xl mb-5 ">
                      <span >Problem</span>
                      <span>Solving</span>
                    </div>
                    <p>
                        We have a team of experienced and youthful members who 
                        love to take on challenges and solve problems for our 
                        clients. 
                    </p>
                    <p class="py-5">
                        Ever since the inception of the company, 
                        we have worked on a countless number of web 
                        development, app development, graphic designing, 
                        digital marketing, and content creation projects 
                        and never backed off from a challenge. 
                    </p>
                    <p>
                        Problem-solving is engrained in the company DNA. 
                    </p>
                </div>
              </article>
          </div>
        </div>
        <div>
          <div class="lg:flex ">
            <article class="lg:w-5/12 h-full lg:mx-20">
                      <div class="relative h-full w-full md:mt-0 mt-16" data-scroll data-scroll-speed="1" >
                              <elements-app-img 
                                  aspect-ratio="1:1"
                                  data-scroll
                                  class="md:h-full"
                                  :url="slice.primary['image-5'].url"
                              />
                      </div>
            </article>
            <div class="lg:w-5/12">          
            </div>
          </div>

          <div class="lg:flex py-5 ">
              <article class="lg:w-5/12 lg:mx-20">
                <div class="md:w-80 lg:ml-auto">
                    <div class=" flex flex-col title-text md:text-4xl text-2xl mb-5 ">
                        <span >Work Hard,</span>
                        <span>Play Even Harder</span>
                    </div>
                    <p>
                        We love to work and we love to play even more. 
                        Every month we organize lunch or casual dinners 
                        with our team to build better chemistry and teamwork.
                    </p>
                    <p class="py-5">
                        We were not kidding when we said we love to play, 
                        we have an in-house pool table, we use it daily 
                        and challenge our peers! Not only that, but we 
                        also have a beer pong table, hangout lounge, 
                        card, and board games for our team members to enjoy!
                    </p>
                    <p>
                        Not to mention the yearly trips we take to go 
                        overseas are one of the biggest fun activities 
                        we do as a team. 
                    </p>
                </div>
              </article>
              <div class="lg:w-5/12 md:py-0 py-5">
                      <div class="relative lg:-translate-y-20 h-full md:w-80" data-scroll data-scroll-speed="3" >
                              <elements-app-img 
                                  aspect-ratio="30:15"
                                  data-scroll
                                  class="md:h-full"
                                  :url="slice.primary['image-6'].url"
                              />
                      </div>
              </div>
          </div>
        </div>

      </div>
  </div>
</page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import PageSection from '~/components/structure/PageSection.vue';

export default {
  components: { PageSection },
  name: "ContentTypeC",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>

</style>
