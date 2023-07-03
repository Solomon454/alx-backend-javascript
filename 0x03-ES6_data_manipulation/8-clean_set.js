/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
*/
export default function cleanSet(set, string) {
  if (string === undefined || string.length === 0) {
    return '';
  }
  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(string) : ''))
    .map((str) => (str !== undefined ? str.slice(string.length) : ''))
    .join('-');
}
