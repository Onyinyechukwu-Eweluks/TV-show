<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="input-group my-3">
      <input
        type="text"
        class="form-control"
        placeholder="Enter a Tv show"
        aria-label="Tv show"
        aria-describedby="button-addon2"
        v-model.lazy="searchInput"
      />
      <router-link :to="{ name: 'SearchPage', params: { tvShow: `/search/shows?q=${searchInput}` } }">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" data-test="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
            />
          </svg>
        </button>
      </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { SearchedTvShow } from '@/types/tv-shows';


export default defineComponent({
  name: 'SearchComp',
  components: {
  },
  data() {
    return {
      searchInput: '',
    }
  },

  mounted() {
    // if (this.searchInput === '') {
    //   window.location.reload()
    // }
  },

  // methods: {
  //   handleClick() {
  //     this.name = this.searchInput
  //   },

  // }
})
</script>

<style scoped>
.input-group {
  width: 500px;
}

@media screen and (max-width: 992px) {
  .input-group {
    width: 100%;
  }
}
</style>
