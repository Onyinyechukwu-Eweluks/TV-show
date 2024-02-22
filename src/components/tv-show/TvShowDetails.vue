<template>
  <div class="container mt-3">
    <h1>Show Details</h1>
    <div class="show-details">
      <img :src="(showObj.image?.original)" class="img" loading="lazy" />
      <div class="show-details-text">
        <h2 class="show-details-title">{{ showObj.name }}</h2>
        <p class="show-details-paragraph" v-html="showObj.summary"></p>
        <p class="show-details-paragraph">
          Rating: {{ showObj.rating?.average }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { showUrl } from '../../utils/apiData'
import { Show } from '@/types/tv-shows';
import axios from 'axios';

export default defineComponent({
  name: 'TvShowDetails',
  props: {
    searchId: {
      type: Number
    }
  },
  data() {
    return {
      showObj: {} as Show
    }
  },
  async mounted() {
    await this.getShowDetails()
  },
  methods: {
    async getShowDetails() {
      try {
        const result = await axios.get(showUrl + `/${this.searchId}`)
        const data = await result.data
        this.showObj = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>

<style scoped>
.img {
  width: 20%;
}

.show-details {
  display: flex;
  gap: 20px;
  flex-direction: row;
}

@media screen and (max-width: 992px) {
  .show-details {
    flex-direction: column;
  }

  .img {
    width: auto;
  }
}
</style>
