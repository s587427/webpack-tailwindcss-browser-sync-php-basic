import { calculate } from "./counter"
import { button } from "./button"
import "./index.css"
console.log("this is index.js file")
console.log(calculate(1, 2))

console.log("hello world12312332")

console.log(calculate(10, 300))

document.querySelector("body").appendChild(button)

let color = [1, 2, 3, 4, 5]

let result = color.filter((item) => item > 2)
