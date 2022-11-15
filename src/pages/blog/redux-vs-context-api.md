---
layout: "../../layouts/BlogPost.astro"
title: "Redux vs Context API: When to use them"
description: "Learn the difference between Redux state management vs Context API. and to understand what to use in different situations"
pubDate: "Oct 19 2022"
heroImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--p2vPapJU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pinwifhk5e3m4kitgb9g.png"
---

The simplest way to pass data from a parent to a child in a React Application is by passing it on to the child's props. But an issue arises when a deeply nested child requires data from a component higher up in the tree. If we pass on the data through the props, every single one of the children would be required to accept the data and pass it on to its child, leading to prop drilling, a terrible practice in the world of React.

To solve the prop drilling issue, we have State Management Solutions like Context API and Redux. But which one of them is best suited for your application? Today we are going to answer this age-old question!

# What is the Context API?

Let's check the official documentation:

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

Context API is a built-in React tool that does not influence the final bundle size, and is integrated by design.

To use the Context API, you have to:

1.Create the Context

```javascript
const Context = createContext(MockData);
```

2.Create a Provider for the Context

```javascript
const Parent = () => {
    return (
        <Context.Provider value={initialValue}>
            <Children />
        </Context.Provider>
    );
};
```

3.Consume the data in the Context

```javascript
const Child = () => {
    const contextData = useContext(Context);
    // use the data
    // ...
};
```

# So What is Redux?

Of course, let's head over to the documentation:

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time-traveling debugger.

You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.

Redux is an Open Source Library which provides a central store, and actions to modify the store. It can be used with any project using JavaScript or TypeScript, but since we are comparing it to Context API, so we will stick to React-based Applications.

To use Redux you need to:

1.Create a Reducer

```javascript
import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "slice-name",
    initialState: {
        // ...
    },
    reducers: {
        func01: (state) => {
            // ...
        },
    },
});

export const { func01 } = slice.actions;
export default slice.reducer;
```

2.Configure the Store

```javascript
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default configureStore({
    reducer: {
        reducer: reducer,
    },
});
```

3.Make the Store available for data consumption

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
```

4.Use State or Dispatch Actions

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { func01 } from './redux/reducer';

const Component = () => {
    const reducerState = useSelector((state) => state.reducer);
    const dispatch = useDispatch();
    const doSomething = () = > dispatch(func01)
    return (
        <>
            {/* ... */}
        </>
    );
}
export default Component;
```

# Wrapping Up

In this article, we went through what is Redux and Context API and their differences. We learned, Context API is a light-weight solution which is more suited for passing data from a parent to a deeply nested child and Redux is a more robust State Management solution.

### Happy Developing!
