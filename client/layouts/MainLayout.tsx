import React, { PropsWithChildren, ReactNode } from 'react'
import Sidebar from '../components/Sidebar'
import { Container } from '@mui/material'
import Player from '../components/Player';
import { useSelector } from 'react-redux';
import { getPlayerActive } from '../store/player/selectors/selectors';
import Head from 'next/head';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout:React.FC<MainLayoutProps> = ({children, title, description, keywords}:MainLayoutProps) => {
  const track = useSelector(getPlayerActive);
  return (
    <>
        <Head>
          <title>{title || "Музыкальная платформа"}</title>
          <meta name='discription' content={`Музыкальная площадка, на которой можно найти множество популярных треков. ${description}`}/>
          <meta name='robots' content='index, follow'/>
          <meta name='keywords' content={keywords  || 'Музака, треки, артисты'}/>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
        </Head>
        <Sidebar/>
        <Container style={{margin: '90px auto'}}>
            {children}
        </Container>
        {track && <Player/>}
    </>
  )
}

export default MainLayout