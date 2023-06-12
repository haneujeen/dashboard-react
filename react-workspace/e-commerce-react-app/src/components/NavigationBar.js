import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const NavigationBar = ({ setTab }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTab(newValue); // this updates the parent state
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h6">Home Essentials</Typography>
                    </Grid>
                    <Grid item>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="add by title" />
                            <Tab label="add product" />
                            <Tab label="search product" />
                            <Tab label="search and edit" />
                            <Tab label="search & delete" />
                        </Tabs>
                    </Grid>
                    <Grid item>
                        <Button color="inherit">
                            Sign Out
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;
