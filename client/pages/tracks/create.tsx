import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import StapWrapper from '../../components/StapWrapper';
import { Button, Grid, TextField } from '@mui/material';
import  FileUpload from '../../components/FileUpload';
import { useInput } from '../../hooks/useUnput';
import { text } from 'stream/consumers';
import { useRouter } from 'next/router';
import axios from 'axios';

const Create = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const router = useRouter();
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');


  const nextStep = () => {
    setActiveStep(prev => prev + 1);
    if(activeStep === 3){
      console.log(picture)
      console.log(audio)
      const formData = new FormData();
      formData.append('name', name.state);
      formData.append('artist', artist.state);
      formData.append('text', text.state);
      formData.append('picture', picture);
      formData.append('audio', audio);

      axios.post("http://localhost:5000/tracks", formData)
      .then(resp => router.push('/tracks'))
      .catch(e => console.log(e))
    }
  }

  const prevStep = () => {
    setActiveStep(prev => prev - 1);
  }

  return (
    <MainLayout title={`Добавление трека`}>
        <StapWrapper activeStep={activeStep}>
          {activeStep === 1 && 
            <Grid container direction={'column'} style={{padding: 20}}>
              <h1>Общая информация</h1>
              <TextField
                {...name}
                style={{marginTop: 10}}
                label={"Название трека"}
              />
              <TextField
                {...artist}
                style={{marginTop: 10}}
                label={"Исполнитель"}
              />
              <TextField
                {...text}
                style={{marginTop: 10}}
                label={"Слова трека"}
                multiline
                rows={4}
              />
            </Grid>
          }
          {activeStep === 2 && 
            <FileUpload setFile={setPicture} accept='image/*'>
              <Button variant="contained">
                Загрузите изображение
              </Button>
            </FileUpload>
          }
          {activeStep === 3 && 
            <FileUpload setFile={setAudio} accept='audio/*'>
              <Button variant="contained">
                Загрузите трек
              </Button>
          </FileUpload>
          }
        </StapWrapper>
        <Grid container justifyContent={'space-between'}>
          <Button disabled={activeStep === 1} onClick={prevStep} variant='contained'>назад</Button>
          <Button onClick={nextStep}  variant='contained'>далее</Button>
        </Grid>
    </MainLayout>
  )
}

export default Create;
