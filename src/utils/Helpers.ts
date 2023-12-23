export function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.map((item: any, key: number) => {
    return { ...item, id: key };
  });
}

export function formatNumber(numb: number) {
  if (numb >= 1000000) {
    const roundedNum = Math.round(numb / 100000) / 10;
    return `${roundedNum}M`;
  } else if (numb >= 1000) {
    const roundedNum = Math.round(numb / 100) / 10;
    return `${roundedNum}K`;
  } else {
    return numb.toString();
  }
}
