

<script lang="ts">
import { defineComponent } from 'vue'

interface Logo {
  src: string
  alt: string
}

export default defineComponent({
  data() {
    return {
      logos: [
        { src: '@/assets/images/logo1.png', alt: 'Logo 1' },
        { src: '@/assets/images/logo2.png', alt: 'Logo 2' },
        { src: '@/assets/images/logo3.png', alt: 'Logo 3' },
        { src: '@/assets/images/logo4.png', alt: 'Logo 4' },
        { src: '@/assets/images/logo5.png', alt: 'Logo 5' },
        { src: '@/assets/images/logo6.png', alt: 'Logo 6' },
        { src: '@/assets/images/logo7.png', alt: 'Logo 7' },
        { src: '@/assets/images/logo8.png', alt: 'Logo 8' },
        { src: '@/assets/images/logo9.png', alt: 'Logo 9' },
        { src: '@/assets/images/logo10.png', alt: 'Logo 10' }
      ] as Logo[]
    }
  }
})
</script>

<template>
  <div class="trusted-by-section bg-white container pt-20 px-4 py-10 mx-auto text-center">
    <h1 class="section-title mb-10">Trusted by the Best Arbitration Teams Worldwide</h1>
    <div class="logo-grid grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
      <div v-for="(logo, index) in logos" :key="index" class="logo-item">
        <img :src="logo.src" :alt="logo.alt" class="logo-image mx-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.trusted-by-section {
  padding: 2rem 1rem;
  background-color: #fff;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
}

.logo-grid {
  display: grid;
  gap: 1.5rem;
}

.logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  max-width: 100%;
  height: auto;
}
</style>