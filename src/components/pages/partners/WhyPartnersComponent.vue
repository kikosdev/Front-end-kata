<script lang="ts">
import { defineComponent } from 'vue'
import ItemsObjectPaternes from '@/components/base/items/item.component.vue'

interface ItemsIcons {
  nameIcon: string
  title: string
  text: string
}

export default defineComponent({
  components: { ItemsObjectPaternes },
  data() {
    return {
      items: [
        {
          nameIcon: 'morecontent_icon.svg',
          title: 'More key arbitration content',
          text: 'This unique partnership means you will have access to more key arbitration content to level up your arbitration research. '
        },
        {
          nameIcon: 'transparency_icon.svg',
          title: 'More transparency',
          text: 'You will appreciate the increase in transparency in arbitration!'
        },
        {
          nameIcon: 'efficency_icon.svg',
          title: 'More efficiency',
          text: 'Jus Mundi’s AI-powered technology efficiently delivers thorough legal research and due diligence with full confidence.'
        }
      ] as ItemsIcons[]
    }
  }
})
</script>
<template>
  <div class="whyPartners bg-white container pt-20 px-4 py-10 mx-auto h-auto grid text-center">
    <div class="flex flex-wrap justify-center pt-4 pb-8 mx-80 flex-grow">
      <p class="quotes py-2.5 px-36 text-left">
        Publicising and disseminating information about arbitration has been one of ICC’s
        commitments since its creation and an instrumental factor in facilitating the development of
        trade worldwide.
      </p>
      <p class="title-quotes pt-5 pb-2 px-10">
        Note to the Parties and the Arbitral Tribunals on the Conduct of Arbitration under the ICC
        Rules of Arbitration
      </p>
      <p class="read-more">read the whole document</p>
    </div>
    <div class="flex flex-wrap justify-center px-10 py-20 why-partner">
      <h1 class="title-why-partner mb-5">Why this partnership?</h1>
      <div class="px-64 py-5">
        <p class="partners-text">
          Throughout its 100-year history, ICC has brought global business together to support an
          international rules-based order, including the promotion of global trade and commerce
          through the work of the ICC International Court of Arbitration.
        </p>
        <p class="partners-text">
          ICC has partnered with Jus Mundi to provide full public access to all publishable ICC
          International Court of Arbitration awards and related documents made as of 1 January 2019
        </p>
      </div>
    </div>

    <div class="icon-partners">
      <div class="mx-auto max-w-6xl">
        <ul class="grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          <li v-for="(item, index) in items" :key="index">
            <items-object-paternes
              :nameIcon="item.nameIcon"
              :title="item.title"
              :text="item.text"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
</style>