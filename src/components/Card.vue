<template>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded h-full opacity-1 transition-opacity duration-500 ease-in"> 

    <div class="p-4 flex-auto">
      <div class="relative max-h-[700px]" :class="height" >
        <slot></slot>
      </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps} from 'vue'
defineProps({
    height: String,
});
</script>