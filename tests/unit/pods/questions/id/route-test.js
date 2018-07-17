import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | questions/id', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:questions/id');
    assert.ok(route);
  });
});
