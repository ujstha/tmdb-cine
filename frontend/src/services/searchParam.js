import { goToUrl } from './goToUrl';

const { search } = window.location;

export const searchAddr = new URLSearchParams(search);

export const searchParam = (param) => searchAddr.get(param);

export const filterURL = (filter, value) =>
  goToUrl(
    `${
      search !== ''
        ? searchAddr.has(filter)
          ? searchAddr.get(filter) === value
            ? ''
            : search.replace(searchAddr.get(filter), value)
          : `${search}&${filter}=${value}`
        : searchAddr.has(filter)
        ? `&${filter}=${value}`
        : `?${filter}=${value}`
    }`
  );

export const filterUrlGenre = (filter, value) =>
  goToUrl(
    `${
      search !== ''
        ? searchAddr.has(filter)
          ? searchAddr.get(filter).includes(value)
            ? search.replace(
                searchAddr.get(filter),
                searchAddr.get(filter).replace(`,${value}`, '')
              )
            : search.replace(
                searchAddr.get(filter),
                searchAddr.get(filter).concat(`,${value}`)
              )
          : `${search}&${filter}=${value}`
        : searchAddr.has(filter)
        ? `&${filter}=${value}`
        : `?${filter}=${value}`
    }`
  );
