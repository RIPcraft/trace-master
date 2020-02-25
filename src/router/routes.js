
const routes = [
  {
    path: '/',
    component: () => import('layouts/TraceLayout.vue'),
    children: [
      { path: '', redirect: 'test' },
      {
        name: 'SistemRabatare',
        path: 'sistem-rabatare',
        component: () => import('pages/SistemRabatare.vue'),
      },
      {
        name: 'Test',
        path: 'test',
        component: () => import('pages/Test.vue'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
