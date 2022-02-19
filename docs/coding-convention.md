# Coding Convention

Some coding convention we use are listed below. First of all, we recomend you to use VS Code editor, then **you must** install [Prettier Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to make our coding consistent between all of developers.

## Table of Contents

1. [Naming](#naming)
2. [Folder Structuring](#folder-structuring)
3. [Component Creation](#component-creation)
4. [Import Ordering](#import-ordering)
5. [Single Responsibility Principle](#single-responsibility-principle)
6. [Read More](#read-more)

## Naming

Naming includes for variables, components, pages, functions, files, folders, etc.

- It should be in English!
- Make sure it easy to understand an clearly explain the purpose.

## Folder Structuring

- If you are creating a new folder, make sure it necessary and has a descriptive name.
- Please refer to [Project Structure documentation](project-structure.md) to more info about folder structuring.

## Component Creation

The "component" in here means component (presentational component), pages (container component), layouts, etc

- Use functional component and hooks.
- Use object destructuring for `props`.
- Use default `function` instead over arrow function.
- For global component, add `propTypes` and `defaultProps`.
- Make sure your component isn't too big, if it is, then consider refactor it to smaller ones.

## Import Ordering

Arrange your `import`s statement accordingly to this order:

- React, PropTypes, other React and hooks related libraries (router, redux, styled components, i18n, etc)
- Layout, Bootstrap components (alphabetical order), global components (alphabetical order), scenes related components, FontAweseome icons
- API interfaces, constants, helpers, services (redux state and action)
- SCSS, images.

You can read this article ([5 Tips to Write Better React Code](https://levelup.gitconnected.com/5-tips-to-write-better-react-code-a5bca3f9531c)) for more info.

## Single Responsibility Principle

A function/class should have one and only one reason to change, meaning that a function/class should have only one job.

- In other word, a function/class should focus on one purpose.
- If your function is to big and not doing one purpose, consider to split it.
- Function purpose also should described by its name.

This principle is one of S.O.L.I.D principle. Read more about it in [SOLID Principles made easy](https://medium.com/@dhkelmendi/solid-principles-made-easy-67b1246bcdf) and [S.O.L.I.D: The First 5 Principles of Object Oriented Design](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)


> An important note: you MUST make sure that there is no warning in console when you push your codes. The pushed code must be in a working state and warning free.

## Read More

Read more about Clean Code and React Patterns in these articles:

- https://github.com/ryanmcdermott/clean-code-javascript
- https://reactpatterns.com/
