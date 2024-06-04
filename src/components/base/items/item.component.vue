<script setup lang="ts">
interface Props {
  nameIcon: string
  title: string
  text: string
}

const props = defineProps<Props>()
</script>


<template>
  <div class="bg-white px-6">
    <img :src="`/src/assets/images/${props.nameIcon}`" alt="" class="mx-auto h-12 w-12" />
    <h3 class="my-3 font-display font-medium">{{ props.title }}</h3>
    <p class="mt-1.5 text-sm leading-6 text-secondary-500">
      {{ props.text }}
    </p>
  </div>
</template>

<style lang="sass" scoped>
</style>