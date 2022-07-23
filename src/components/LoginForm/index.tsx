import { Button, FormHelperText, Input, InputLabel, Typography } from '@mui/material';
import React, { FC } from 'react';
import {CustomNavLink, FormContainer, SpacedFormControl} from '../CustomFormComponents';

const LoginForm: FC = () => {
    return(
            <FormContainer>

                <Typography sx={{textAlign: "center"}} variant="h3" component="h1">Login</Typography>

                <SpacedFormControl>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input id="email" type="email" required/>
                </SpacedFormControl>
                
                <SpacedFormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" type="password" required/>
                </SpacedFormControl>

                <Button sx={{marginTop: "20px"}} variant='outlined'>
                            Login
                </Button>
                <FormHelperText>Don't have an account? <CustomNavLink to="/register">Register</CustomNavLink></FormHelperText>

            </FormContainer>
        )
};

export default LoginForm;
