export const sortBy = [
  { name: 'High to Low Popularity', value: 'popularity.desc' },
  { name: 'Low to High Popularity', value: 'popularity.asc' },
  { name: 'Latest Release', value: 'release_date.desc' },
  { name: 'Oldest Release', value: 'release_date.asc' },
  { name: 'High to Low Ratings', value: 'vote_average.desc' },
  { name: 'Low to High Ratings', value: 'vote_average.asc' },
];

export const releaseYear = (range) => {
  let years = [];
  for (let i = 1950; i <= new Date().getFullYear(); i += range) {
    years.push(`${i}`);
  }
  return years;
};
