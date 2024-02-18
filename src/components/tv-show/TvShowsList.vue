<template>
  <div class="container">
    <h1 data-test="show">Shows</h1>
    <div v-for="({ shows, genre }, i) in showsByGenre" :key="i">
      <h3>{{ genre }}</h3>

      <div class="cards-layout">
        <div v-for="(show) in shows" :key="show.id">
          <router-link
            :to="{ name: 'ShowDetailsPage', params: { id: show.id } }"
          >
            <div class="card">
              <img :src="(show.image.medium)" class="card-text" />
              <div class="card-body">
                <h2 class="card-title">
                  {{ show.name }}
                </h2>
                <p>{{ show.rating.average }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from "axios"
import { Show, AggregateTvShow } from '@/types/tv-shows'
import { showUrl } from '../../utils/apiData'

export default defineComponent({
  data() {
    return {
      showData: [] as Show[],
      showsByGenre: [] as AggregateTvShow[]
    }
  },
  async mounted() {
    await this.getTvShowList()
  },

  methods: {
    async getTvShowList() {
      try {
        const result = await axios.get(showUrl)
        const res = (await result.data) as Show[]
        this.showData = res
        let records = this.getShows(this.showData) as AggregateTvShow[]
        this.showsByGenre = records
      }
      catch (error) {
        console.log('error: ', error)
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getShows(shows: Show[]): any[] {
      const showsByGenre = shows
        .flatMap(s => s.genres.map(g => ({ show: s, genre: g })))
        .reduce((acc, { show, genre }) => {
          if (!acc[genre]) {
            acc[genre] = { genre, shows: [] };
          }
          acc[genre].shows.push(show);
          return acc;
        }, {} as Record<string, { genre: string; shows: Show[] }>);

      return Object.values(showsByGenre).map(({ genre, shows }) => ({
        genre: genre,
        shows: shows.sort((a, b) => b.rating.average - a.rating.average)
      }));
    }
  }
})
</script>

<style scoped>
.cards-layout {
  display: flex;
  gap: 15px;
  flex-direction: row;
  overflow: scroll;
}

h2 {
  font-size: large;
}
</style>
