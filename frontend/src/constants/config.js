export const config = {
  API_BASE_URL: 'https://api.themoviedb.org',
  API_KEY: process.env.REACT_APP_API_KEY,
  API_IMAGE_URL: {
    extra_small: 'https://image.tmdb.org/t/p/w45',
    small_2: 'https://image.tmdb.org/t/p/w154',
    small: 'https://image.tmdb.org/t/p/w185',
    medium: 'https://image.tmdb.org/t/p/w300',
    large: 'https://image.tmdb.org/t/p/w500',
    original: 'https://image.tmdb.org/t/p/original',
  },
  API_LANGUAGES: [
    {
      id: 1,
      title: 'ru',
      code: 'ru-RU',
    },
    {
      id: 2,
      title: 'en',
      code: 'en-US',
    },
  ],
  API_TRAILER: 'https://www.youtube.com/embed/',
};
