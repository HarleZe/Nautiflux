<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div class="flex justify-center min-h-screen bg-theme-bg text-theme-text transition-colors duration-500">
    <main class="w-full max-w-screen-xl min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 space-y-12">
      <Header />
      <router-view></router-view>
      
      <footer class="pt-12 pb-8 text-center text-[10px] text-theme-text/40 border-t border-theme-border/20 uppercase tracking-widest">
          <p>Nautiflux 2026 • L.C & C.G</p>
      </footer>
    </main>
  </div>
</template>
