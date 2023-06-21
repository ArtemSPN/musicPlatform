import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import React, { ReactNode } from 'react'

interface StepWrapperProps {
    activeStep: number;
    children: ReactNode;
}

const steps = ['Информация о треке', "Загрузите обложку", "Загрузите трек"];

const StapWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
  return (
    <Container>
        <Stepper activeStep={activeStep-1}>
            {steps.map((step, index) => 
                <Step
                    key={index}
                    completed={activeStep > index + 1}
                >
                    <StepLabel>
                        {step}
                    </StepLabel>
                </Step>
            )
            }
        </Stepper>
        <Grid container justifyContent={'center'} style={{margin: '70px 0', height: 270}}>
            <Card style={{width: '80%'}}>
                {children}
            </Card>
        </Grid>
    </Container>
  )
}

export default StapWrapper