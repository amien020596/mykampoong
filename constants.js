const dev = {
  NEXT_PUBLIC_API_URL: 'http://mykampoong-backend.test/api/v1',
  NEXT_PUBLIC_MAPS_API_KEY: 'AIzaSyA_Go5C84bsW6N-uCSXVBHk8YXScdYCspE'
}

const prod = {
  NEXT_PUBLIC_API_URL: 'https://app.mykampoong.com/api/v1',
  NEXT_PUBLIC_MAPS_API_KEY: 'AIzaSyA_Go5C84bsW6N-uCSXVBHk8YXScdYCspE'
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod
// export const config = prod