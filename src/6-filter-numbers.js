export const filterNumbers = (array, largerThan) => {

  array.forEach((item, index) => {
    if (item > largerThan) {
      let numbersToRemove = array.length - index
      array.splice(index, numbersToRemove);
    }
  })

  return array
}
