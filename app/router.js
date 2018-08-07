import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('questions', function() {
    this.route('id', {path: '/:id'});
    this.route('new');
  });
  this.route('callback');
  this.route('quiz', function() {
    this.route('new');
    this.route('id', {path: '/:id'});
  });
  this.route('err', {path: '/:code'});
});

export default Router;
