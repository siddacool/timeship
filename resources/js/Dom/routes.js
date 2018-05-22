import HomePageView from './Views/HomePageView';
import SearchView from './Views/SearchView';
import AddCityView from './Views/AddCityView';

const routes = [
  {
    name: 'Home Page',
    path: '/',
    view: HomePageView,
    isDefault: true,
  },
  {
    name: 'Home Page',
    path: '/search',
    view: SearchView,
  },
  {
    name: 'Add City View',
    path: '/add/:city',
    view: AddCityView,
  },
];

export default routes;
