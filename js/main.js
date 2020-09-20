function hello() {
  console.log('Hello', this)
}
hello()

const person = {
  name: "DimG",
  age: 34,
  sayHello: hello()
}

console.log(person)
