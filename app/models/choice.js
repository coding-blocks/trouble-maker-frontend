import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  positiveWeight: DS.attr(),
  negativeWeight: DS.attr(),
  question: DS.belongsTo('question')
})