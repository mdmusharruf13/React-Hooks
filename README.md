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

