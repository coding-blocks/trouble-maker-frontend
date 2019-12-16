import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  explanation: DS.attr(),
  difficulty: DS.attr(),
  user: DS.belongsTo('user'),
  choices: DS.hasMany('choice'),
  tags: DS.hasMany('tag')
})