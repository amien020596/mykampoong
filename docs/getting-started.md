# Getting Started

Here is a quick start guide.

## Table of Contents

1. [Development Setup](#development-setup)
2. [Run Development Server](#run-server)
3. [Available Commands](#available-commands)
4. [Deploy to Staging](#deploy-to-staging)

## Development Setup

Make sure you're aleready install [NodeJS](https://nodejs.org/en/) version 14 (we recommend using 14.17 LTS version) and [Yarn](https://yarnpkg.com/en/). After that run this several command.

```bash
$ yarn install # install all dependencies
```


## Run Development Server

```bash
$ yarn dev
```

Open http://localhost:3000 to view it in the browser.


## Available commands

- `yarn start` - Runs next start which starts a Next.js production server
- `yarn dev` - Runs next dev which starts Next.js in development mode
- `yarn build` - Runs next build which builds the application for production usage


## Deploy To Staging

To start production/live environtment, you can follow this commands:

```bash
$ yarn install
$ yarn build
$ yarn start
```