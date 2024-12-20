import { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


const Header: FC = () => (
    <AppBar position="static">
        <Toolbar>
        <Typography variant="h6">Quotes App</Typography>
        </Toolbar>
    </AppBar>
)

export default Header