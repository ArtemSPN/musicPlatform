import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import cls from '../styles/Player.module.scss';
import { ITrack } from '../types/track';
import TrackProgres from './TrackProgres';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getPlayerActive, getPlayerCurrentTime, getPlayerDuration, getPlayerPause, getPlayerVolume } from '../store/player/selectors/selectors';
import { playTrack, playerAction, playerReducer, pauseTrack, setVolume, setCurrentTime, setDuration } from '../store/player/slice/playerSlice';

let audio: Audio = null;

const Player = () => {
    const dispacth = useDispatch();
    const pauseValue = useSelector(getPlayerPause);
    const volume = useSelector(getPlayerVolume);
    const track = useSelector(getPlayerActive);
    const durTime = useSelector(getPlayerDuration);
    const curTime = useSelector(getPlayerCurrentTime);

    useEffect(() => {
        if(!audio){
            audio = new Audio();
        }
        setAudio();
        if(!pauseValue)
            audio.play();
    }, [track]);

    const setAudio = () => {
        if(track)
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                dispacth( setDuration(Math.ceil(audio.duration)))
            }
            audio.ontimeupdate = () => {
                dispacth(setCurrentTime(Math.ceil(audio.currentTime)))

            }
            audio.src = track?.audio;
    }

    const playFunc = () => {
        if(pauseValue)
        {
            dispacth(playTrack());
            audio.play();
        }
        else
        {
            dispacth(pauseTrack());
            audio.pause();
        }

    }


    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100;
        dispacth(setVolume(e.target.value))
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value);
        dispacth(setCurrentTime(Number(e.target.value)))
    }

    return (
        <div className={cls.player}>
            <IconButton onClick={playFunc}>
                {!pauseValue
                    ? <Pause/>
                    : <PlayArrow/>   
                }
            </IconButton>
            <Grid container my={2} ml={2}>
                <img src={track?.picture} width={50} height={50} />
                <Grid className={cls.infoBlock}>
                    <h4 style={{margin: '5px 0'}}>Название трека - {track?.name}</h4>
                    <h6 style={{margin: '5px 0'}}>Исполнитель - {track?.artist}</h6>
                </Grid>
            </Grid>
            <TrackProgres left={curTime} right={durTime} onChange={changeCurrentTime}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgres left={volume} right={100} onChange={changeVolume}/>
        </div>
    )
}

export default Player