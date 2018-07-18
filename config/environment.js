'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'trouble-maker-frontend',
    podModulePrefix: 'trouble-maker-frontend/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.ONEAUTH = {
      clientID: "2636937167",
      callbackURL: "http://localhost:4200/callback"
    }
    ENV.apiHost = 'http://localhost:8080'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.ONEAUTH = {
      clientID: "7023763625",
      callbackURL: "http://troublemaker.codingblocks.com/callback"
    }
    ENV.apiHost = 'http://troublemaker-api.codingblocks.com'
  }

  return ENV;
};
