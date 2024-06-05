<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

interface NewsfeedItem {
  description: string
}

export default defineComponent({
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      newsfeedItems: [
        {
          description: 'Corsair becomes the latest airline to pilot ICC AOKpass'
        },
        {
          description: 'ICC warns EU vaccine export controls must be rolled back without delay'
        },
        {
          description:
            'Eduardo Silva Romero talks of advancing diversity, scope of ICC Institute as new Chair'
        },
        {
          description:
            'ICC/UNICEF: Funding shortfalls and supply chain challenges threaten equitable vaccine distribution'
        },
        {
          description: 'ICC Trading Thoughts with Karima-Catherine Goundiam, founder of B2beeMatch'
        },
        {
          description: 'Guest blog: Making arbitration work in a down market'
        }
      ] as NewsfeedItem[]
    }
  }
})
</script>

<template>
  <div class="newsfeed-carousel container pt-10 px-4 py-10 text-left">
    <carousel :items-to-show="4" :items-to-scroll="3" autoplay :autoplayTimeout="6000">
      <slide v-for="(item, index) in newsfeedItems" :key="index">
        <div class="newsfeed-item px-6 py-4 bg-white mx-2 text-left">
          <p class="newsfeed-description mt-2 text-gray-600 mb-4">{{ item.description }}</p>
          <p class="read-more">Read more</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<style scoped lang="sass">
</style>