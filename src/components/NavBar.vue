<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img
            src="https://static.tvmaze.com/images/tvm-header-logo.png"
            alt="Bootstrap"
          />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {};
  },
  components: {}
})
</script>

<style scoped></style>
