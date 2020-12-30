<template>
  <component :is="layout"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DashboardLayout from './layouts/Dashboard.vue'
import useLayout from './use/layout'

export default defineComponent({
  components: {
    DashboardLayout,
  },

  setup() {
    const { layout } = useLayout()
    return {
      layout,
    }
  },
})
</script>
