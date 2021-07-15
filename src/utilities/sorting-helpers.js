export const ascComparator = (a, b, key) => {
  if (key === 'place') {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }

  } else {
    return a.properties[key] - b.properties[key]
  }

}
export const descComparator = (a, b, key) => {
  if (key === 'place') {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
  } else {
    return b.properties[key] - a.properties[key]
  }
}