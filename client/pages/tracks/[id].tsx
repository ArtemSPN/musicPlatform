import React, { useEffect, useState } from 'react'
import { ITrack } from '../../types/track';
import MainLayout from '../../layouts/MainLayout';
import { useRouter } from 'next/router';
import { Button, Card, Grid, TextField } from '@mui/material';
import cls from '../../styles/TrackPage.module.scss'
import axios from 'axios';
import { useInput } from '../../hooks/useUnput';

const TrackPage = () => {
    const router = useRouter();
    const [track, setTrack] = useState<ITrack>(null);
    const name = useInput('');
    const comment = useInput("");

    useEffect(() => {
        axios.get("http://localhost:5000/tracks/" + router.query.id)
        .then(res => setTrack(res.data))
    }, [])

    const createComment = () => {
        const formData = new FormData();
        formData.append('username', name.state);
        formData.append("trackId", track._id);
        formData.append('text', comment.state);
        console.log(name.state)
        console.log(comment.state)
        console.log(formData)
        axios.post("http://localhost:5000/tracks/comment", {
            username: name.state, trackId: track._id, text: comment.state
        })
        .then(res => setTrack({...track, comments: [...track?.comments, res.data]}))
        .catch(e => console.log(e))
    }

    return (
        <MainLayout 
            title={`${track?.name} - ${track?.artist}`}
            keywords={`Музыка, артисты, ${track?.name}, ${track?.artist}`}    
        >
            <Button
                variant={'outlined'}
                style={{fontSize: 24}}
                onClick={() => router.push("/tracks")}
            >
                К списку
            </Button>
            <Grid container my={2}>
                <img src={track?.picture} width={200} height={200} />
                <div className={cls.infoBlock}>
                    <h1>Название трека - {track?.name}</h1>
                    <h2>Исполнитель - {track?.artist}</h2>
                    <h4 style={{color: 'gray', fontWeight: 'bold'}}>Прослушивания - {track?.listens}</h4>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track?.text}</p>
            {track?.comments?.map((comment, index) => 
                <div key={index} style={{border: '1px solid black', padding: 10}}>
                    <p style={{fontSize: 20, fontWeight: 'bold', margin: '5px 0'}}>{comment.username}</p>
                    <p>{comment.text}</p>
                </div>
            )}
            <Grid container>
                <TextField
                    {...name}
                    label={'Ваше имя'}
                    fullWidth
                    className={cls.inputItem}
                />
                <TextField
                    label={'Ваш комментарий'}
                    fullWidth
                    {...comment}
                    multiline
                    rows={4}
                    className={cls.inputItem}
                />
                <Button variant='outlined' onClick={createComment} className={cls.inputItem}>
                    Отправить
                </Button>
            </Grid>
        </MainLayout>
    )
}

export default TrackPage;