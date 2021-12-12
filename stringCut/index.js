let arr = ["asd", "sdfsdfg", "sdfbsdfghsfgh", "1232342"];
let arrLength = 8;

let filterArray = (array, length) => {
  let newArr = [];
  array.forEach((element) => {
    if (element.length >= length) {
      newArr.push(element);
    }
  });
  return newArr;
};

console.log(filterArray(arr, arrLength));
