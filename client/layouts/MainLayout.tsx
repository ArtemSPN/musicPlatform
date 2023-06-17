import React from 'react'
import Sidebar from '../components/Sidebar'
import { Container } from '@mui/material'

const MainLayout: React.FC = ({children}) => {
  return (
    <>
        <Sidebar/>
        <Container style={{margin: '90px auto'}}>
            {children}
        </Container>
    </>
  )
}

export default MainLayout