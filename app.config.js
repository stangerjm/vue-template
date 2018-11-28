module.exports = {
  proxy: {
    target: 'http://localhost:5000',
    alias: '/api',
  },
  buildDirectory: '../wwwroot',
  appTitle: 'Interlock Management System',
  navItems: [
    { linkTitle: 'Home', linkPath: '/' },
    { linkTitle: 'About', linkPath: '/about' },
    { linkTitle: 'Profile', linkPath: '/profile' },
    { linkTitle: 'Contact', linkPath: '/contact' },
  ],
};
