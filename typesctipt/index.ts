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

// 最長の回文箇所を取得する
// Time Limit Exceeded
// O(n^2)になっているのでデータ量に比例して計算量も増える
function bruteForcePalindrome(s: string): string {
  if (s.length < 2) return s;
  let palindrome = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= s.length; j++) {
      if (j > i) {
        const str = s.substring(i, j);
        if (
          str === str.split("").reverse().join("") &&
          palindrome.length < str.length
        ) {
          palindrome = str;
        }
      }
    }
  }
  return palindrome;
}

// 回文を中央の文字から探索する
function longestPalindrome(s: string): string {
  if (s.length < 2) return s;
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    let length1 = expandAroundCenter(s, i, i);
    let length2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(length1, length2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return s.slice(Math.ceil(start), end + 1);
}

function expandAroundCenter(s: string, left: number, right: number): number {
  let l = left;
  let r = right;
  while (l >= 0 && r < s.length && s.charAt(l) == s.charAt(r)) {
    // if (s[l] !== s[r]) break;
    l--;
    r++;
  }
  return r - l - 1;
}

function convert(s: string, numRows: number): string {
  if (numRows < 2) return s;
  let zig = [];
  let cycle = numRows * 2 - 2;
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; j + i < s.length; i += cycle) {
      zig.push(s.charAt(i + j));
      if (j !== 0 && j !== numRows - 1) {
        zig.push(s.charAt(i + cycle - j));
      }
    }
  }
  return zig.join("");
}

// input: "  -0012a42"
// output: 0
// expected: -12
function myAtoi(s: string): number {
  if (/(?=[^0-9])(?=[^\s])(?=[^\+])(?=[^\-])/.test(s[0])) return 0;
  const limit = 2147483648;
  // console.log(s.split(' '))
  const array = s
    .split(" ")
    .filter((e) => !Number.isNaN(Number(e)) && e !== "");
  // const k = Number(array[0]) < 0 ? -1 : 1
  // console.log(array)
  if (Number.isNaN(Number(array[0]))) return 0;
  return limit * -1 > Number(array[0])
    ? limit * -1
    : Number(array[0]) > limit
    ? limit - 1
    : Number(array[0]);
}
