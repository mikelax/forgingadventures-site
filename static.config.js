export default {
  siteRoot: 'https://forgingadventures.com',

  getSiteData: () => ({
    title: 'Forging Adventures',
  }),

  getRoutes: async () => [
    {
      path: '/',
      component: 'src/pages/Home',
    },
    {
      path: '/privacy',
      component: 'src/pages/PrivacyPolicy',
    },
  ],
}
