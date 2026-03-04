<script setup>
import { useTheme } from '../composables/useTheme'
import { useSearch } from '../composables/useSearch'

const { theme } = useTheme()
const { searchQuery, setSearchQuery } = useSearch()

const toggleTheme = () => {
  theme.value = theme.value === 'aurum' ? 'dark' : 'aurum'
}

const onSearchInput = (e) => {
  setSearchQuery(e.target.value)
}
</script>

<template>
  <header class="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
    <router-link to="/" class="text-3xl font-black tracking-tighter hover:text-indigo-500 transition-all uppercase italic text-theme-text">
      Nautiflux
    </router-link>

    <div class="relative w-full max-w-2xl group order-3 lg:order-2">
      <span class="absolute left-4 top-1/2 -translate-y-1/2 text-theme-text/40 group-focus-within:text-indigo-500 transition-colors text-lg">
        🔍
      </span>
      <input 
        type="text" 
        :value="searchQuery"
        @input="onSearchInput"
        placeholder="Rechercher un film, un genre, une année..." 
        class="w-full bg-theme-surface/50 border border-theme-border/50 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-8 focus:ring-indigo-500/5 transition-all placeholder:text-theme-text/30 backdrop-blur-sm text-theme-text"
      >
    </div>

    <div class="flex items-center gap-4 order-2 lg:order-3">
      <button 
        @click="toggleTheme"
        class="p-2.5 rounded-xl bg-theme-surface/50 border border-theme-border/50 hover:border-indigo-500/50 transition-colors backdrop-blur-sm" 
        title="Changer de thème"
      >
        <span v-if="theme === 'aurum'">☀️</span>
        <span v-else>🌙</span>
      </button>
      <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/10 flex items-center justify-center shadow-lg shadow-indigo-500/20 cursor-pointer hover:scale-105 transition-transform">
        <span class="text-[10px] font-bold text-white uppercase">Me</span>
      </div>
    </div>
  </header>
</template>
