<template>
  <div class="card" :class="class">
    <div class="card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="card-body" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    class: String,
  },
  setup() {},
})
</script>

<style>
</style>