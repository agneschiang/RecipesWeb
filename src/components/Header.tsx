import {AppBar, Button, IconButton, Toolbar, Typography} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { Link } from 'react-router-dom';








export const Header: React.StatelessComponent<{}> = () => {
    return (
        <AppBar position="static" color="default" >
            <Toolbar>
                <IconButton  aria-label="Menu" color="inherit">
                    <MenuIcon aria-haspopup="true"/>
                </IconButton>

                <Typography variant="display2" color="inherit" >
                    <Link style={{color: "Black"}} to="/"> HealthFood</Link>
                </Typography>
                
                <Button>
                    <Link to="/FirstComponent"> Recipes </Link>
                </Button>
                <Button>
                    <Link to="/SecondComponent"> Profile </Link>
                </Button>
                
                <Button color="primary" variant="outlined">
                    <Link to="/Login"> Login </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
}
