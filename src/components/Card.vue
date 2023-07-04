<template>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded h-full opacity-1 transition-opacity duration-500 ease-in"> 
        <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <!-- <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
            Analysis
          </h6> -->
          <h2 class="text-blueGray-700 text-xl font-semibold text-black">
            {{ title }}
          </h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <div class="relative h-[700px]">
        <slot></slot>
      </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps} from 'vue'
defineProps({
    title: String,
});
</script>