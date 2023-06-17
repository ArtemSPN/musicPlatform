import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { ITrack } from '../../types/track'
import TrackList from '../../components/TrackList'

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'track 1', artist: 'artist 1', text: 'text 1', listens: 14, audio: 'http://localhost:5000/audio/01cdb2e8-77c5-4aec-b3bf-58c1a060d11c.mp3', picture: 'http://localhost:5000/image/51606316-60fb-44af-a987-5635cb2a2283.jpg'},
        {_id: '2', name: 'track 2', artist: 'artist 2', text: 'text 2', listens: 14, audio: 'http://localhost:5000/audio/01cdb2e8-77c5-4aec-b3bf-58c1a060d11c.mp3', picture: 'http://localhost:5000/image/51606316-60fb-44af-a987-5635cb2a2283.jpg'},
        {_id: '3', name: 'track 3', artist: 'artist 3', text: 'text 3', listens: 14, audio: 'http://localhost:5000/audio/01cdb2e8-77c5-4aec-b3bf-58c1a060d11c.mp3', picture: 'http://localhost:5000/image/51606316-60fb-44af-a987-5635cb2a2283.jpg'},
        {_id: '4', name: 'track 4', artist: 'artist 4', text: 'text 4', listens: 14, audio: 'http://localhost:5000/audio/01cdb2e8-77c5-4aec-b3bf-58c1a060d11c.mp3', picture: 'http://localhost:5000/image/51606316-60fb-44af-a987-5635cb2a2283.jpg'},
    ]


    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent={'space-between'} alignItems={'center'}>
                            <h1>Cписок треков</h1>
                            <Button 
                                variant="contained" 
                                onClick={() => router.push('/tracks/create')}
                                style={{height: '50px'}}
                            >
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index;