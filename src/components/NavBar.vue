<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <div class="container-fluid navbar-items">
        <router-link class="navbar-brand" to="/">
          <img
            src="https://static.tvmaze.com/images/tvm-header-logo.png"
            alt="tvmaze"
            class="logo"
          />
        </router-link>
        <div>
          <search-comp></search-comp>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchComp from './tv-show/SearchComp.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: { SearchComp }
})
</script>

<style scoped>
.navbar-items {
  display: flex;
  justify-content: space-between;
}

.logo {
  width: 100%;
}
</style>
