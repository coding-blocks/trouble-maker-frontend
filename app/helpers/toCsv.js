import { helper } from '@ember/component/helper';


export function toCsv(param) {
  return param[0].reduce((acc, val) => acc + ',' + val, '')
}

export default helper(toCsv);