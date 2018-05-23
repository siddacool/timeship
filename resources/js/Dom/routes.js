import HomePageView from './Views/HomePageView';
import SearchView from './Views/SearchView';

const routes = [
  {
    name: 'Home Page',
    path: '/',
    view: HomePageView,
    isDefault: true,
  },
  {
    name: 'Search',
    path: '/search',
    view: SearchView,
  },
];

export default routes;
