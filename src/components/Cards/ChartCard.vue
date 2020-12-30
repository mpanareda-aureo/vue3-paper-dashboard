<template>
  <card class="card-chart">
    <template #header>
      <slot name="header"></slot>
    </template>
    <slot></slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './Card.vue'
export default defineComponent({
  components: {
    Card,
  },
  props: {
    class: String,
  },
  setup() {},
})
</script>

<style>
</style>