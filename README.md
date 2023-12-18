# React Hooks

### What is Hooks ?
Hooks are the functions to use some react features in functional components.
In other words, Hooks are functions that make Functional components work like Class components.

Before react introduced hooks there is only one way to use state and life cycle methods by using class components, now developers had some problems with class components so react take some time to develop special functions that we can use in functional components and that special functions are called hooks.

### List of Hooks
* useState
* useEffect
* useContext
* useRef
* useRecducer
* useLayoutEffect
* useMemo
* useCallback

## useState

### What is useState ?
UseState Hook is a function to add State in Functional Component.

### What is state ?
State is nothing but just values or variables of your component. In other words all variables in your component are called as state of the component.

```js
import { useState } from 'react';
const [counter, setCounter] = useState(0);
```
**counter** is variable which holds some data and **setCounter** is function to update the counter variable, **useState(0)** means the default value is 0. You can provide data like number, string, boolean and objects also as default value accordingly.

## useEffect

### What is useEffect ?
UseEffect is used to perform side effects in out component. useEffect hook accept two arguments, first **callback** which is a function in which we write our side effect logic this functon is executed whenever something change in this component and second **dependencies** which is an array of variables and it's an optional argument. In simple terms, first argument is what to run and second one is what to run. so useEffect runs on every render which means the count changes the render happens and we can control that by dependencies. if you're familiar with class components useEffect is a combination of **componentDidMount**, **componentDidUpdate** and **componentWillUnmount**.

__variation of useEffect__
+ useEffect without dependencies
+ useEffect with empty array
+ useEffect with variables


### What is side effect ?
side effects are actions which are performed with the "Outside world". We perform a side effect when we need to react outside of out react components to do something.

__some common side Effects :__
* Fetching data from API
* updating the DOM
* Timer functions (setTimeout & setInterval)

```js
import { useEffect } from 'react';
useEffect(fn, dependencies);
```

## useContext

### what is useContext ?
useContext hook is used to manage global data in react application such as global state, theme services, user settings etc

### Why we need useContext hook ?
Imagine you create an application with hierarchy of level-5 depth and you have to send data from level-1 component to level-4 component so sending data through props is very annoying and hard to maintail. so useContext help us to create global data for our react application so we don't have to pass the data through all these components, we can access that data in all component we needed.

__Creating context requires 3 simple steps:__ 
1. Creating the Context
2. Providing the Context
3. Consuming the Context

```js
// creating context
export const someContext = createContext();

//providing context
<someContext.Provider>
    {props.childern}
</someContext.Provider>

//consuming context
const myContext = useContext(someContext);
console.log(myContext);
```
## useRef

### What is useRef ?
UseRef allows us to access DOM elements and for creating mutable variables which will not re-render the component.

```js
cosnt myRef = useRef(null);
console.log(myRef);

<input type="text" ref={myRef}>
```

## useReducer 

### What is useReducer ?
useReducer is used to manage state in our react application. In other words, useReducer works like a state management tool.


### What is State Management ?
State Management is used to manage all states of application in a simple way. Always use the useReducer hook when you have a lot of states and methods to handle.

```js
const [state, dispatch] = useReducer(method, initialValue);
```

useReducer is used to manage complex states in react application.

## useLayoutEffect

### What is useLayoutEffect ?
useLayoutEffect works exactly the same sa useEffect (also the same syntax), but the difference is "When it's run". useEffect runs after the DOM is printed on the browser. useLayoutEffect runs before the DOM is printed on the browser. 
whenever we want to run code before the DOM  is printed like measuring the Height, Width, anything related to layout. 
useLayoutEffect runs Synchronously (it execute first line then only moves to second line). 
The most common use case of useLayoutEffect is to get the dimension of the layout that's why it's name is useLayoutEffect.

```
const [count, setCount] = useState(0);

useEffect(() => {
    console.log("useEffect runs");
}, [count]);

useLayoutEffect(() => {
    console.log("useLayoutEffect runs");
}, [count]);
```

In the above example the useLayoutEffect run first then the useEffect runs. Both does the same works by differ in time of execution. 

__Flow :__  

React calculate the component  
          ⬇    
useLayoutEffect runs   
          ⬇  
React prints all elements   
          ⬇   
useEffect runs

__Note :__  
useLayoutEffect is Synchronous and useEffect is Asynchronous.


## useMemo  
### What is useMemo ?
useMemo hook is used to apply Memoization in React. It is useful to avoid on every render when the returned value is not change. 

### What is Memoization ?  
Memoization is a technique for improving the performance of code.

```js
const memoCalculation = useMemo(callback, [dependency]);
```

## useCallback  
### What is useCallback ?  
useCallback is used to return Memoize function. It's also useful for preventing functions from being re-created on re-rendering. It improves the performance of our react application. useCallback syntax is same as useMemo hook, but useMemo returns the memoize value and useCallback returns the memoize function.

```js
const memoizedFn = (fn, [dependency]);
```

## Custom Hooks  
Custom hooks are your login which you created as reusable function. you can use multiple hooks and create something that will help you to skip repeated tasks in your project.