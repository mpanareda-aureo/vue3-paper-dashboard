<template>
  <card class="card-stats">
    <div class="row">
      <div class="col-5 col-md-4" v-if="$slots.icon">
        <slot name="icon"></slot>
      </div>
      <div class="col-7 col-md-8">
        <slot></slot>
      </div>
    </div>
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