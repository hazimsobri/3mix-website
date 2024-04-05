<template>
  <page-section>
      <div class="lg:grid lg:grid-cols-2 grid-cols-1 w-full" >
            <div class="mt-10" id="results">
                <div class="bg-grey h-full">
                  <div class="col-span-4 text-5xl flex flex-col pt-10 content pb-20 " >
                    <span class="title-text  mt-10" > <span class="text-italic">Let's Talk</span> about</span>
                    <span class="title-text " >your next project</span>
                  </div>
                  <aside class="md:grid md:grid-cols-12 grid-cols-1 content border-t border-b border-gray-300">
                      <div class="py-10 md:border-r md:border-b-0  border-b  border-gray-300 col-span-4">
                          <a href="tel:+60123744931" class="inline-flex link__anim relative">
                              <span class="mr-5 link__anim-item --main">+(60)1128136198</span>
                              <span class="mr-5 link__anim-item --hover">+(60)1128136198</span>
                              <div class="form__arrow relative">
                                  <span class="link__anim-arrow --main"><SvgArrow /></span>
                                  <span class="link__anim-arrow --hover"><SvgArrow /></span>
                              </div>
                          </a>
                      </div>
                      <div class="py-10 mx-auto col-span-8">
                          <a href="mailto:enquiry@anhsin.io" class="inline-flex link__anim relative">
                              <span class="mr-5 link__anim-item --main">enquiry@anhsin.io</span>
                              <span class="mr-5 link__anim-item --hover">enquiry@anhsin.io</span>
                              <div class="form__arrow relative">
                                  <span class="link__anim-arrow --main"><SvgArrow /></span>
                                  <span class="link__anim-arrow --hover"><SvgArrow /></span>
                              </div>
                          </a>
                      </div>
                  </aside>
                  <aside class="md:grid md:grid-cols-12 grid-cols-1 content border-b border-gray-300">
                      <div class="py-10 border-gray-300 col-span-12 ">
                          <a href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15935.652237557691!2d101.6774777!3d3.1176991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc491fdf4901f7%3A0x61ed14f7b75d8cd0!2sAnhsin%20Technology%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1697795144868!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="inline-flex flex-col link__anim relative">
                              <span class="title-text text-lg">Anhsin Technology</span>
                              <pre class="mr-5">
                                Unit No. 31-7, 7th Floor,
                                The Boulevard Mid Valley,
                                Lingkaran Syed Putra, Mid Valley City,
                                59200, Kuala Lumpur.
                              </pre>
                              <div class="inline-block mt-10">
                                <div class="form__arrow relative inline-block">
                                    <span class="link__anim-arrow --main"><SvgArrow /></span>
                                    <span class="link__anim-arrow --hover"><SvgArrow /></span>
                                </div>
                              </div>
                          </a>                          
                      </div>
                  </aside>
  
                </div>
            </div>
            <div class="py-20">
                      <form class="content" autocomplete="off" @submit.prevent="send" >
                          <div class="form__item flex flex-col" >
                                 <label for="name" class="mb-3 title-text" >Name *</label>
                                 <input class="inline-block w-full outline-none p-3" id="name" placeholder="David Amstrong"  autocomplete="false"  type="text" required v-model="name">
                          </div>
                          <div class="form__item flex flex-col mt-5">
                              <label for="company" class="mb-3 title-text" >Company *</label>
                              <input class="inline-block w-full outline-none p-3" id="company" placeholder="Anhsin Sdn Bhd" type="text" required v-model="company">
                          </div>
                          <div class="form__item flex flex-col mt-5">
                              <label for="email" class="mb-3 title-text" >Email *</label>
                              <input class="inline-block w-full outline-none p-3" id="email" placeholder="david@anhsin.io" type="email" required v-model="email">
                          </div>
                          <div class="form__item flex flex-col mt-5">
                              <label for="phone" class="mb-3 title-text" >Phone *</label>
                              <input class="inline-block w-full outline-none  p-3" placeholder="+(60) 12 232 0650" type="tel" id="phone" name="phone" required v-model="phone">
                          </div>
                          <div class="form__item flex flex-col mt-5">
                              <label for="budget" class="mb-3 title-text" >Budget *</label>
                              <select class="inline-block w-full outline-none p-3" id="budget" name="budget" required>
                                    <option value="100,0000"> less than RM50k </option>
                                    <option value="100,0000" >RM50k - RM100k</option>
                                    <option value="100,0000" selected>RM100k - RM200k</option>
                                    <option value="100,0000">RM200k - RM300k</option>
                                    <option value="100,0000">RM300k - RM400k</option>
                                    <option value="100,0000">RM500k and above</option>
                                </select>
                          </div>
                          <div class="form__item flex flex-col mt-5">
                              <label for="summary" class="mb-3 title-text" >Summarize your project ideas</label>
                              <textarea name="summary" id="summary" class="inline-block w-full outline-none p-3"  cols="30" rows="10" 
                                  placeholder=" We are Vanessa, a large clothing store, with several stores all over the country. We are in desperate need of a UX designer since we are planning on turning our brand into an online webshop.">
                              </textarea>
                          </div>
                            <div class="w-full my-10">
                                <button class="relative button bg-blue px-7 py-3.5" type="submit" >
                                        <span class="relative">Send</span>
                                </button>       
                          </div>
                      </form>
                  </div>
      </div>
    </page-section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import PageSection from '~/components/structure/PageSection.vue'
export default {
  components: { PageSection },
  name: "Contact",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
    data: () => ({
        email: '',
        name: '',
        company: '',
        phone: '',
        budget: '',
        summary: '',
    }),
    methods:{
        send(e) {
            this.sendEmail()
             e.preventDefault();
            },
        clearForm() {

        },
        async sendEmail() {
            const ip = await this.$axios.$post('http://172.104.162.16:8000/general', { 
                email: this.email,
                name: this.name,
                company: this.company,
                phone: this.phone,
                budget: this.budget,
                idea: this.summary
            }) 
                 

        },

    },

}
</script>

<style lang="scss" scoped>
  .form__arrow{
      svg{
          stroke: #214EFF;
      }
  }
.form__item{
    input, select, textarea{
        background: transparent;
        border: 1px solid #0B0A10;
    }
}

</style>
