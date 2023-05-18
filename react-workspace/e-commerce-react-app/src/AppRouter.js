import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './Login';
import Signup from './Signup';

import Typography from '@mui/material/Typography';

const renderCopyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '30px' }}>
            &copy; {new Date().getFullYear()} Your App. All rights reserved.
        </Typography>
    );
};

class AppRouter extends React.Component {
    
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                {renderCopyright()}
            </Router>
        );
    }
}

export default AppRouter;