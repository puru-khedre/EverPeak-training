# Day 1

## What is Javascript

JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. It lets us add interactivity to pages e.g. you might have seen sliders, alerts, click interactions, popups, etc on different websites — all of that is built using JavaScript. Apart from being used in the browser, it is also used in other non-browser environments as well such as Node.js for writing server-side code in JavaScript, Electron for writing desktop applications, React Native for mobile applications, and so on.

## Variable Declarations

To declare variables, we use one of the `var`, `let`, or `const` keywords.

- `var`: The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
- `let`: The let declaration declares a block-scoped local variable, optionally initializing it to a value.
- `const`: Constants are block-scoped, much like variables declared using the `let` keyword. The value of a constant can’t be changed through reassignment.

## logging  

We can use javascript function `console.log` to log information to console

```js
console.log("hello!");
```

## Even odd - EleseIf

```js
let num = 10;

if(num % 2==0)
  console.log("Even");
else 
  console.log("Odd");
```

## Week Days - Switch Case

```js
const day = new Date().getDay();

switch(day){
    case 1: console.log("Monaday");
    break;

    case 2: console.log("Tuesday");
    break;

    case 3: console.log("Wednesday");
    break;

    case 4: console.log("Thursday");
    break;

    case 5: console.log("Friday");
    break;

    case 6: console.log("Saturday");
    break;

    case 0: console.log("Sunday");
    break;
}
```

## ToDo's list - For Loop

```js
for(let i=0; i<=todos.length; i++){
    htmlList += todos[i]+"</br>";
}

document.body.append(htmlList);
```
