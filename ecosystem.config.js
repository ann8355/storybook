module.exports = {
  apps : [{
    name      : 'ui_book',
    script    : 'npm',
    args      : 'storybook',
    exec_mode : 'cluster',
    cwd       : '/vhosts/ui_book',
    instances : 'max',
    max_memory_restart : "1G",
    env: {
      NODE_ENV: 'development',
      NODE_OPTIONS: '--perf-basic-prof --max-old-space-size=4096'
    },
    env_production : {
      NODE_ENV: 'production',
      NODE_OPTIONS: '--perf-basic-prof --max-old-space-size=4096'
    }
  }]
};
