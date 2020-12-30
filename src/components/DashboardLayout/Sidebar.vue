<template>
  <div class="sidebar" data-color="black" data-active-color="warning">
    <Logo></Logo>
    <Menu></Menu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './Logo.vue'
import Menu from './Menu.vue'

export default defineComponent({
  components: {
    Logo,
    Menu,
  },
})
</script>
