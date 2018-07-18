import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  session: service(),
  currentUser: service(),
  beforeModel (transition) {
    if(this.get('session.isAuthenticated')) {
      return ;
    }

    return this.get('session').authenticate('authenticator:custom', transition.queryParams.code)
      .then(() => this.get('currentUser').load())
  },
  afterModel () {
    this.transitionTo('index', {
      queryParams: {}
    })
  }
});
