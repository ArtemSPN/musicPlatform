import React from 'react'
import Sidebar from '../components/Sidebar'
import MainLayout from '../layouts/MainLayout'

const Index = () => {
  return (
    <>
        <MainLayout>
            <div className='center'>
                <h1>Добро пожаловать!</h1>
                <h3>Здесь собраны лучшие треки!</h3>
            </div>
        </MainLayout>

        <style>
            {`
                .center {
                    margin-top: 150px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                *{
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }
            `}
        </style>
    </>
  )
}

export default Index