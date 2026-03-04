<script setup>
import Nouveautes from '../components/Nouveautes.vue'
import Continuer from '../components/Continuer.vue'
import Commencer from '../components/Commencer.vue'
import { useSearch } from '../composables/useSearch'

const { filteredMovies, searchQuery } = useSearch()
</script>

<template>
  <div class="space-y-8 min-h-[60vh]">
    <template v-if="filteredMovies.length > 0">
      <Nouveautes :movies="filteredMovies" />
      <Continuer :movies="filteredMovies" />
      <Commencer :movies="filteredMovies" />
    </template>
    
    <div v-else class="flex flex-col items-center justify-center py-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div class="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-4 border border-slate-700">
        🔎
      </div>
      <h3 class="text-xl font-bold text-white mb-2">Aucun résultat pour "{{ searchQuery }}"</h3>
      <p class="text-slate-500 max-w-xs mx-auto text-sm">Essayez de rechercher un autre titre ou un autre genre.</p>
    </div>
  </div>
</template>
