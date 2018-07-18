import { helper } from '@ember/component/helper';

const toIntIfPossible = el => isNaN(+el) ? el : +el

export function includes(param) {
  let [haystack, needle] = param
  if (!Array.isArray(haystack)) {
    throw new Error('First param must be an array')
  }

  haystack = haystack.map(toIntIfPossible)
  needle = toIntIfPossible(needle)

  return haystack.includes(needle)
}

export default helper(includes);