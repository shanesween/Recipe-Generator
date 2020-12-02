import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.primary.main
    },
    toolbar: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        background: theme.palette.common.white
    },
    title: {

    },
    imgWrapper: {
        display: 'flex',
        flexGrow: 1,
        alignSelf: 'flex-end',
        '& img': {
            maxWidth: '200px',
        }
    }
}));

export default function ProminentAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <box className={classes.imgWrapper}>
                        <img src="/images/haircut-logo.png" alt="The Haircut Set Logo" />
                    </box>
                    <IconButton aria-label="search" color="inherit"
                        className={classes.menuButton}

                    >
                        <SearchIcon />
                    </IconButton>
                    <IconButton

                        className={classes.menuButton}

                        aria-label="display more actions" edge="end" color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}