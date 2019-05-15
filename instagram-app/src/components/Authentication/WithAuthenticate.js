import React from 'react'
import LoginPage from '../Login/LoginPage'

const WithAuthenticate = (Component) => LoginPage => {
  return (
      class extends React.Component {
        constructor() {
            super();
            this.state ={
            }
        }

        render() {
            if (localStorage.username){
                return <Component />
            } else {
                return <LoginPage />
            }
        }
    })
}

export default WithAuthenticate;
