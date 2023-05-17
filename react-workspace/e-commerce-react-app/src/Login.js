import React from 'react';
import { signin } from './api/ApiService';
import { Button, TextField, Grid, Typography, Container } from '@mui/material';

class Login extends React.Component {
    handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        // Call the signin function from ApiService.java with the email and password
        signin({ email, password });
    };

    render() {
        return (
            <Container component="main" maxWidth="xs" style={{ marginTop: '8%' }}>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <Typography component="h1" variant="h5" style={{ marginBottom: '10px' }}>
                            Login
                        </Typography>
                    </Grid>
                </Grid>
                <form onSubmit={this.handleLogin} noValidate>
                <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>
                        <TextField
                            label="Email Address"
                            name="email"
                            id="email"
                            autoComplete="email"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                    </Grid>
                </Grid>
                </form>
            </Container>
        );
    }
}

export default Login;