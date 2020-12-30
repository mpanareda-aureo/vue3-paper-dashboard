<template>
  <div class="sidebar-wrapper">
    <ul class="nav">
      <li
        v-for="item in menu_items"
        :key="item.page"
        :class="$route.name === item.page ? 'active' : ''"
      >
        <router-link :to="{ name: item.page }">
          <i :class="getMenuIconClass(item.icon)"></i>
          <p>{{ item.text }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useMenu from '../../use/menu'

export default defineComponent({
  setup() {
    const { menu_items, getMenuIconClass } = useMenu()

    return {
      menu_items,
      getMenuIconClass,
    }
  },
})
</script>
