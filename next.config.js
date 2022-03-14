// module.exports = {
//   i18n: {
//     locales: ['en', 'de'],
//     defaultLocale: 'en',
//   },
//   rewrites: [{
//     source: '/api/event',
//     destination: 'https://www.example.com/api/event',
//   }],
// };
module.exports = {
  // i18n: {
  //       locales: ['en', 'de'],
  //       defaultLocale: 'en',
  //     },

  async rewrites() {
    return [
      {
        source: '/api/event',
        destination: 'https://www.example.com/api/event',
      },
    ]
  },
}
