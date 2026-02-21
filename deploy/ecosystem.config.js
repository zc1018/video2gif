module.exports = {
  apps: [{
    name: 'video2gif',
    script: 'src/index.ts',
    interpreter: 'tsx',
    cwd: '/var/www/video2gif/server',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    error_file: '/var/log/video2gif/error.log',
    out_file: '/var/log/video2gif/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss'
  }]
};
