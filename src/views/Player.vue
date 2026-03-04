<script setup>
import { useRoute, useRouter } from 'vue-router'
import { movies } from '../data/movies'
import { computed, onMounted, ref } from 'vue'

const route = useRoute()
const router = useRouter()
const movieId = parseInt(route.params.id)
const videoPlayer = ref(null)

const movie = computed(() => movies.find(m => m.id === movieId))

const saveProgress = () => {
    if (videoPlayer.value) {
        localStorage.setItem(`vplay_pos_${movieId}`, videoPlayer.value.currentTime)
    }
}

const loadProgress = () => {
    const saved = localStorage.getItem(`vplay_pos_${movieId}`)
    if (saved && videoPlayer.value) {
        videoPlayer.value.currentTime = parseFloat(saved)
    }
}

onMounted(() => {
    if (videoPlayer.value) {
        loadProgress()
    }
})

const goBack = () => {
  saveProgress()
  router.push('/')
}
</script>

<template>
  <div v-if="movie" class="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      <div class="w-full h-full relative group">
          <video 
            ref="videoPlayer"
            :src="movie.videoUrl" 
            class="w-full h-full object-contain"
            controls
            autoplay
            @timeupdate="saveProgress"
          ></video>

          <button @click="goBack" class="absolute top-6 left-6 z-20 px-5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/10 flex items-center gap-2 text-white text-sm font-medium transition-all transform hover:scale-105 active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Retour
          </button>
          
          <div v-if="!movie.videoUrl" class="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 bg-slate-900/90 backdrop-blur-sm">
              <div class="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                  <span class="text-white text-3xl ml-1">▶</span>
              </div>
              <div class="space-y-2 px-6">
                  <h2 class="text-3xl font-bold text-white tracking-tight">{{ movie.title }}</h2>
                  <p class="text-slate-400 max-w-md mx-auto">Vidéo non disponible</p>
              </div>
          </div>
      </div>
  </div>
  <div v-else class="flex flex-col items-center justify-center py-20 text-slate-500">
    <p>Film non trouvé</p>
    <router-link to="/" class="mt-4 text-indigo-500 underline text-sm">Retour à l'accueil</router-link>
  </div>
</template>
