<template>
  <div>
    <TvShowsList />
  </div>
</template>

<script lang="ts">
import TvShowsList from '@/components/tv-show/TvShowsList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DashboardPage',
  components: {
    TvShowsList

  },
  setup() {


    return {}
  }
})
</script>

<style scoped></style>