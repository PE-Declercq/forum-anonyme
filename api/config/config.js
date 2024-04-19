const config = {
    db: {
      host: process.env.DB_HOST || 'db-1',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'forum',
      port: process.env.DB_PORT || 3306
    },
  };
  
  module.exports = config;  