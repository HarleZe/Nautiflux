<script setup>
import { computed } from 'vue'

const props = defineProps({
  movies: {
    type: Array,
    required: true
  }
})

const commencerMovies = computed(() => props.movies.filter(m => m.type === 'commencer'))
</script>

<template>
  <section class="space-y-4">
      <div class="flex items-center justify-between">
          <h2 class="text-xs font-bold text-slate-500 uppercase tracking-wider">Commencer</h2>
          <a href="#" class="text-indigo-400 text-xs">Parcourir</a>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <router-link v-for="movie in commencerMovies" :key="movie.id" 
               :to="`/player/${movie.id}`"
               class="group cursor-pointer">
              <div class="aspect-[2/3] rounded-2xl overflow-hidden bg-theme-surface border border-theme-border/50 group-hover:border-indigo-500/50 transition-all duration-500 relative shadow-lg">
                  <img :src="movie.image" :alt="movie.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0">
                  <div class="absolute inset-0 bg-gradient-to-t from-theme-bg/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div class="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                       <div class="w-full py-2.5 bg-theme-text text-theme-bg rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl text-center">
                           Détails
                       </div>
                  </div>
              </div>
              <div class="mt-3 px-1">
                  <h3 class="text-theme-text text-sm font-bold truncate group-hover:text-indigo-400 transition-colors">{{ movie.title }}</h3>
                  <div class="flex items-center gap-2 mt-1">
                      <span class="text-[10px] text-theme-text/40 font-bold tracking-tighter">{{ movie.year }}</span>
                      <span class="w-1 h-1 rounded-full bg-theme-border"></span>
                      <span class="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Nouveau</span>
                  </div>
              </div>
          </router-link>
      </div>
  </section>
</template>
