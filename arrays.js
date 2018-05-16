var chocolateBars =
['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, n) {
  var newArray = [n, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, n) {
  var newArray = [...array, n]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}