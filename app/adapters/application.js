import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import env from 'trouble-maker-frontend/config/environment';
import { underscore } from '@ember/string';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorize (xhr) {
    let { key } = this.get('session.data.authenticated')
    xhr.setRequestHeader('Authorization', `Bearer ${key}`);
  },
  host: env.apiHost,
  namespace: 'api',
  pathForType: function (type) {
    const original = this._super(...arguments)
    return underscore(original)
  },
  urlForQueryRecord(query) {
    if(query.custom) {
      switch (query.custom.ext){
        case 'url': {
          let url =  query.custom.url;
          delete query.custom;
          return `${this._super(...arguments)}/${url}`;
        }
      }
    } else  {
      return this._super(...arguments);
    }

  },
  urlForQuery(query) {
    if(query.custom) {
      switch (query.custom.ext) {
        case 'url': {
          let url =  query.custom.url;
          delete query.custom;
          return `${this._super(...arguments)}/${url}`;
        }
      }
    } else  {
      return this._super(...arguments);
    }
  }
})