# React.js Exercise for Glen A. Wilson CODE

![Nadeshiko](https://i.imgur.com/0bXP0MU.png)

This exercise is intended for you to get familiar with fundamental [React](https://reactjs.org/) concepts in an interactive way, as well as for you to get comfortable developing in a modern [Node.js](https://nodejs.org/en/) environment. This project will be broken down into multiple parts. Each part will cover a fundamental React/frontend concept.

[The React Beginner's Guide](https://flaviocopes.com/react-beginners-guide/) and [The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-reactjs) will be very beneficial to go through to get a complete understanding on React fundamentals. It will also beneficial to get comfortable diving into [React Docs](https://reactjs.org/docs/hello-world.html) and [Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) as part of this exercise.

### Requirements
* node version 8.x
* npm version 5.x

Install node and npm [here](https://nodejs.org/en/download/).

Check if you have the correct versions by running the following commands in your terminal:
```
node -v
```
```
npm -v
```

### Setup
Clone this repository (click the green button saying "Clone or Download", choose http, and copy and paste it the location `<url>` ) and go into it:

```
$ git clone <url>
$ cd react-exercise
```

Install project dependencies:
```
npm install
```

After that's done, run this to start development:
```
npm start
```

This will start running the app and automatically open it at [http://localhost:3000](http://localhost:3000). Anytime you change and save the code, it will automatically reload! This will remain a running process in your terminal, so you will need to open a new tab or window to execute other commands.

## Part 1
Goal: Get familiar with JSX syntax, component structure, and passing props

Tasks:
* Send a `shouldDisplayImage` prop into the `Instructions` component that determines whether or not to display the Nadeshiko picture [Hint](https://reactjs.org/docs/conditional-rendering.html)

## Part 2
Goal: Get familiar with rendering lists and javascript array functions

Tasks:
* Send an `items` prop into the `Instructions` component which contains a list of strings
* Display a bullet point list of all the `items`
* Remove all items that are less than 3 characters long
* Make _every other_ list item uppercase
* Do this without using `for` or `while` loops
* Very useful videos to watch:
 * [Functional Programming Intro](https://www.youtube.com/watch?v=BMUiFMZr7vk&index=1&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84) - just the first two videos are enough, although there's a lot to learn from the rest of the playlist and his other videos! (highly recommend subscribing)
 * [Rendering lists in React](https://egghead.io/lessons/egghead-use-the-key-prop-when-rendering-a-list-with-react)

## Part 3
Goal: Get familiar with component state

Tasks:
* Create a new `Counter` component
* Set its initial state of `count` to `0`
* Display the value of the current count
* Create two buttons, one that increments the count and one that decrements it. [Hint](https://egghead.io/lessons/react-use-component-state-with-react)