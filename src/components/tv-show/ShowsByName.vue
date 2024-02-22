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
      <hr>
    </div>
    <hr>
  </div>
</template>
 

<script lang="ts">
import { defineComponent } from 'vue'
import { SearchedTvShow } from '@/types/tv-shows';
import { getSearchData } from '../../utils/apiData'

export default defineComponent({
  name: "ShowsByName",
  components: {},
  props: {
    showName: {
      type: String,
    }
  },
  data() {
    return {
      searchData: [] as SearchedTvShow[],
    }
  },
  async mounted() {
    // this.searchData = this.showName as SearchedTvShow[]
    await this.getSearchResult()
  },
  methods: {
    async getSearchResult() {
      try {
        const data = await getSearchData(this.showName as string) as SearchedTvShow[]
        this.searchData = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>

<style scoped>
.img {
  width: 30%;
  max-width: 200px;
}

.show-details {
  display: flex;
  gap: 20px;
  flex-direction: row;
  margin-bottom: 15px;
}

@media screen and (max-width: 992px) {
  .show-details {
    flex-direction: column;
    gap: 15px;
  }

  .img {
    width: auto;
  }

}
</style>
