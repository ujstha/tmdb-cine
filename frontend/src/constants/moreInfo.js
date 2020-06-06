import { openUrlInNewTab } from '../services/goToUrl';
import { GetYear } from '../services/FormattedData';
import { Modal } from 'antd';

export const moreInfo = (movieTv, saveFavorite, watch) => [
  {
    urlType: 'both',
    title: 'Homepage',
    icon: 'fa fa-globe',
    onClick: () =>
      openUrlInNewTab(
        movieTv.homepage ||
          `https://www.google.com/search?q=${movieTv.title} ${GetYear(movieTv)}`
      ),
  },
  {
    urlType: 'movie',
    title: 'Watch this movie',
    icon: 'fa fa-play',
    onClick: watch,
  },
  {
    urlType: 'both',
    title: 'Add to favorite',
    icon: 'fa fa-heart',
    onClick:
      localStorage.authToken && localStorage.authToken !== ''
        ? saveFavorite
        : () => {
            Modal.info({ content: 'Please login to save to favorite' });
          },
  },
];
