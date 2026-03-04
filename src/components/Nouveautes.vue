<script setup>
import { computed } from 'vue'

const props = defineProps({
  movies: {
    type: Array,
    required: true
  }
})

const heroMovies = computed(() => props.movies.filter(m => m.isHero))
</script>

<template>
  <section class="relative">
      <div v-for="movie in heroMovies" :key="movie.id" class="hero-banner min-h-[400px] lg:min-h-[500px] overflow-hidden group mb-4 relative rounded-3xl border border-theme-border/20 shadow-2xl bg-theme-surface">
          <div class="absolute inset-0 z-0">
            <img :src="movie.image" 
                 class="w-full h-full object-cover opacity-20 blur-3xl scale-125 transition-transform duration-1000 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-r from-theme-bg via-theme-bg/40 to-transparent"></div>
          </div>

          <div class="relative z-10 flex items-center w-full h-full px-6 sm:px-12 md:px-16 gap-8 lg:gap-16 py-12">
    
              <div class="h-64 lg:h-80 aspect-[2/3] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden transform group-hover:scale-105 transition-all duration-700 hidden sm:block">
                <img :src="movie.image" :alt="movie.title" class="w-full h-full object-cover">
              </div>

              <div class="flex flex-col items-start gap-6 lg:gap-8 flex-1 max-w-2xl">
                  <div class="space-y-4 text-left">
                    <span class="px-3 py-1 rounded-full bg-indigo-500 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-indigo-500/20">À l'affiche</span>
                    <h3 class="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-theme-text drop-shadow-2xl leading-[0.9] lg:leading-[0.85]">
                      {{ movie.title }}
                    </h3>
                    <p class="text-theme-text/60 text-sm md:text-base lg:text-lg line-clamp-3 max-w-lg">
                      {{ movie.description }}
                    </p>
                  </div>
                  <router-link :to="`/player/${movie.id}`" class="play-button px-8 py-4 lg:px-10 lg:py-5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-2xl shadow-2xl shadow-indigo-500/40 flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 group/btn">
                    <span class="text-lg lg:text-xl group-hover/btn:rotate-12 transition-transform">▶</span> 
                    <span class="font-bold uppercase tracking-widest text-sm lg:text-base">Regarder maintenant</span>
                  </router-link>
              </div>
          </div>

          <div class="absolute top-6 right-6 px-4 py-1 rounded-full bg-theme-surface/50 backdrop-blur-md border border-theme-border/20 text-theme-text text-[10px] font-black tracking-widest uppercase z-20">
              New Content
          </div>
      </div>
  </section>
</template>
