import React, { Component } from 'react'
import { destroyToken, getToken, setToken } from 'libs/helpers/auth';

import { connect } from 'react-redux';
import { refreshToken } from 'modules/auth/post-auth';
import { setUserAuth } from "store/actions/authActions";

class Authentication extends Component {
  static isMount;
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.timerID = null;
    this.state = {
      time: null
    }
  }
  OFFSETTIME = 600; // 10 minutes
  SECONDTOMILISECOND = 1000;
  REFRESHTOKENTIMEINMILISECOND = 24 * 3600 * 1000; // 24 hours

  REFRESHTOKENTIME = 60000000; // 10 minutes 
  TEMPREFRESHTOKENTIME = 10000; // 10 seconds



  componentDidMount() {
    // console.log("component did mount")
    this.isMount = true;
    if (this.isMount) {
      if (getToken().refreshToken && window.localStorage.getItem('USSID')) {
        this.props.setUserAuth(true)

        this.timerID = setInterval(() => {
          this.refreshToken()
        }, this.REFRESHTOKENTIME);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userAuth !== this.props.userAuth) {
      // console.log("component did update")
      if (this.isMount) {
        if (this.props.userAuth && getToken().refreshToken) {
          // const refreshTimeInSecond = (window.localStorage.getItem('myk-token-lifetime') - this.OFFSETTIME) * this.SECONDTOMILISECOND
          this.timerID = setInterval(() => {
            this.refreshToken()
          }, this.REFRESHTOKENTIME);
        }
      }

    }
  }

  componentWillUnmount() {
    // console.log("componenet will unmount")
    this.isMount = false;
    clearInterval(this.timerID);
  }

  refreshToken = async () => {

    const dataRefreshToken = { refresh_token: getToken().refreshToken }

    try {
      const res = await refreshToken(dataRefreshToken);
      const parsed = await res.json();
      if (!parsed.success) {
        // if error token not remove
        // const access_token = getToken().token;
        // const refresh_token = getToken().refreshToken;
        // const expires_in = (window.localStorage.getItem('myk-token-lifetime') - this.OFFSETTIME);

        // if (this.isMount) {
        //   setToken(access_token, refresh_token, expires_in);
        // }
        clearInterval(this.timerID);
      } else {
        const { access_token, refresh_token, expires_in } = parsed?.token;
        if (this.isMount) {
          if (access_token, refresh_token, expires_in) {
            setToken(access_token, refresh_token, expires_in);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        {this.props.children}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    userAuth: state.authentication.userAuth || false,
    // mediaDisplay: state.runtimeReducer.mediaDisplay || "grid",
  }
}

const mapDispatchToProps = {
  setUserAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);