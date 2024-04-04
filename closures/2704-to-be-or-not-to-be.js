/**
 * @param {string} val
 * @return {Object}
 */
function expect(val) {
  return {
    toBe: function (compareVal) {
      if (val !== compareVal) {
        throw "Not Equal";
      }
      return true;
    },
    notToBe: function (compareVal) {
      if (val === compareVal) {
        throw "Equal";
      }
      return true;
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
