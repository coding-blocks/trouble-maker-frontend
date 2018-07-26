import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  duration: DS.attr(),
  maxAttempts: DS.attr(),
  startDate: DS.attr(),
  endDate: DS.attr(),
  addedBy: DS.attr(),
  questions: DS.hasMany('question')
})