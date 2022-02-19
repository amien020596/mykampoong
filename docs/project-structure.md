# Project Structure

Here are some project structure explanations.

## Table of Contents

1. [General Structure](#general-structure)
2. [Components](#components)
3. [Libs](#libs)
4. [Modules](#modules)

## General Structure

The general structure of this project is as follow.

```
├─── assets/     # files of and styles (less) and js variables
├─── components/ # all components here
├─── docs/       # some documentation files
├─── email/      # email templates is here (HTML files)
├─── libs/       # common helper functions used globally
├─── modules/    # API interfaces
├─── pages/      # pages and routing related
├─── public/     # static assets
```


### Components

This folder used for all components, including:

#### Page Component

To seperate between UI or common components with Page component, **we use** `_` in the name of folder (e.g. `_Home`). And inside that folder you can create inner components, helper, validation, etc. Please use PascalCase to naming the folder.

#### Common Component

For common component, we named the component folder **without** `_`. Please use PascalCase to naming the folder.


### Libs

This folder contains common helper, library, hooks that used globally and reusable for every components. This folder has 3 inner folder, that are:

#### /const

To store consts variable or mapping that can be use globally (e.g. for API codes, or status ID).

#### /helpers

Contains custom function to make life easier :)

#### /hooks

Contains state management and hooks function using `unstated-next`.


### Modules

This folder contains API interfaces, seperated per module/controller. The naming convention for folder is using `snake-case`. And for files inside the folder, please create with format `[request type]-[module name]-[what it does]`. For example: `get-package-details.js` or `post-auth.js`.