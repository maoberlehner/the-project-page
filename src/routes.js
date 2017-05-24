import Home from '@/views/Home';

export const prerender = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

export const clientOnly = [];

export default prerender.concat(clientOnly);
