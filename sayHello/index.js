let word = prompt("Enter Name");

let sayHello = (name) => {
  if (name === "Mark") {
    return "Hi, " + name + "!";
  } else return "Hello, " + name + "!";
};

alert(sayHello(word));
