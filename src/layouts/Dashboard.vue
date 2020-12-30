<template>
  <div class="wrapper">
    <Sidebar></Sidebar>
    <div class="main-panel">
      <Navbar></Navbar>
      <Content></Content>
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '../components/DashboardLayout/Sidebar.vue'
import Navbar from '../components/DashboardLayout/Navbar.vue'
import Content from '../components/DashboardLayout/Content.vue'
import Footer from '../components/DashboardLayout/Footer.vue'

export default defineComponent({
  components: {
    Sidebar,
    Navbar,
    Content,
    Footer,
  },

  setup() {},
})
</script>
