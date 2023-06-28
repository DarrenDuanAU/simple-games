export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const swapTwoElementsInArray = (array, firstIndex, secIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secIndex];
  array[secIndex] = temp;
  return array;
}