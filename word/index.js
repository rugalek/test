let word = prompt("Введите слово");

let toUpperCase = (str) => {
  if (str.includes(" ")) {
    return alert("Ввод только одного слова");
  } else {
    let result = str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
    return result;
  }
};

alert(toUpperCase(word));
