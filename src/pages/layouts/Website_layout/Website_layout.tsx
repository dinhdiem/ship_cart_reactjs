import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../components/client/header'

type Props = {}

const Website_layout = (props: Props) => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
    
  )
}

export default Website_layout