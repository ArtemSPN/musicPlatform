import React, { useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { ITrack } from '../../types/track'
import TrackList from '../../components/TrackList'
import { useDispatch } from 'react-redux'
import { fetchTracks } from '../../store/tracks/service/fetchTracks'
import { useSelector } from 'react-redux'
import { getTracksData, getTracksIsLoading } from '../../store/tracks/selectors/selectors'
import axios from 'axios'
import { setTrackList } from '../../store/tracks/slice/tracksSlice'

const Index = () => {
    const router = useRouter();
    // const tracks: ITrack[] = [
    //     {_id: '1', name: 'track 1', artist: 'artist 1', text: 'text 1', listens: 14, audio: 'http://localhost:5000/audio/0acb5768-9f98-448d-96db-d9c74436378b.mp3', picture: 'http://localhost:5000/image/6e1f1c64-cf61-43ee-84b2-a7fc55241ff4.jpg'},
    //     {_id: '2', name: 'track 2', artist: 'artist 2', text: 'text 2', listens: 14, audio: 'http://localhost:5000/audio/0acb5768-9f98-448d-96db-d9c74436378b.mp3', picture: 'http://localhost:5000/image/6e1f1c64-cf61-43ee-84b2-a7fc55241ff4.jpg'},
    //     {_id: '3', name: 'track 3', artist: 'artist 3', text: 'text 3', listens: 14, audio: 'http://localhost:5000/audio/0acb5768-9f98-448d-96db-d9c74436378b.mp3', picture: 'http://localhost:5000/image/6e1f1c64-cf61-43ee-84b2-a7fc55241ff4.jpg'},
    //     {_id: '4', name: 'track 4', artist: 'artist 4', text: 'text 4', listens: 14, audio: 'http://localhost:5000/audio/0acb5768-9f98-448d-96db-d9c74436378b.mp3', picture: 'http://localhost:5000/image/6e1f1c64-cf61-43ee-84b2-a7fc55241ff4.jpg'},
    // ]

    const dispacth = useDispatch();
    const isLoading = useSelector(getTracksIsLoading);
    const tracks = useSelector(getTracksData);


    useEffect(() => {
        console.log("kjgkjg")
         axios.get('http://localhost:5000/tracks').then(res => dispacth(setTrackList(res.data)))
    }, []); 


    return (
        <MainLayout title={`Список треков`}>
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
                    {isLoading?<p>Loading...</p>:<TrackList tracks={tracks}/>}
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index;