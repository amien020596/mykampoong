# Fetching Data

This is documentation for creating and using the API interfaces.

## Table of contents

1. [Library We Used](#library-we-used)
2. [GET Request](#get-request)
3. [POST Request](#post-request)


## Library We Used

#### Fetch

Fetch is used for fetching data. This is a built in JS library in browser. 

#### SWR

This is library for cache and revalidating our fetched data. This one is quite powerful, because in SPA (Single Page Application), sometimes when we change our page to another, then back to previous page, the component will request API again and showing loading state again. We can prevent this to happen with [SWR](https://swr.vercel.app/).

## GET Request

#### Creating API Interface

First of all, to create a new API interface, you can create new folder in `/modules/` folder. Use `snake-case` to naming the folder. For example, we want to create `package` API interface, so you can create `/modules/package`. Then create new js file based on current [modules naming format](./project-structure.md#modules).


`get-package-detail.js`

```js

// To use SWR plugin, we need to load fetcher function as a request manager
import fetcher from 'libs/fetcher'

// Import SWR plugin
import useSWR from 'swr'


// In one API interface, we usually create two version of the way to fetch data, using SWR and without SWR.
// We use SWR for CSR data fetch only
// And for SSR data fetch, we can use the one that without SWR.

// With SWR
const usePackageDetail = (
  slug,
  options = {
    revalidateOnFocus: false
  }
) => {
  const url = process.env.NEXT_PUBLIC_API_URL + '/vacation/package/' + slug

  // You can pass some options that provided by SWR here, you can read the docs of SWR to know what it can do.
  const packageDetailSWR = useSWR(url, fetcher, options)


  return packageDetailSWR
}


// Without SWR
// This is just normal function of fetching using Fetch API.
const fetchPackageDetail = async slug => {
  return await fetch(process.env.NEXT_PUBLIC_API_URL + '/vacation/package/' + slug)
  .then(res => {
    if(!res.ok) throw new Error('Error')
    return res.json()
  })
  .catch(err => console.log(err))
}


// Export all the functions

export { usePackageDetail, fetchPackageDetail }
```

#### Using API interfaces

When you want to fetch data in CSR, you can use the SWR version. For example like this:

```js
import { usePackageDetail } from "/modules/package/get-package-detail";
import qs from "query-string";

export default function Package(){
  const query = {
    id: "test",
    bla: "bla"
  }

  // The returned data will available in data variable.
  // If API return error, you can see on error variable
  const { data, error } = usePackageDetail(qs.stringify(query));

  return (
    // Some jsx code
  )
}
```

## POST Request

#### Creating POST API Interface

To create POST request, it is almost the same with GET, the different is only in fetcher, and we dont use SWR on POST request.

```js
// In POST request, we use fetcher-post
import fetcher from "libs/fetcher-post";

// And this is normal Fetch API post function
const bookingAddToCart = async (data) => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/booking/add-to-cart";

  return await fetcher(url, data);
};

export { bookingAddToCart };
```

#### Using POST API Interface

You can use that function like this:

```js
import { bookingAddToCart } from "/modules/booking/post-booking";

export default function Booking(){

  const handleAddToCart = async () => {
    // This is body data that will be send to API endpoint.
    const data = {
      id: 1,
      name: "test"
    }

    // You can use async/await or try/catch to reproduce the promise.

    // This is example of async/await
    bookingAddToCart(data).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });

    // This is for try/catch
    try {
      const res = await bookingAddToCart(data);
      console.log(res);
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <button onClick={handleAddToCart}>Hit POST request</button>
  )
}

```