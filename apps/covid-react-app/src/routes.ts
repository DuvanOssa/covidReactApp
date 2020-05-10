import Home from './app/pages/Home';
import Countries from './app/pages/Countries';
export interface Route {
  path: string;
  title: string;
  component: any;
}

const routes: Route[] = [
  {
    path: '/home',
    title: 'INFORMACIÓN GENERAL',
    component: Home
  },
  {
    path: '/countries/:country',
    title: 'País',
    component: Countries
  }
];

export default routes;
