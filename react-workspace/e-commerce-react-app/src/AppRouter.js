import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './Login';

import Typography from '@mui/material/Typography';

const renderCopyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '40px' }}>
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
                </Routes>
                {renderCopyright()}
            </Router>
        );
    }
}

export default AppRouter;