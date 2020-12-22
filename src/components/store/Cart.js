import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: "90%",
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


export default function Cart({ total, cartData, handleDelete }) {
    const classes = useStyles();


    let keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <Container maxWidth="md">
            <div className={classes.root}>
                <Typography variant="h6" className={classes.title}>
                    Items in Shopping Cart</Typography>
                <Grid container spacing={6}>
                    <div className={classes.demo}>
                        {cartData.map((product) => (
                            <ListItem key={product.item + keys[0], keys.shift()}>
                                <ListItemText
                                    primary={product.item}
                                    secondary={product.price ? '$' + product.price : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton data-id={product.item} onClick={handleDelete} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </div>
                </Grid>
                <Typography variant="h6" className={classes.title}>
                    Total with Tax: {'$' + total}
                </Typography>
            </div>
        </Container>
    );
}
