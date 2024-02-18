<template>
  <div>
    <DashboardComp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DashboardComp from '../components/tv-show/DashbordComp.vue'

export default defineComponent({
  name: 'DashboardPage',
  components: {
    DashboardComp,
  },
  setup() {


    return {}
  }
})
</script>

<style scoped></style>