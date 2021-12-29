<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { mdiCheckDecagram } from '@mdi/js'
import Level from '@/components/Level.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import CardComponent from '@/components/CardComponent.vue'
import Pill from '@/components/Pill.vue'

const store = useStore()

const userName = computed(() => store.state.userName)

</script>

<template>
  <card-component rounded="">
    <level type="justify-around lg:justify-center">
      <user-avatar class="lg:mx-12" />
      <div class="space-y-3 text-center md:text-left lg:mx-12">
        <h1 class="text-2xl">
          Howdy, <b>{{ userName }}</b
          >!
        </h1>
        <div class="flex align-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              clip-rule="evenodd"
            />
          </svg>
          <span>10 Gorget Court, Sparks,nv, 89441  United States</span>
        </div>
        <div class="flex justify-center md:block">
          <pill text="Verified" type="info" :icon="mdiCheckDecagram" />
        </div>
      </div>
    </level>
  </card-component>
</template>
