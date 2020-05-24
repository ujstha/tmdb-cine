import { GetRteDate } from './FormattedData';

export const goToUrl = (url) => {
  document.location.href = url;
};

export const goToMedia = (url) => {
  goToUrl(`/${url.media_type}/${url.id}/${url.title || url.original_name}`);
};

export const hashUrl = (url) => {
  window.scrollTo(0, document.getElementById(url).offsetTop - 75);
};

export const moveToTop = () => {
  window.scrollTo(0, 0);
};

export const goToRte = (urlType, rteDate) => {
  goToUrl(`/${urlType}s/?gte_release_date=${GetRteDate(rteDate)}`);
};

export const openUrlInNewTab = (url) => {
  window.open(url, '_blank');
};

export const openTvSeason = (tv, withSpecial, season) => {
  goToUrl(
    `/tv/${tv.id}/${tv.original_name}/with_imdb_id=${tv.external_ids.imdb_id}&all_seasons=${tv.seasons.length}&with_special=${withSpecial}/season/${season.season_number}`
  );
};
export const nextSeason = (
  tvId,
  title,
  imdbId,
  totalSeason,
  tvSeason,
  withSpecial,
  withSpecialSeason
) => {
  const currSeason = tvSeason.season_number;
  goToUrl(
    `/tv/${tvId}/${title}/with_imdb_id=${imdbId}&all_seasons=${totalSeason}&with_special=${withSpecial}/season/${
      withSpecialSeason
        ? currSeason + 1 < totalSeason
          ? currSeason + 1
          : currSeason
        : currSeason >= totalSeason
        ? currSeason
        : currSeason + 1
    }`
  );
};

export const prevSeason = (
  tvId,
  title,
  imdbId,
  totalSeason,
  tvSeason,
  withSpecial,
  withSpecialSeason
) => {
  const currSeason = tvSeason.season_number;
  goToUrl(
    `/tv/${tvId}/${title}/with_imdb_id=${imdbId}&all_seasons=${totalSeason}&with_special=${withSpecial}/season/${
      withSpecialSeason
        ? currSeason > 0
          ? currSeason - 1
          : currSeason
        : currSeason > 1
        ? currSeason - 1
        : currSeason
    }`
  );
};

export const imdbUrlInNewTab = (url) => {
  openUrlInNewTab(`https://www.imdb.com/title/${url.external_ids.imdb_id}`);
};

export const imdbPerson = (url) => {
  openUrlInNewTab(`https://www.imdb.com/name/${url.external_ids.imdb_id}`);
};

export const instaPerson = (url) => {
  openUrlInNewTab(`https://www.instagram.com/${url.external_ids.instagram_id}`);
};

export const twitterPerson = (url) => {
  openUrlInNewTab(`https://twitter.com/${url.external_ids.twitter_id}`);
};

export const fbPerson = (url) => {
  openUrlInNewTab(`https://www.facebook.com/${url.external_ids.facebook_id}`);
};

// export const watchMovie = (url) => {
//   openUrlInNewTab(`https://api.123moviess.cc/v/${url.external_ids.imdb_id}`);
// };

export const watchMovie = (url) => {
  openUrlInNewTab(`https://v2.vidsrc.me/embed/${url.external_ids.imdb_id}/`);
};

export const watchTvEpisode = (imdbId, season, episode) => {
  openUrlInNewTab(
    `https://vidsrc.me/embed/${imdbId}/${season.season_number}-${episode.episode_number}/`
  );
};
