

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
        { src: 'src/assets/images/logos/dla.png', alt: 'Logo 1' },
        { src: 'src/assets/images/logos/curtis.png', alt: 'Logo 2' },
        { src: 'src/assets/images/logos/burford.png', alt: 'Logo 3' },
        { src: 'src/assets/images/logos/freshfields.png', alt: 'Logo 4' },
        { src: 'src/assets/images/logos/shearman.png', alt: 'Logo 5' },
        { src: 'src/assets/images/logos/foreign.png', alt: 'Logo 6' },
        { src: 'src/assets/images/logos/foley.png', alt: 'Logo 7' },
        { src: 'src/assets/images/logos/eversheds.png', alt: 'Logo 8' },
        { src: 'src/assets/images/logos/mofa.png', alt: 'Logo 9' },
        { src: 'src/assets/images/logos/dentons.png', alt: 'Logo 10' },
        { src: 'src/assets/images/logos/three.png', alt: 'Logo 11' },
        { src: 'src/assets/images/logos/gibson.png', alt: 'Logo 12' }
      ] as Logo[]
    }
  }
})
</script>

<template>
  <div class="trusted-partners container pt-20 px-4 py-10 mx-auto text-center">
    <h1 class="trusted-title mb-10">Trusted by the Best Arbitration Teams Worldwide</h1>
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