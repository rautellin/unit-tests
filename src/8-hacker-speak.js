export const hackerSpeak = (words) => {
  let text = words
  text = text.replace(/a/gi, "4")
  text = text.replace(/e/gi, "3")
  text = text.replace(/i/gi, "1")
  text = text.replace(/o/gi, "0")
  text = text.replace(/s/gi, "5")
  return text
}
