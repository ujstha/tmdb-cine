export const navs = [
  {
    type: 'both',
    path: '/',
    title: 'Home',
    icon: 'fa fa-home',
  },
  {
    type: 'both',
    path: '/movies',
    title: 'Movies',
    icon: 'fa fa-film',
  },
  {
    type: 'both',
    path: '/tvs',
    title: 'TV Shows',
    icon: 'fa fa-tv',
  },
  {
    type: 'both',
    path: '/lists/genres',
    title: 'Browse by genre',
    icon: 'fa fa-th-list',
  },
  {
    type: 'loggedOut',
    path: '/auth/login',
    title: 'Login',
    icon: 'fa fa-sign-in',
  },
  {
    type: 'loggedIn',
    path: '/user/dashboard',
    title: 'Dashboard',
    icon: 'fa fa-cube',
  },
];
