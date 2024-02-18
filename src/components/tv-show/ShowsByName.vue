<template>
  <div class="container">
    <h1>TV Show</h1>
    <div v-for="(rootData, i) in searchData" :key="i">
      <div class="show-details">
        <img :src="(rootData.show.image?.medium)" class="img" />
        <div class="show-details-text">
          <h2 class="show-details-title">{{ rootData.show.name }}</h2>
          <p class="show-details-paragraph" v-html="rootData.show.summary"></p>
          <p class="show-details-paragraph">
            Rating: {{ rootData.show.rating?.average }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
 

<script lang="ts">
import { defineComponent } from 'vue'
// import { searchUrl } from '../../composables/apiData'
import { SearchedTvShow } from '@/types/tv-shows';
// import axios from 'axios';

export default defineComponent({
  name: "ShowsByName",
  components: {},
  props: {
    showName: {
      type: Array,
    }
  },
  data() {
    return {
      searchData: [] as SearchedTvShow[],
    }
  },
  mounted() {
    this.searchData = this.showName as SearchedTvShow[]
  },
  methods: {}
})
</script>

<style scoped>
.img {
  width: 30%;
}

.show-details {
  display: flex;
  gap: 20px;
  flex-direction: row;
}
</style>
