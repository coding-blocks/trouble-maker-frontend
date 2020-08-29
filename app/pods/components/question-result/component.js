import Component from '@ember/component';
import Ember from 'ember';
import {inject as service} from '@ember/service';

export default Component.extend({
    store: service(),
    question: Ember.computed('res', function () {
        return this.store.findRecord('question', this.get('res').id)
    })
})
