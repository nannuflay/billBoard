<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { mdiMenu } from '@mdi/js'
import NavBarItem from '@/components/NavBarItem.vue'
import Icon from '@/components/Icon.vue'
import UserAvatar from './UserAvatar.vue'

defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})

const store = useStore()

const userName = computed(() => store.state.userName)

const isFullScreen = computed(() => store.state.isFullScreen)

const isAsideMobileExpanded = computed(() => store.state.isAsideMobileExpanded)

const isAsideLgActive = computed(() => store.state.isAsideLgActive)

const asideLgClose = () => {
  store.dispatch('asideLgToggle', false)
}
</script>

<template>
  <aside
    v-show="!isFullScreen"
    id="aside"
    class="w-64 fixed top-0 z-40 h-screen bg-gray-100 transition-position lg:left-0 dark:bg-[#0b090a]"
    :class="[ isAsideMobileExpanded ? 'left-0' : '-left-60', isAsideLgActive ? 'block' : 'lg:hidden xl:block' ]"
  >
    <div class="flex flex-row w-full  dark:text-white flex-1 h-14 items-center border-b-2 dark:border-gray-600">
      <nav-bar-item
        type="hidden lg:flex xl:hidden"
        active-color="text-white"
        active
        @click="asideLgClose"
      >
        <icon
          :path="mdiMenu"
          class="cursor-pointer"
          size="24"
        />
      </nav-bar-item>
      <div class="flex-1 px-3 text-center">
        <span class="font-bold text-lg">The billBoard</span> <b class="font-black">500</b>
      </div>

    </div>
    <div class=" mx-4 px-4 py-2 rounded-2xl mt-4 bg-slate-300 dark:bg-zinc-900">
      <div class="flex flex-col align-middle text-center">
      <user-avatar class="lg:mx-12" />
      <span class="font-extrabold">{{userName}}</span>
      <p class="font-light text-sm">Artist</p>

      </div>
    </div>
  </aside>

</template>
