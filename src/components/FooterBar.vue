<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Level from '@/components/Level.vue'

const store = useStore()

const year = computed(() => new Date().getFullYear())

const isFooterBarVisible = computed(() => !store.state.isFullScreen)
</script>

<template>
  <footer
    v-show="isFooterBarVisible"
    class="bg-white py-2 px-6 dark:bg-[#121212]"
  >
    <level>
      <div class="text-center md:float-right">
        <span> {{ year }}, &copy; The billBoard all right reserved </span>
      </div>
    </level>
  </footer>
</template>
