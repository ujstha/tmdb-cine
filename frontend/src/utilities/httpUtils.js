import {
  httpBaseUtil,
  httpUserBaseUtil,
  httpMediaBaseUtil,
} from './httpBaseUtil';
import { config } from '../constants/config';

const lang = localStorage.language;

httpBaseUtil.interceptors.request.use((conf) => {
  conf.params.api_key = config.API_KEY;
  return conf;
});

export const fetch = (endpoint) => {
  return httpBaseUtil.get(`/3/${endpoint}`);
};

export const fetchByTrending = () => {
  return httpBaseUtil.get(`/3/trending/movie/day`, {
    params: {
      include_image_language: 'null',
      language: lang,
    },
  });
};

export const fetchById = (type, id) => {
  return httpBaseUtil.get(`/3/${type + '/' + id}`, {
    params: {
      append_to_response:
        type === 'person'
          ? 'images,external_ids,combined_credits,tagged_images'
          : 'videos,credits,similar,recommendations,images,reviews,keywords,external_ids',
      include_image_language: 'null',
      language: lang,
    },
  });
};

export const fetchGenre = (type) => {
  return httpBaseUtil.get(`/3/genre/${type}/list`, {
    params: {
      language: lang,
    },
  });
};

export const fetchByCategory = (type, category, page) => {
  return httpBaseUtil.get(`/3/${type + '/' + category}`, {
    params: {
      page: page,
      language: lang,
    },
  });
};

export const fetchByGenre = (type, genre, page) => {
  return httpBaseUtil.get(`/3/discover/${type}`, {
    params: {
      with_genres: genre,
      page: page,
      language: lang,
    },
  });
};

export const fetchByDiscover = (
  sort,
  releaseGte,
  primaryYear,
  genre,
  keywords,
  page
) => {
  return httpBaseUtil.get(`/3/discover/movie`, {
    params: {
      with_genres: genre,
      sort_by: sort,
      primary_release_year: primaryYear,
      'primary_release_date.gte': releaseGte,
      with_keywords: keywords,
      page: page,
      language: lang,
    },
  });
};

export const fetchByDiscoverTv = (
  sort,
  releaseGte,
  primaryYear,
  genre,
  keywords,
  page
) => {
  return httpBaseUtil.get(`/3/discover/tv`, {
    params: {
      with_genres: genre,
      sort_by: sort,
      first_air_date_year: primaryYear,
      'first_air_date.gte': releaseGte,
      with_keywords: keywords,
      page: page,
      language: lang,
    },
  });
};

export const fetchSearch = (type, query, page) => {
  return httpBaseUtil.get(`/3/search/${type}`, {
    params: {
      query: query,
      page: page,
      language: lang,
    },
  });
};

export const fetchBySeasonNumber = (tvId, seasonNumber) => {
  return httpBaseUtil.get(`/3/tv/${tvId + '/season/' + seasonNumber}`, {
    params: {
      append_to_response: 'videos,credits',
      language: lang,
    },
  });
};

export const registerUser = (data) => {
  return httpUserBaseUtil.post('/register', data);
};

export const loginUser = (data) => {
  return httpUserBaseUtil.post('/login', data);
};

export const addToFavorite = (data) => {
  return httpMediaBaseUtil.post('/media', data);
};

export const fetchFavorite = () => {
  return httpMediaBaseUtil.get('/media');
};

export const removeFavorite = (id) => {
  return httpMediaBaseUtil.delete(`/media/delete/${id}`);
};
