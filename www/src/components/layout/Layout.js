import React from 'react'
import Footer from '../UI/Footer'
import Header from '../UI/Header'

const Layout = (props) => {
  return (
    <React.Fragment>
        <Header/>
        {props.children}
        <Footer/>
    </React.Fragment>
  )
}

export default Layout
