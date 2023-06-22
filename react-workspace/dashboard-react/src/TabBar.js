import { useState } from 'react'

import { AppBar, Toolbar, Grid, Typography, Tabs, Tab, Button, Container} from '@mui/material'

import ProductTable from './ProductTable'
import Adding from './Adding'
import Searching from './Searching'
import Editing from './Editing'
import Deleting from './Deleting'

export default function TabBar({ products, add }) {
    const [tab, setTab] = useState(0)
    

    return (
        <div>
            <AppBar color='secondary' position="static">
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h6">Home Essential</Typography>
                        </Grid>
                        <Grid item>
                            <Tabs value={tab} onChange={(e, value) => setTab(value)} indicatorColor="transparent">
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
            <Container maxWidth='md' style={{ marginTop: '8%' }}>
                {tab === 0 && <Adding add={add} />}
                {tab === 1 && <Searching/>}
                {tab === 2 && <Editing/>}
                {tab === 3 && <Deleting/>}
                <ProductTable products={products}/>
            </Container>
        </div>
    )
}