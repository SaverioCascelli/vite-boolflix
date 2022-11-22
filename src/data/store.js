import { reactive } from 'vue';

export const store = reactive({
    baseApiUrl: 'https://api.themoviedb.org/3/search/',
    apiKey: 'fbc97a79cd66b358ed949135e2659975',
    apiMovieUrl: 'https://api.themoviedb.org/3/search/movie?api_key=fbc97a79cd66b358ed949135e2659975',
    apiArr: [],
    apiTVUrl: 'https://api.themoviedb.org/3/search/tv?api_key=fbc97a79cd66b358ed949135e2659975',
});