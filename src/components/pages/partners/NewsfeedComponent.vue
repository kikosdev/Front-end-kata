<script lang="ts">
import { defineComponent } from 'vue'
import CarouselComponent from '@/components/base/carousel/CarouselComponent.vue'

export default defineComponent({
  components: {
    CarouselComponent
  }
})
</script>

<template>
  <div class="newsfeed">
    <div class="container pt-20 px-4 py-10 mx-auto text-center">
      <h1 class="title-newsfeed mb-5">newsfeed</h1>
      <h2 class="primary-title-newsfeed">ICC International Court of Arbitration News & Links</h2>
      <CarouselComponent class="mb-10" />
      <a class="read-more uppercase">read all news</a>
    </div>
  </div>
</template>

<style lang="sass" scoped>
</style>