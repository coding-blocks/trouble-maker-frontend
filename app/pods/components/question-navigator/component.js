import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    questionIDs: Ember.computed('quiz.questions.@each', function () {
        return this.get('quiz').hasMany('questions').ids()
    })
})
