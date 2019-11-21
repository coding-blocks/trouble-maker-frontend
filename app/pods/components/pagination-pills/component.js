import Component from '@ember/component';

export default class PaginationPillsComponent extends Component {
  didReceiveAttrs() {
    const length = this.pages
    this.set('pagesArray', Array.from({length}, (v, i) => ++i))
  }
}
