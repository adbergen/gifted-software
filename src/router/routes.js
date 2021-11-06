
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue') },
      { path: '/portfolio', component: () => import('pages/Portfolio.vue') },
      { path: '/services', component: () => import('pages/Services.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
