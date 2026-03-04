import { ref, computed } from 'vue'
import { movies } from '../data/movies'

export const throttle = (callback, limit) => {
    let waiting = false
    return function (...args) {
        if (!waiting) {
            callback.apply(this, args)
            waiting = true
            setTimeout(() => {
                waiting = false
            }, limit)
        }
    }
}

const searchQuery = ref('')
const throttledSearchQuery = ref('')

const updateSearchThrottled = throttle((val) => {
    throttledSearchQuery.value = val
}, 300)

export function useSearch() {
    const setSearchQuery = (query) => {
        searchQuery.value = query
        updateSearchThrottled(query)
    }

    const filteredMovies = computed(() => {
        const query = throttledSearchQuery.value.toLowerCase().trim()
        if (!query) return movies

        return movies.filter(movie =>
            movie.title.toLowerCase().includes(query) ||
            movie.genre.toLowerCase().includes(query) ||
            movie.description.toLowerCase().includes(query)
        )
    })

    return {
        searchQuery,
        setSearchQuery,
        filteredMovies
    }
}
