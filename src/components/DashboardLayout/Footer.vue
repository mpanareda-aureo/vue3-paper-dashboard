<template>
  <footer class="footer footer-black footer-white">
    <div class="container-fluid">
      <div class="row">
        <div class="credits ml-auto">
          <span class="copyright"> © {{ year }} Dashboard </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const year = ref(new Date().getFullYear())

    // onMounted(() => {
    //   console.log("window height", window.innerHeight);
    //   console.log("content height", document.getElementsByClassName("content")[0].clientHeight);
    //   window.addEventListener('resize', onResize);

    // })

    // function onResize() {
    //   console.log("resize");
    // }

    return {
      year,
    }
  },
})
</script>
