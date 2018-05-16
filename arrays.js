var chocolateBars =
['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, n) {
  var newArray = [n, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, n) {
  var newArray = [array, n]
  newArray.push(n)
  return newArray
}

function addElementToEndOfArray() {
  [...chocolateBars, "foo"]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray() {
  chocolateBars.push("foo")
  return chocolateBars
}