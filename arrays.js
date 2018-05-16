var chocolateBars =
['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, n) {
  var newArray = [n, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = [array, element]
  newArray.unshift(element)
  return newArray
}

function addElementToEndOfArray(array, n) {
  var newArray = [...array, n]
  return newArray
}

function destructivelyAddElementToEndOfArray() {
  chocolateBars.push("foo")
  return chocolateBars
}