const addTwoNumbers = (l1: any[], l2: any[]) => {
  let arrayLong, arrayShort;
  let arrayResult = [];
  let tenPlace: any = [];
  if (l1.length > l2.length || l1.length === l2.length) {
    arrayLong = l1;
    arrayShort = l2;
  } else {
    arrayLong = l2;
    arrayShort = l1;
  }

  for (let i = 0; i < arrayLong.length; i++) {
    const short = arrayShort[i] ? arrayShort[i] : 0;
    const temp = arrayLong[i] + short + (tenPlace?.pop() || 0);
    const tempString = temp > 9 ? String(temp).substring(1, 2) : String(temp);
    arrayResult.push(Number(tempString));
    temp > 9 && tenPlace.push(Number(String(temp).substring(0, 1)));
    i === arrayLong.length - 1 &&
      tenPlace.length &&
      arrayResult.push(tenPlace.pop());
  }

  return arrayResult;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// 中央値を求める
function getMedian(nums1: number[], nums2: number[]): number {
  let mergedArray = [...nums1, ...nums2];
  const sorted = mergedArray.sort((a: number, b: number) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2.0
    : sorted[middle];
}

console.log(getMedian([1, 3], [2])); // 2
console.log(getMedian([3], [-2, -1])); // -1
