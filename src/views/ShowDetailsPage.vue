<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <TvShowDetails :searchId="id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TvShowDetails from '../components/tv-show/TvShowDetails.vue';

export default defineComponent({
  name: 'ShowDetailsPage',
  components: {
    TvShowDetails,
  },
  data () {
    return {
      id: this.$route.params.id
    }
  }
})
</script>

<style scoped></style>
