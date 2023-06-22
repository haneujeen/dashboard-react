import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import LoginForm from './LoginForm';
import SignupForm from './SignUpForm';

import Typography from '@mui/material/Typography';

export default function AppRouter() {

    const renderCopyright = () => {
        return (
            <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '8%' }}>
                &copy; {new Date().getFullYear()} Your App. All rights reserved.
            </Typography>
        );
    };
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
            </Routes>
            {renderCopyright()}
        </Router>
    );
}