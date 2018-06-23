export default {
  head: {
    titleTemplate: 'Forging Adventures: %s',
    defaultTitle: 'Forging Adventures',
    meta: [
      { name: 'description', content: 'A new way to play old-school Tabletop RPGs online' },
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#6FA1BA' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { property: 'og:site_name', content: 'Forging Adventures' },
      { property: 'og:image', content: 'https://forgingadventures.com/logo.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:title', content: 'Forging Adventures' },
      {
        property: 'og:description',
        content: 'A new way to play old-school Tabletop RPGs online',
      },
      { property: 'og:site', content: '@forgeadventures' },
      { property: 'og:creator', content: '@mikelax' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
    ],
  },
};
