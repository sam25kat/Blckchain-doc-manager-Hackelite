module.exports = {
    async rewrites() {
      return [
        {
          source: '/login',
          destination: 'http://127.0.0.1:5000/login', // Flask backend login endpoint
        },
        {
          source: '/admin_login',
          destination: 'http://127.0.0.1:5000/admin_login', // Flask backend admin login endpoint
        },
        {
          source: '/signup',
          destination: 'http://127.0.0.1:5000/signup', // Flask signup endpoint
        },
      ];
    },
  };
  