import Route from '@ember/routing/route';
import { inject as service } from '@ember/service' 

export default Route.extend({
  session: service(),
  currentUser: service(),
  beforeModel () {
    if (this.get('session.isAuthenticated')) {
      return this.get('currentUser').load()
    }
  }
});
