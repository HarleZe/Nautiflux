<script setup>
import { computed } from 'vue'

const props = defineProps({
  movies: {
    type: Array,
    required: true
  }
})

const continuerMovies = computed(() => props.movies.filter(m => m.type === 'continuer'))
</script>

<template>
  <section class="space-y-3">
      <div class="flex items-center justify-between">
          <h2 class="text-xs font-bold text-slate-500 uppercase tracking-wider">Continuer</h2>
          <a href="#" class="text-indigo-400 text-xs">Tout voir</a>
      </div>
      <div class="flex gap-6 overflow-x-auto pb-8 scroll-hide -mx-2 px-2">
          <router-link v-for="movie in continuerMovies" :key="movie.id" 
               :to="`/player/${movie.id}`"
               class="flex-none w-72 md:w-80 lg:w-96 group cursor-pointer group/card">
              <div class="relative aspect-video rounded-2xl overflow-hidden bg-theme-surface border border-theme-border/50 group-hover:border-indigo-500/50 transition-all duration-500 shadow-xl">
                  <img :src="movie.image" :alt="movie.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
                  <div class="absolute inset-0 bg-gradient-to-t from-theme-bg via-theme-bg/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                      <div class="bg-indigo-500 text-white p-4 rounded-full shadow-2xl shadow-indigo-500/50 transform group-hover:rotate-[360deg] transition-all duration-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      </div>
                  </div>

                  <div class="absolute bottom-0 left-0 right-0 h-1.5 bg-theme-text/10 backdrop-blur-md">
                      <div 
                        class="h-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,1)]" 
                        :style="{ width: movie.progress + '%' }"
                      ></div>
                  </div>
              </div>
              <div class="mt-4 flex justify-between items-start">
                  <div class="space-y-1">
                    <h3 class="text-theme-text text-base font-bold truncate group-hover:text-indigo-400 transition-colors">{{ movie.title }}</h3>
                    <div class="flex items-center gap-2">
                      <p class="text-theme-text/60 text-xs font-medium uppercase tracking-wider">{{ movie.genre }}</p>
                      <span class="w-1 h-1 rounded-full bg-theme-border"></span>
                      <p class="text-theme-text/40 text-xs">{{ movie.duration }}</p>
                    </div>
                  </div>
              </div>
          </router-link>
      </div>
  </section>
</template>

<style scoped>
.scroll-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scroll-hide::-webkit-scrollbar {
  display: none;
}
</style>
