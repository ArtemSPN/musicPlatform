import React from 'react'
import cls from '../styles/TrackItem.module.scss'
import { ITrack } from '../types/track'
import { Card, Grid, IconButton } from '@mui/material';
import { Delete, Pause, PlayArrow, PlayCircleSharp } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setActive, playTrack, pauseTrack } from '../store/player/slice/playerSlice';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter();
    const dispacth = useDispatch();
    


    const play = (e) => {
        e.stopPropagation();
        dispacth(setActive(track))
        dispacth(playTrack());
    }


    return (
        <Card className={cls.track} onClick={() => router.push('/tracks/'+track._id)}>
            <IconButton onClick={play}>
                {active
                ? <Pause/>
                : <PlayArrow/>
                }
            </IconButton>
            <img width={70} height={70} src={track.picture}/>
            <Grid container direction={'column'} style={{width: '55%', margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}
                >
                    {track.artist}
                </div>
            </Grid>
            {active && <div>02:33 / 04:21</div>}
            <IconButton onClick={(e) => e.stopPropagation()} style={{marginLeft: 'auto'}}>
                <Delete/>
            </IconButton>
        </Card> 
    )
}

export default TrackItem