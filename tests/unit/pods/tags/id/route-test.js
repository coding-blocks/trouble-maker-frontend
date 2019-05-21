import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tags/id', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tags/id');
    assert.ok(route);
  });
});
