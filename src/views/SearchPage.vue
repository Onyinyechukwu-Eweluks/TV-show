<template>
  <div>
    <ShowsByName :showName="tvShow" />
    
  </div>
</template>

<script lang="ts">
import ShowsByName from '@/components/tv-show/ShowsByName.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchPage',
  components: {
    ShowsByName
  },
  data() {
    return {
      tvShow: this.$route.params.tvShow as string
    }
  }
})
</script>

<style scoped></style>