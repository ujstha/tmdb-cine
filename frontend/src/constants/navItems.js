export const navs = [
  {
    type: 'both',
    path: '/',
    title: 'Home',
    icon: 'fa fa-home',
    matIcon: 'home',
  },
  {
    type: 'both',
    path: '/movies',
    title: 'Movies',
    icon: 'fa fa-film',
    matIcon: 'movie',
  },
  {
    type: 'both',
    path: '/tvs',
    title: 'TV Shows',
    icon: 'fa fa-television',
    matIcon: 'tv',
  },
  {
    type: 'both',
    path: '/lists/genres',
    title: 'Browse by genre',
    icon: 'fa fa-th',
    matIcon: 'local_movies',
  },
  {
    type: 'loggedOut',
    path: '/auth/login',
    title: 'Login',
    icon: 'fa fa-sign-in',
    matIcon: 'logout',
  },
  {
    type: 'loggedIn',
    path: '/user/dashboard',
    title: 'Dashboard',
    icon: 'fa fa-th-large',
    matIcon: 'dashboard',
  },
];
