import Home from './app/pages/Home';
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
  }
];

export default routes;
