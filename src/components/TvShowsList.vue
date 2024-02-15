<template>
  <div>
    <h1>Hello TV</h1>
    <ul v-for="(shows, index) in filteredShowData" :key="index">
      <li>{{ shows.name }}</li>
    </ul>
    <button @click="filterShowList('Comedy')">click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from "axios"
import { Root2 } from '@/types/tv-shows'

export default defineComponent({
  name: "TvShowsList",
  components: {},
  data () {
    return {
      url: "https://api.tvmaze.com/shows",
      filteredShowData: [] as Root2[],
      genres: [] as string[]
    }
  },
  mounted() {

    this.getTvShowList()
    // console.log("apiData: ", this.filterShowList('drama'))
  },
  computed: {

  },
  methods: {
    async getTvShowList () {
      try {
        const result = await axios.get(this.url)
        const res = (await result.data) as Root2[]
        this.filteredShowData = res
        this.getGenres(this.filteredShowData)
        return res
        // const res = this.getShows(this.apiData) as Root2[]
        // console.log("grouped as: ",res)
       }
       catch (error) {
        console.log('error: ', error)
      }

    },
   async filterShowList (g: string) {
      const rawData = await this.getTvShowList()
      const filteredData = rawData?.filter(data => data.genres.includes(g))
      this.filteredShowData =  filteredData as Root2[]
    },

//   showByGenres(shows: Root2[], genres: string[]) : Root2[] {
//   return shows.filter((m) => {
//     return genres.some((g) => m.genres.includes(g));
//   });
// },

 getGenres(shows: Root2[]){
  let arr = []
  for (const show of shows) {
    var genre = show.genres[0];
    arr.push(genre)
    console.log('genre: ', arr)

  }
}
  }
})
</script>

<style scoped></style>
