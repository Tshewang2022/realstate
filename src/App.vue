<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="bg-green-400">
    <!-- the wrong method of routing -->
    <Navbar />
    <!-- <RouterView /> -->
  </div>
</template>
