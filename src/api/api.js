import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2FkNzdlMjllYmRhMGQwMzllZWU4OTRmMDhmYTA4YSIsIm5iZiI6MTcyMTY1ODIzMy4xNzU3NDIsInN1YiI6IjY2OWU0Y2RmNTMwMWQxN2Y4ZGRkMjkwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YQeL9HL9E5cwaEkDOb3kH6s3mz3o4NzxrEcFnTiHSVs';

const options = {
    headers: {
        Authorization:
            `Bearer ${API_KEY}`,
    },
};

export const getTrending = async () => {
    const response = await axios.get('/trending/movie/day', options);

    return response.data;
};

export const searchMovies = async (query) => {
    const params = {
        query,
        include_adult: false,
        language: 'en-US',
        page: 1,
    };
    const response = await axios.get('/search/movie', { ...options, params });
    return response.data.results;
};
