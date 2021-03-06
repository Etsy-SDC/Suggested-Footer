module.exports = {
    apps: [{
      name: 'Suggested-Footer',
      script: './server/index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-224-62-106.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/tutorial.pem',
        ref: 'origin/master',
        repo: 'git@github.com:Etsy-FEC/Suggested-Footer.git',
        path: '/home/ubuntu/projects/Suggested-Footer',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }