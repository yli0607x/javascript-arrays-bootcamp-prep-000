var chocolateBars = ["snikers", "hungred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
