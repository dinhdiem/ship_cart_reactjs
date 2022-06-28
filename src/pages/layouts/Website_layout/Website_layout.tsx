import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../components/client/Header'
import Footer from '../../../components/client/Footer'

type Props = {}

const Website_layout = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
    
  )
}

export default Website_layout