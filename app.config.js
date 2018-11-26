module.exports.config = {
  proxy: {
    target: 'http://localhost:5000',
    alias: '/api',
  },
  outputDirectory: '../wwwroot',
  nav: {
    items: [
      { linkTitle: 'Home', linkPath: '/' },
      { linkTitle: 'About', linkPath: '/about' },
      { linkTitle: 'Profile', linkPath: '/profile' },
      { linkTitle: 'Contact', linkPath: '/contact' },
    ],
    title: 'Interlock Management System',
  },
};
