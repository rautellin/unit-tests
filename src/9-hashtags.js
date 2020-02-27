export const hashtags = (text) => {
  let array = text.split(' ')
  let newArray = []

  array.forEach((item, index) => {

    let checkEachWord = item.startsWith('#')

    if (checkEachWord) {
      newArray.push(item);
    }
  })
  return newArray
}
