import React from 'react'
import { ITrack } from '../../types/track';
import MainLayout from '../../layouts/MainLayout';
import { useRouter } from 'next/router';
import { Button, Grid, TextField } from '@mui/material';
import cls from '../../styles/TrackPage.module.scss'

const TrackPage = () => {
    const track: ITrack = {
        _id: '1', 
        name: 'track 1', 
        artist: 'artist 1', 
        text: 'text 1', 
        listens: 14, 
        audio: 'http://localhost:5000/audio/01cdb2e8-77c5-4aec-b3bf-58c1a060d11c.mp3', 
        picture: 'http://localhost:5000/image/51606316-60fb-44af-a987-5635cb2a2283.jpg'
    }
    const router = useRouter();

    return (
        <MainLayout>
            <Button
                variant={'outlined'}
                style={{fontSize: 24}}
                onClick={() => router.push("/tracks")}
            >
                К списку
            </Button>
            <Grid container my={2}>
                <img src={track.picture} width={200} height={200} />
                <div className={cls.infoBlock}>
                    <h1>Название трека - {track.name}</h1>
                    <h2>Исполнитель - {track.artist}</h2>
                    <h4 style={{color: 'gray', fontWeight: 'bold'}}>Прослушивания - {track.listens}</h4>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <Grid container>
                <TextField
                    label={'Ваше имя'}
                    fullWidth
                    className={cls.inputItem}
                />
                <TextField
                    label={'Ваш комментарий'}
                    fullWidth
                    multiline
                    rows={4}
                    className={cls.inputItem}
                />
                <Button variant='outlined' className={cls.inputItem}>
                    Отправить
                </Button>
            </Grid>
        </MainLayout>
    )
}

export default TrackPage;