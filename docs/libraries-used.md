# Libraries

We are using [NextJS](https://nextjs.org/) and React as the JavaScript library. And of course we use other libraries. Here are some of them.

> Note
> We just mention the libraries here and give a little explanation about it. For more detailed information please get it in each library documentation page.

## Table of Contents

1. [UI Related](#ui-related)
2. [Routing Related](#routing-related)
3. [State Management](#state-management)
4. [API Fetching](#api-fetching)
5. [Form Validation](#form-validation)
6. [Other Supporting Libraries](#other-supporting-libraries)

## UI Related

##### Ant Design
We use Ant Design UI framework for this project. Because it has good documentation and easy customable components. More info in [Ant Design documentation](https://ant.design/)

## Routing Related

##### NextJS Built In Routing

We use built in routing feature in NextJS. More info in [NextJS Router documentation](https://nextjs.org/docs/routing/introduction)

## State Management

##### Unstated Next

For state management we use `unstated-next`. Because we want to create state per scope, thats why we dont use Redux here, but if redux really needed, feel free to add it. More info in [Unstated Next docs](https://github.com/jamiebuilds/unstated-next).


## API Fetching

##### Fetch

We use default API fetching from JS called `fetch` because it's already powerful for fetching API. [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

##### SWR

We also use SWR (stale-while-revalidate) for caching and revalidating data on clientside [SWR docs](https://swr.vercel.app/)


## Form Validation

##### Ant Design form component

To ease field validation, we use current Ant Design components `Form` to help us validating and submitting form. It handles the process from field value changes, prevent submit, generating errors, and submit if valid. More info in [Form docs](https://ant.design/components/form/)

## Other Supporting Libraries

##### Nookies

To manage cookie on this app, we use `nookies` library because it can handle both server side and client side. [Nookies documentation](https://github.com/maticzav/nookies)

##### date-fns

We use `date-fns` as helper for date functions. Check it in [its docs](https://date-fns.org/)
