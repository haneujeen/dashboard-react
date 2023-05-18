import React from 'react';
import { Button, TextField, Grid, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { signup } from './api/ApiService';

class Signup extends React.Component {
    handleSignup = (event) => {
        event.preventDefault(); // Prevent form submission
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');

        signup({ username, email, password })
            .then(() => {
                console.log('Signup successful');
                // Optionally, redirect to another page or perform additional actions
                // In this project, it's already redirecting to the login page in the signup function after a successful signup
            })
            .catch((error) => {
                console.error('Signup error:', error);
                // Handle signup error, e.g., display error message to the user
            });
    }

    render() {
        return (
        <Container component="main" maxWidth="xs" style={{ marginTop: '8%' }}>
            <form noValidate onSubmit={this.handleSignup}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h5" component="h1" align="center">Sign Up</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="User Name"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        autoFocus
                        autoComplete="username"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        required
                        fullWidth
                        autoFocus
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        name="password"
                        variant="outlined"
                        required
                        fullWidth
                        autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={12}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Sign Up
                </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center">
                        Already have an account? <Link to="/login">Log in</Link>
                    </Typography>
                </Grid>
            </Grid>
            </form>
        </Container>
        );
    }
}

export default Signup;
