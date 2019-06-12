module.exports = {
  apps: [{
    name: '030cardiologia',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-231-28-16.sa-east-1.compute.amazonaws.com',
      key: '~/.ssh/030cardiologia.pem',
      ref: 'origin/master',
      repo: 'git@github.com:mvroso/030cardiologia.git',
      path: '/home/ubuntu/server/030cardiologia',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}