// import 'antd/dist/antd.css';
import '../assets/antd-custom.less'
import '../assets/flexbox.less'
import '../assets/style.less'
import '../assets/spacing.less'
import '../assets/form.less'

import AccountContext from 'libs/hooks/account';
import Authentication from 'components/Auth/Authentication'
import { Children } from 'react';
import { useGlobalContext as GlobalContext } from "libs/hooks/global";
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import axios from 'axios';
import { createWrapper } from 'next-redux-wrapper';
import { getToken } from 'libs/helpers/auth';
import store from '../store/store';
import { useRouter } from 'next/router'

export const HOC = (props) => {

  const { setLoginModalVisible } = AccountContext.useContainer()
  axios.interceptors.request.use(
    config => {
      config.headers['channelName'] = 'my-kampoong-z'
      config.headers['Authorization'] = `Bearer ${getToken().token}`
      return config;
    }
    , (request) => {
      return request;
    },
    error => {
      Promise.reject(error)
    })

  axios.interceptors.response.use((response) => {
    return response;

  }, function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // disini kita perlu refresh token nya dan kemudian mensetting token yang ada di localstorage menjadi yang baru 
      // const refreshToken = getToken().refreshToken;
      // const res = refreshToken()
      // const parsed = await res.json();
      // return axios(originalRequest);
      openModalVisible()
      // kemudian kita kirimkan request sebelumnya yang gagal
      // axios.defaults.headers.common['Authorization'] = `Bearer ${getToken().token}`;
      // return axios(originalRequest);

    }

    return Promise.reject(error)

  })

  function openModalVisible() {
    setLoginModalVisible(true)
  }
  return (
    <>
      {props.children}
    </>
  )

}

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <Provider store={store}>
      <Authentication>
        <GlobalContext.Provider>
          <AccountContext.Provider>
            <HOC>
              <Component {...pageProps} />
            </HOC>
          </AccountContext.Provider>
        </GlobalContext.Provider>
      </Authentication>
    </Provider>
  )
}

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {}

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx)
//   }

//   return {
//     pageProps
//   }

// }



// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// }


const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(appWithTranslation(MyApp));
// export default appWithTranslation(MyApp)
// export default wrapper.withRedux(MyApp);