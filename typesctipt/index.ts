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
